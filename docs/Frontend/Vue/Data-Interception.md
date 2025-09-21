---
tags:
  - Vue
  - 前端
date: 2025-01-20
---

# Vue 中数据拦截的本质

## 什么是拦截？

想象一下你在路上开着车，从地点 A 前往地点 B，本来你能够一路畅通无阻顺利到达。但是由于路上不小心违反了交通规则，被交警拦截下来，不能继续前行。

这就是现实生活中的拦截，拦截就是指在你做一件事情的中途将你打断，从而能够做一些额外的事情。

## 数据拦截

所谓数据拦截，无外乎就是你在对数据进行操作——比如读写的时候。

我们需要一种机制，在读写操作的中途进行一个打断，从而方便做一些额外的事情。这种机制我们就称之为数据拦截。

这种拦截打断的场景其实有很多，比如 Vue 和 React 里面的生命周期钩子方法。这种钩子方法本质上也是一种拦截，在组件从初始化到正常渲染的时间线里，设置了几个拦截点，从而方便开发者做一些额外的事情。

## JS 中的数据拦截

### 数据拦截方法

目前来讲，JS 中的数据拦截方式主要有两种：

- **Object.defineProperty** 对应 Vue 1.x、2.x 的响应式原理
- **Proxy** 对应 Vue 3.x 的响应式原理

1. `Object.defineProperty(obj, prop, descriptor)`

   这是 Object 上面的一个静态方法，用于**给一个对象添加新的属性**，除此之外还能够**对属性进行更为详细的配置**。

   - `obj`：要定义属性的对象。
   - `prop`：一个字符串或 Symbol，表示要定义或修改的属性键。
   - `descriptor`：属性描述符。这个参数可以是一个对象，可以描述的信息有：

   | 键名 | value     | writable | enumerable | configurable | get       | set       |
   | ---- | --------- | -------- | ---------- | ------------ | --------- | --------- |
   | 默认 | undefined | false    | false      | false        | undefined | undefined |

   :::details 属性描述符详解

   - `value`：属性的值，可以是任何有效的 JavaScript 值（数值，对象，函数等）。
   - `writable`：如果为 `false`，属性的值（value）将不能被改变。
   - `enumerable`：如果为 `false`，则该属性不可枚举，即不会被 `for...in` 或 `Object.keys()` 获取到。
   - `configurable`：如果为 `false`，则该属性不能被删除，且除 `writable` 外的其他特性描述符不能被修改。
   - `get`：一个给属性提供 getter 的方法，如果没有 getter 则为 `undefined`。该方法会在获取属性值时被调用。
   - `set`：一个给属性提供 setter 的方法，如果没有 setter 则为 `undefined`。该方法会在设置属性值时被调用。

   :::

   :::warning
   属性描述符分为**数据描述符**和**访问器描述符**，二者是互斥的。`value`、`writable`、`enumerable`、`configurable` 是数据描述符，`get`、`set` 是访问器描述符。
   :::

   ```JavaScript
   const obj = {};
   Object.defineProperty(obj, 'name', {
     value: '张三',
     writable: true,
     enumerable: true,
     configurable: true
   });
   ```

2. `Proxy(target,handler)`

   另外一种方式是通过创建代理对象的方式来实现拦截。

   - `target`：目标对象，可以是任何类型的对象，包括数组、函数等。
   - `handler`：定义代理对象的行为。
   - 返回值：返回的就是一个代理对象，之后外部对属性的读写都是针对代理对象来做的。

   ![Proxy](https://blog-1328542955.cos.ap-shanghai.myqcloud.com/proxy.excalidraw.png)

### 两者共同点

1. 都可以针对对象成员拦截。

   :::code-group

   ```JavaScript [Object.defineProperty]
   const obj = {};
   let data = 'Some data';
   Object.defineProperty(obj, 'data', {
     get() {
       console.log('Intercepted when reading data');
       return data;
     },
     set(value) {
       console.log('Intercepted when writing data');
       data = value;
     }
   });

   console.log(obj.data); // Intercepted when reading data, Some data
   obj.data = 'New data'; // Intercepted when writing data
   console.log(obj.data); // Intercepted when reading data, New data
   ```

   ```JavaScript [Proxy]
   const obj = {
     data: 'some data'
   };
   const p = new Proxy(obj, {
     get(target, prop) {
       console.log(`get ${prop}`);
       return target[prop];
     },
     set(target, prop, value) {
       console.log(`set ${prop} to ${value}`);
       target[prop] = value;
     }
   });
   console.log(p.data); // get data, some data
   p.data = 'new data'; // set data to new data
   console.log(p.data); // get data, new data
   ```

   :::

2. 两者都可以实现深度拦截，但需要自行书写递归。

   :::code-group

   ```JavaScript [Object.defineProperty]
   const data = {
     level1: {
       level2: {
         value: 42
       }
     }
   };

   function deepDefineProperty(obj) {
     for (let key in obj) {
       // 是否是自身属性 是否是对象
       if (obj.hasOwnProperty(key) && typeof obj[key] === 'object') {
         // 递归处理
         deepDefineProperty(obj[key]);
       }
       // 缓存当前值
       let value = obj[key];
       // 定义属性
       Object.defineProperty(obj, key, {
         get() {
           console.log(`getting ${key}: ${value}`);
           return value;
         },
         set(newValue) {
           console.log(`setting ${key}: ${newValue}`);
           value = newValue;
         },
         configurable: true,
         enumerable: true
       });
     }
   }

   deepDefineProperty(data);

   console.log(data.level1.level2.value);
   //getting level1: [object Object]
   // getting level2: [object Object]
   // getting value: 42
   // 42
   data.level1.level2.value = 43;
   // getting level1: [object Object]
   // getting level2: [object Object]
   // setting value: 43
   console.log(data.level1.level2.value);
   //getting level1: [object Object]
   // getting level2: [object Object]
   // getting value: 42
   // 43
   ```

   ```JavaScript [Proxy]
   const data = {
     level1: {
       level2: {
         value: 42
       }
     }
   };

   function deepProxy(obj) {
     return new Proxy(obj, {
       get(target, key) {
         console.log('get', key);
         if (typeof target[key] === 'object' && target[key] !== null) {
           return deepProxy(target[key]);
         }
         return target[key];
       },
       set(target, key, value) {
         console.log('set', key, value);
         if (typeof value === 'object' && value !== null) {
           return deepProxy(value);
         }
         target[key] = value;
       }
     });
   }

   const proxy = deepProxy(data);
   console.log(proxy.level1.level2.value); // get level1, get level2, get value, 42
   proxy.level1.level2.value = 43; // get level1, get level2, set value 43
   ```

   :::

### 两者差异点

1. 拦截的广度

   Vue 3 的响应式，从原来的 `Object.deepDefineProperty` 替换为了 `Proxy`。

   之所以替换，就是因为 **两者在进行拦截的时候，无论是拦截的目标还是能够拦截的行为，都是不同的！**

   - `Object.deepDefineProperty` 是 **针对对象特定属性** 的读写操作进行拦截；
   - `Proxy` 则是 **针对一整个对象的多个操作**，包括属性的读取、赋值、属性描述符的获取和设置、属性的删除、原型的查看以及函数的调用等行为。

   :::info
   如果是使用 `Object.defineProperty`，因为是针对单属性拦截。设置之后再新增的属性——无法拦截。``Proxy` 针对整个对象，因此新增属性仍然可以被拦截。
   :::

   :::details 理解上面这一点，就可以理解 Vue2 的响应式对象会有什么样的缺陷

   Vue 无法检测 property 的添加或移除。由于 Vue 会在初始化实例时对 property 执行 getter/setter 转化，所以 property 必须在 data 对象上存在才能让 Vue 将它转换为响应式的。例如：

   ```JavaScript
   var vm = new Vue({
     data: {
       a: 1
     }
   });

   // `vm.a` 是响应式的

   vm.b = 2;
   // `vm.b` 是非响应式的
   ```

   对于已经创建的实例，Vue 不允许动态添加根级别的响应式 property。但是，可以使用 Vue.set(object, propertyName, value) 方法向嵌套对象添加响应式 property。例如，对于：

   ```JavaScript
   Vue.set(vm.someObject, 'b', 2);
   ```

   您还可以使用 vm.$set 实例方法，这也是全局 Vue.set 方法的别名：

   ```JavaScript
   this.$set(this.someObject, 'b', 2);
   ```

   有时你可能需要为已有对象赋值多个新 property，比如使用 Object.assign() 或 \_.extend()。但是，这样添加到对象上的新 property 不会触发更新。在这种情况下，你应该用原对象与要混合进去的对象的 property 一起创建一个新的对象。

   ```JavaScript
   // 代替 `Object.assign(this.someObject, { a: 1, b: 2 })`
   this.someObject = Object.assign({}, this.someObject, { a: 1, b: 2 });
   ```

   :::

2. 性能上的区别

**大多数情况下**，Proxy 是高效的，但是不能完全断定，需要看具体的场景。

如果需要拦截的操作类型较少，且主要集中在某些特定属性上，`Object.defineProperty` 可以提供更好的性能。

- 但是只针对某个特定属性的拦截场景较少，一般都是需要针对一个对象的所有属性进行拦截。
- 此时如果需要拦截的对象结构复杂（如需要递归到嵌套对象）或者需要拦截的操作种类繁多，那么这种方式就会变得复杂且效率低下。

如果需要全面拦截对象各种操作，那么 Proxy 能提供更加强大和灵活的拦截操作，尽管会可能有些轻微的性能开销。

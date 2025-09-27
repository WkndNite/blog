---
tags:
  - 开发范式
  - 设计模式
date: 2025-01-16
---

# 设计模式详解第一期 单例模式

> 单例模式：限制类实例化次数只能一次，一个类只有一个实例，并提供一个访问它的全局访问点。单例模式是创建型设计模式的一种。针对全局仅需一个对象的场景，如线程池、全局缓存、window 对象等。

模式特点：

- 一个类只有一个实例
- 全局可访问该实例
- 自行实例化（主动实例化）
- 可推迟初始化，即延迟执行（与静态类或对象的区别）

## 全局变量

1. JavaScript 是一门非正规面向对象的语言，并没有类的定义。而单例模式要求一个唯一和全局访问的对象，在 JavaScript 中类似全局对象，刚好满足单例模式的两个特点。虽然不是正规的单例模式，但不可否认具备单例模式的特点。

2. 全局变量引发的问题：

   - 命名空间污染，容易命名冲突
   - 维护时不方便管理，容易不小心覆盖

3. 全局变量问题折中的应对方案：

   - 使用命名空间
   - 闭包封装私有变量（利用函数作用域）
   - ES6 引入了 const 和 symbol

虽然全局变量可以实现单例，但因其自身的问题，不建议在实际项目中将其作为单例模式的应用，特别是中大型项目的应用中，全局变量的维护该是考虑的成本。

:::warning
上面都只是考虑单文件情况，模块化开发中，模块化机制本身就可以很好应对命名冲突和变量污染问题。
:::

## 模式实现

> 基本思想：使用一个变量存储某个类的实例化对象，该变量初始值应为 null 或 undefined。进行类实例化时，对变量进行非空判断。若为空，允许实例化；若非空，直接返回该变量——保证相同类的生成实例方法多次调用，仍然会返回同一个实例对象。

### 简单版本

1. 在 ES5 中，使用函数和闭包实现单例模式。

   ```JavaScript
   let Singleton = function (name) {
     this.name = name;
     this.instance = null;
   };

   Singleton.prototype.getName = function () {
     return this.name;
   };
   Singleton.getInstance = function (name) {
     if (!this.instance) {
       this.instance = new Singleton(name);
     }
     return this.instance;
   };

   let instance1 = Singleton.getInstance('bob');
   let instance2 = Singleton.getInstance('tom');

   console.log(instance1.getName()); // bob
   console.log(instance2.getName()); // bob
   console.log(instance1 === instance2); // true
   ```

2. 在 ES6 之后，可以使用类实现单例模式。在考虑如何实现单例的时候，可以通过像之前一样，在实例级别进行限制；也可以在类级别通过静态方法声明进行设置。

   :::code-group

   ```JavaScript [实例级别.js]
   class Singleton {
     #name;
     static #instance;
     constructor(name) {
       this.#name = name;
       if (!Singleton.#instance) {
         Singleton.#instance = this;
       }
       return Singleton.#instance;
     }

     getName() {
       return this.#name;
     }
   }

   const instance1 = new Singleton('bob');
   const instance2 = new Singleton('tom');

   console.log(instance1.getName()); // bob
   console.log(instance2.getName()); // bob
   console.log(instance1 === instance2); // true
   ```

   ```JavaScript [类级别.js]
   class Singleton {
     #name;
     constructor(name) {
       this.#name = name;
     }

     getName() {
       return this.#name;
     }

     static getInstance(name) {
       if (!this.instance) {
         this.instance = new Singleton(name);
       }
       return this.instance;
     }
   }

   const instance1 = Singleton.getInstance('bob');
   const instance2 = Singleton.getInstance('tom');

   console.log(instance1.getName()); // bob
   console.log(instance2.getName()); // bob
   console.log(instance1 === instance2); // true
   ```

   :::

3. 存在的问题：

   - ES5 版本的写法不够透明，不能通过 new 操作符直接实例化，需要通过 getInstance 方法进行实例化。ES6 版本的写法则相对透明，可以直接通过 new 操作符进行实例化，但需要通过静态方法进行实例化。
   - 无论上面哪一个版本，对单例的管理操作和实例化操作都耦合在一起，不够优雅，换句话讲，这种行为不符合单一职责原则。

:::tip
static 可以声明静态属性和方法，静态属性和方法属于类，而不是类的实例。
:::

### 透明版本

1. 在 ES5 中，可以通过闭包和立即执行函数实现单例模式。

   ```JavaScript
   let Singleton = (function () {
     let instance;
     return function (name) {
       if (instance) return instance;
       this.name = name;
       return (instance = this);
     };
   })();

   Singleton.prototype.getName = function () {
     return this.name;
   };
   let a = new Singleton('a');
   let b = new Singleton('b');
   console.log(a.getName()); // a
   console.log(b.getName()); // a
   console.log(a === b); // true
   ```

2. 在 ES6 中，前面的写法就已经满足我们现在对于透明版本的需求，所以这里不再进行修改。

### 代理版本

代理版本的出现，是意图解决单例的管理操作和实例化操作的解耦。
:::code-group

```JavaScript [ES5.js]
let ProxySingleton = (function () {
  let instance = null;

  return function (name) {
    if (instance) return instance;
    return (instance = new Singleton(name));
  };
})();
let Singleton = function (name) {
  this.name = name;
};
Singleton.prototype.getName = function () {
  return this.name;
};
const a = new ProxySingleton('a');
const b = new ProxySingleton('b');
console.log(a.getName()); // a
console.log(b.getName()); // a
console.log(a === b); // true
```

```JavaScript [ES6.js]
class ProxySIngleton {
  static #instance = null;
  constructor(name) {
    if (ProxySIngleton.#instance) return ProxySIngleton.#instance;
    return (ProxySIngleton.#instance = new Singleton(name));
  }
}
class Singleton {
  constructor(name) {
    this.name = name;
  }
  getName() {
    return this.name;
  }
}
const a = new ProxySIngleton('a');
const b = new ProxySIngleton('b');
console.log(a.getName()); // a
console.log(b.getName()); // a
console.log(a === b); // true
```

:::

### 惰性版本

> 惰性单例模式指的是在需要的时候才创建对象实例。前端需求中，惰性单例模式通常用于初始化只需要一次的组件，例如模态框、工具提示框等。

:::code-group

```JavaScript [开发举例.js]
let getSingleton = function (fn) {
  let result;
  return function () {
    return result || (result = fn.apply(this, arguments));
  };
};

let createLoginLayer = function () {
  let div = document.createElement('div');
  div.innerHTML = '我是登录浮窗';
  div.style.display = 'none';
  document.body.appendChild(div);
  return div;
};

let createSingleLoginLayer = getSingleton(createLoginLayer);

document.getElementById('loginBtn').onclick = function () {
  let loginLayer = createSingleLoginLayer();
  loginLayer.style.display = 'block';
};
```

```JavaScript [ES5.js]
let getSingleton = function (fn) {
  let result;
  return function (...args) {
    return result || (result = new fn(...args));
  };
};

function Foo(name) {
  this.name = name;
}

Foo.prototype.getName = function () {
  return this.name;
};

const SingletonFoo = getSingleton(Foo);

const instance1 = new SingletonFoo('First');
const instance2 = new SingletonFoo('Second');

console.log(instance1 === instance2); // true
console.log(instance1.getName()); // "First"
console.log(instance2.getName()); // "First"
```

```JavaScript [ES6.js]
class Singleton {
  constructor(fn) {
    this.fn = fn;
    this.instance = null;
  }

  getInstance(...args) {
    if (!this.instance) this.instance = new this.fn(...args);
    return this.instance;
  }
}

class Foo {
  constructor(name) {
    this.name = name;
  }

  getName() {
    return this.name;
  }
}

const singletonFoo = new Singleton(Foo);

const instance1 = singletonFoo.getInstance('First');
const instance2 = singletonFoo.getInstance('Second');

console.log(instance1 === instance2); // true
console.log(instance1.getName()); // "First"
console.log(instance2.getName()); // "First"
```

:::

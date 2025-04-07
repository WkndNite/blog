---
date: 2025-03-08 20:16:02
tags:
  - ESnext
  - 前端
  - JavaScript
---

# ES6 中对象的改动

## 对象成员速写

示例 1：

```JavaScript
const name = 'monica';
const age = 18;
const sayHello = function () {
  console.log(`Hello,my name is ${this.name},I'm ${this.age} years old`);
};

const person = {
  name: name,
  age: age,
  sayHello: sayHello
};

const person2 = {
  name,
  age,
  sayHello
};
```

示例 2：

```JavaScript
const MyMath = {
  sum: function (a, b) {},
  random: function (min, max) {}
};

const MyMath2 = {
  sum(a, b) {},
  random(min, max) {}
};
```

## 展开运算符

示例 1：

```JavaScript
const arr = [1, 2, 3, 4, 5];
Math.max(...arr);
```

示例 2：

```JavaScript
const obj1 = { a: 1, b: 2 };
const obj2 = { c: 3, d: 4 };

const obj3 = { ...obj1, ...obj2 };
```

示例 3：

```JavaScript
const arr = [2, 3, 4];
const arr2 = [1, ...arr, 5];
```

示例 4：

```JavaScript
const user = {
  name: 'monica',
  age: 18
};
const user2 = {
  ...user,
  name: 'lisa'
};
```

## 对象的解构赋值

示例 1：

```JavaScript
const user = {
  name: 'monica',
  age: 18,
  addr: {
    city: 'Beijing'
  }
};

const {
  name,
  age,
  addr: { city }
} = user;
```

示例 2：

```JavaScript
const array = [1, 2, 3, 4, 5];
const [a, b, c, d, e] = array;
```

示例 3：

```JavaScript
let a = 1;
let b = 2;
[a, b] = [b, a];
```

示例 4：

```JavaScript
const users = [
  { name: 'monica', age: 18 },
  { name: 'lisa', age: 20 },
  { name: 'lucy', age: 22 }
];

for (const { name, age } of users) {
  console.log(name, age);
}
```

## 属性描述符

对于对象中的每个成员，JS 使用属性描述符来描述它们：

```JavaScript
const user = {
  name: 'monica',
  age: 18
};
```

上面的对象，在 JS 内部被描述为：

```JavaScript
{
    name:{
        value:'monica',
        writable:true,
        configurable:true,
        enumerable:true
    },
    age:{
        value:18,
        writable:true,
        configurable:true,
        enumerable:true
    }
}
```

ES 5 提供了一系列的 API，针对属性描述符进行操作。

1. `Object.getOwnPropertyDescriptor(obj, prop)`

   ```JavaScript
   const desc = Object.getOwnPropertyDescriptor(user, 'name');
   console.log(desc);
   ```

2. `Object.defineProperty(obj, prop, descriptor)`

   ```JavaScript
   Object.defineProperty(user, 'name', {
     value: 'lisa',
     writable: false,
     configurable: false,
     enumerable: true
   });
   ```

### getter 和 setter

属性描述符中有两个特殊配置，分别为 `get` 和 `set`，通过它们，可以把属性的取值和赋值变为方法调用。

```JavaScript
const user = {
  name: 'monica',
  age: 18
};

Object.defineProperty(user, 'name', {
  get() {
    return 'defaultName';
  },
  set(value) {
    console.log('set name', value);
  }
});

console.log(user.name); // defaultName
user.name = 'lisa'; // set name lisa
console.log(user.name); // defaultName
```

## 键值对

`Object.keys(obj)`：获取对象中所有的键，返回一个数组。

`Object.values(obj)`：获取对象中所有的值，返回一个数组。

`Object.entries(obj)`：获取对象中所有的键值对，返回一个二维数组。

`Object.fromEntries(arr)`：把二维数组转换为对象。

```JavaScript
const user = {
  name: 'monica',
  age: 18
};

const keys = Object.keys(user);
const values = Object.values(user);
const entries = Object.entries(user);

console.log(keys); // ['name', 'age']
console.log(values); // ['monica', 18]
console.log(entries); // [['name', 'monica'], ['age', 18]]

const obj = Object.fromEntries(entries);
console.log(obj); // {name: 'monica', age: 18}
```

## 冻结

`Object.freeze(obj)`：冻结对象，使其不可修改。

`Object.isFrozen(obj)`：判断对象是否被冻结。

```JavaScript
const user = {
  name: 'monica',
  age: 18
};

Object.freeze(user);

user.name = 'lisa';
console.log(user.name); // monica
```

## 相同性判定

`Object.is(value1, value2)`：判断两个值是否相等。

它和 `===` 的区别在于：

- NaN 和 NaN 相等。
- +0 和 -0 不相等。

```JavaScript
console.log(Object.is(NaN, NaN)); // true
console.log(Object.is(+0, -0)); // false
```

## Set 和 Map

`Set` 是一种新的数据结构，它类似于数组，但是成员的值都是唯一的，没有重复的值。

Set 提供了一些方法，用于操作 Set 数据结构：

- `add(value)`：添加一个值，返回 Set 本身。
- `delete(value)`：删除一个值，返回一个布尔值，表示删除是否成功。
- `has(value)`：返回一个布尔值，表示该值是否为 Set 的成员。
- `clear()`：清除所有成员，没有返回值。
- `size`：返回 Set 的成员总数。

`Map` 是一种新的数据结构，它类似于对象，但是它的键可以是任意类型。

Map 提供了一些方法，用于操作 Map 数据结构：

- `set(key, value)`：添加一个键值对，返回 Map 本身。
- `get(key)`：返回某个键对应的值，如果找不到，返回 undefined。
- `has(key)`：返回一个布尔值，表示某个键是否为 Map 的成员。
- `delete(key)`：删除某个键，返回一个布尔值，表示删除是否成功。
- `clear()`：清除所有成员，没有返回值。
- `size`：返回 Map 的成员总数。

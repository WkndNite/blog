---
date: 2025-03-21 23:07:07
tags:
  - JavaScript
  - 面试
  - 前端
  - 手撕代码
---

# 数组方式解构对象

## 经典真题

> 如何能让下面代码成立？
>
> ```JavaScript
> let obj = { a : 1, b : 2 };
> const [a,b] = obj;
> console.log(a,b)
> ```

## 题目解析

首先，你可以尝试去运行如上代码，会得到这样一个结果：

![alt](https://blog-1328542955.cos.ap-shanghai.myqcloud.com/PixPin_2025-03-21_23-11-04.png)

这里我不展开描述，只解释下面几个概念，你可以参阅 ECMAScipt 官方文档 [关于解构](https://262.ecma-international.org/13.0/#sec-well-known-symbols)。

- 什么叫 `可迭代对象`？满足可迭代协议的对象。
- 什么叫 `可迭代协议`？对象必须实现 `@@iterator` 方法，该方法返回一个迭代器。
- 什么叫 `迭代器`？对象必须实现 `next` 方法，该方法返回一个对象，包含 `value` 和 `done` 属性。
- 什么叫 `知名符号`？`@@iterator` 就是其中之一，这里我们要实现的是 `[Symbol.iterator]`。

接下来，我们来实现这样一个功能：

```JavaScript
let obj = {
  a: 1,
  b: 2,
  [Symbol.iterator]() {
    let values = [this.a, this.b];
    let index = 0;

    return {
      next() {
        if (index < values.length) {
          return {
            value: values[index++],
            done: false,
          };
        } else {
          return {
            value: undefined,
            done: true,
          };
        }
      },
    };
  },
};
```

当然，我们也可以通过生成器来实现这样的效果：

```JavaScript
let obj = {
  a: 1,
  b: 2,
  *[Symbol.iterator]() {
    yield this.a;
    yield this.b;
  },
};
```

但是，如果要求你不可以修改 obj 的声明呢？

```JavaScript
let obj = {
  a: 1,
  b: 2,
};

Object.prototype[Symbol.iterator] = function () {
    const arr = [1,2];
    return arr[Symbol.iterator]();
}

const [a, b] = obj;
console.log(a, b);
```

自然地，不建议你硬编码：

```JavaScript
let obj = {
  a: 1,
  b: 2,
};

Object.prototype[Symbol.iterator] = function () {
    const arr = Object.values(this);
    return arr[Symbol.iterator]();
}

const [a, b] = obj;
console.log(a, b);
```

当然，你也可以一行代码搞定：

```JavaScript
let obj = {
  a: 1,
  b: 2,
};

Object.prototype[Symbol.iterator] = function () {
    return Object.values(this)[Symbol.iterator]();
}

const [a, b] = obj;
console.log(a, b);
```

进一步地，如果你的 ES6 学的足够透彻，你可以达到这样一个境界：

```JavaScript
let obj = {
  a: 1,
  b: 2,
};

Object.prototype[Symbol.iterator] = function* () {
    yield* Object.values(this);
  };

const [a, b] = obj;
console.log(a, b);
```

---
date: 2025-03-07 17:24:43
tags:
  - ESnext
  - JavaScript
  - 前端
---

# ES6+ 一些零碎的改动

## 严格模式

此为 ES5 新增语法。

参考：<https://www.runoob.com/js/js-strict.html>

参考：<https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Strict_mode>

## let 和 const

ES6 建议不再使用 var 定义变量，而是使用 let 定义变量，const 定义常量。

**对于开发的影响：均使用 const，如果实在需要修改值再使用 let。**

无论是使用 let 还是 const，它们均解决了长久以来变量定义的问题，使用它们定义变量，具有以下特点：

- 全局定义的变量不再作为属性添加到全局对象中
- 在变量定义之前使用它会报错
- 不可重复定义同名变量
- 使用 const 定义变量时必须初始化
- 变量具有块级作用域，在代码块之外不可使用

注意，在 for 循环中使用 let 定义变量，变量所在的作用域是循环体，因此在循环外不能使用。另外，for 循环会对该变量做特殊处理，让每次循环使用的都是一个独立的循环变量，这可以解决 JS 由来已久的问题。

```JavaScript
for (var i = 0; i < 13; i++) {
  setTimeout(function () {
    console.log(i);
  }, 1000);
}

// solution IIFE
for (var i = 0; i < 13; i++) {
  (function (i) {
    setTimeout(function () {
      console.log(i);
    }, 1000);
  })(i);
}

// solution let
for (let i = 0; i < 13; i++) {
  setTimeout(function () {
    console.log(i);
  }, 1000);
}
```

## 幂运算

ES7 新增语法，使用 `**` 表示幂运算。

```JavaScript :no-line-numbers
console.log(2 ** 3); // 8
```

## 字符串新增 API

| API                              | 含义                           |
| -------------------------------- | ------------------------------ |
| String.prototype.includes()      | 判断字符串是否包含某个子字符串 |
| String.prototype.trim()          | 去除字符串两端的空格           |
| String.prototype.trimStart()     | 去除字符串开头的空格           |
| String.prototype.trimEnd()       | 去除字符串结尾的空格           |
| String.prototype.replaceAll(s,t) | 将字符串中所有 s 替换为 t      |
| String.prototype.startsWith(s)   | 判断字符串是否以 s 开头        |
| String.prototype.endsWith(s)     | 判断字符串是否以 s 结尾        |

:::tip
注意区别原型方法和静态方法，原型方法必须通过实例调用。
:::

## 模板字符串

ES6 提供了一种新的字符串字面量的书写方式，即模板字符串，写法为：

```JavaScript
`字符串内容`;
```

模板字符串可以轻松地实现换行和拼接：

```JavaScript
const s = `hello
world`;
console.log(s);
// hello
// world

const name = '张三';
const age = 18;
const s2 = `姓名：${name}，年龄：${age}`;
console.log(s2); // 姓名：张三，年龄：18
```

在需要换行的时候，模板字符串比普通字符串更优秀。

通常，我们可以用模板字符串拼接 HTML。

```JavaScript
const s = `
  <div>
    <h1>${title}</h1>
    <p>${content}</p>
  </div>
`;
```

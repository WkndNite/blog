---
date: 2025-02-25
tags:
  - JavaScript
  - 前端
---

# JavaScript 作用域与闭包

## 作用域

作用域表示一个代码区域，也表示一个运行环境。

JS 中有两种作用域：全局作用域和函数作用域。

- 全局作用域是直接书写在脚本中的代码；函数作用域是书写在函数中的代码。
- 在全局作用域中声明的变量，会被提升到脚本块的顶部，并且会成为全局对象的属性；在函数作用域中声明的变量，会被提升到函数的顶部，并且不会成为全局对象的属性。**因此，函数中声明的变量不会导致全局对象的污染，所以我们要尽量把功能封装在函数中。**

:::tip
但是，当函数成为一个表达式时，它既不会提升，也不会污染全局对象。将函数变为一个函数表达式的方式之一，就是将函数用 `` 包起来。对应的调用方法，也应该将其视为 IIFE（Immediately Invoked Function Expression）。

大部分情况下，函数表达式的函数名没有实际意义，因此可以省略函数名。而没有名字的函数，称之为匿名函数。
:::

## 作用域中可以使用的变量

全局作用域只能使用全局作用域中声明的变量和函数；

函数作用域不仅能使用自身作用域中声明的变量和函数，还能使用外部环境的变量和函数。

可以将某函数的依赖函数书写在该函数内部。

函数内部变量和外部所声明的冲突时，使用内部的。

## 闭包

闭包（closure），是一种现象，意为内部函数可以使用外部函数的变量。

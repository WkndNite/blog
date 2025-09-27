---
tags:
  - 前端
  - TypeScript
date: 2025-01-21
cover: https://cdn-icons-png.flaticon.com/128/5968/5968381.png
---

# 字节 · 深入浅出 TypeScript

这篇文章是我在大三期间参加字节青训营的一份记录，通过它来掌握一些基础和高级的用法、如何应用于企业开发以及通过 Playground 在 JS 与 TS 之间做到转换。

## 为什么要学习 TypeScript

| TypeScript                                      | JavaScript                     |
| ----------------------------------------------- | ------------------------------ |
| JavaScript 的超集，用于解决大型项目的代码复杂性 | 一种脚本语言，用于创建动态网页 |
| 强类型，支持静态和动态类型                      | 动态弱类型语言                 |
| 可以在编译期间发现并纠正错误                    | 只能在运行时发现错误           |
| 不允许改变变量的数据类型                        | 变量可以被赋值成不同类型       |

那么，TypeScript 到底带来了什么？

<mark>类型安全 + 下一代 JS 特性 + 完善的工具链。</mark>

## TS 基础

### 基础类型

1. boolean、number、string
2. enum
3. any、unknown、void
4. never
5. []
6. tuple

### 函数类型

1. 定义：TS 定义函数类型时要输入参数类型和输出类型。
2. 输入参数：参数支持可选参数和默认参数。
3. 输出参数：输出可以自动推断，没有返回值时默认为 void。
4. 函数重载：名称相同但参数不同，可以通过重载支持多种类型。

### interface

1. 定义：接口是为了定义对象类型
2. 特点：
   - 可选属性：?
   - 只读属性：readonly
   - 可以描述函数类型。
   - 可以描述自定义属性。
3. 总结：接口非常灵活，可以帮助开发人员实现 duck typing。

> Duck typing is a term commonly related to dynamically typed programming languages and polymorphism. The idea behind this principle is that the code itself doesn't care about whether an object is a duck, rather it only cares about whether it quacks.

```ts
interface Person {
  name: string;
  age: number;
}
const p1: person = {
  name: '周末晚',
  age: '22'
};

interface RandomKey {
  [propName: string]: string;
}
const obj: RandomKey = {
  a: 'hello',
  b: 'world',
  c: 'typeScript'
};
```

### 类

1. 定义：写法和 JS 差不多，增加了一些定义
2. 特点：
   - 增加了 `public`、`private`、`protected` 修饰符。
   - 抽象类：
     - 只能被继承，不能被实例化。
     - 作为基类，抽象方法必须被子类实现。
   - `interface` 约束类，使用 `implements` 关键字。

## TS 进阶

### 高级类型

1. 联合类型 |

   ```ts
   let num: number | string;
   num = 8;
   num = 'eight';
   ```

2. 交叉类型 &

   ```ts
   interface Person {
     name: string;
     age: number;
   }
   type Student = Person & { grade: number };
   const stu: Student = {
     name: '周末晚',
     age: '22',
     grade: '60'
   };
   ```

3. 类型断言

   断言有两种用法：通过标识符实现属性前置定义以及通过 `as` 标识符实现，比较推荐后者。

   断言又可以分类为 `非空断言` 和 `确定赋值断言`。

   ```ts
   function getLength1(arg: number | string): number {
     return arg.length;
     //Property 'length' does not exist on type 'number'.
   }

   function getLength2(arg: number | string): number {
     const str = arg as string;
     if (str.length) {
       return str.length;
     } else {
       const number = arg as number;
       return number.toString().length;
     }
   }
   ```

4. 类型别名
   - 相同点：都可以定义对象或者函数，都允许继承。
   - 差异点：
     - `interface` 主要用来定义对象，`type` 主要定义别名。
     - `interface` 不可以定义基本类型，`type` 可以定义基本类型。
     - `interface` 可以合并重复声明，`type` 不可以。

### 泛型

> 官方定义：软件工程中，我们不仅要创建一致的定义良好的 API，同时也要考虑可重用性。组件不仅能够支持当前的数据类型，同时也能支持未来的数据类型。这在创建大型系统时提供了十分灵活的功能。

1. 泛型的使用可以通过尖括号定义，也可以通过传入参数的类型自动推导。

   ```ts
   function getNumber(arg: number): number {}
   function getString(arg: string): string {}
   function getAny(arg: any): any {}
   // 输入和输出类型一致 需要予以关联
   function getSomething<T>(arg: T): T {}
   getSomething<string>('Hello');
   getSomething('Hello');
   ```

2. 泛型的基础操作符

   - typeof：获取类型。
   - keyof：获取所有键。
   - in：遍历枚举类型。
   - T[k]：索引访问。
   - extends：泛型约束。

3. 泛型常用的工具类型

   - Partial
   - Require
   - Readonly
   - Pick / Record / ...

## 实战 & 工程向

### 声明文件

1. `declare`：三方库需要类型声明文件
2. `.d.ts`：声明文件定义
3. `@types`：三方库 TS 类型包
4. `tsconfig.json`：定义 TS 的配置。

![泛型约束 API](https://blog-1328542955.cos.ap-shanghai.myqcloud.com/TS-test.png)

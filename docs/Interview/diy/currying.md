---
date: 2025-03-25 21:56:01
tags:
  - 函数柯里化
  - JavaScript
  - 面试
  - 手撕代码
  - 前端
---

# 函数柯里化

## 经典真题

> 什么是函数柯里化？

## 什么是函数柯里化

在计算机科学中，柯里化（英语：Currying），又译为卡瑞化或加里化，是把接受多个参数的函数变换成接受一个单一参数（最初函数的第一个参数）的函数，并且返回接受余下的参数而且返回结果的新函数的技术。

这个技术由克里斯托弗·斯特雷奇以逻辑学家哈斯凯尔·加里命名的，尽管它是 Moses Schönfinkel 和戈特洛布·弗雷格发明的。

在直觉上，柯里化声称如果你固定某些参数，你将得到接受余下参数的一个函数。

我们姑且叫它返回函数，在调用返回函数的时候，它将判断当前的参数和之前被柯里化函数固定的参数拼起来之后，是否达到了原本函数的参数个数。

如果是，则执行原本的函数，得到结果；如果没有达到，则要继续调用柯里化函数来固定目前的参数。

在理论计算机科学中，柯里化提供了在简单的理论模型中，比如：只接受一个单一参数的 lambda 演算中，研究带有多个参数的函数的方式。

函数柯里化的对偶是 Uncurrying，一种使用匿名单参数函数来实现多参数函数的方法。

## 柯里化快速入门

接下来，我们来通过一个简单的示例，让大家快速体会函数柯里化。

假设我们有一个求取两个数之和的函数：

```JavaScript
function add(x, y) {
  return x + y;
}
console.log(add(1, 2)); // 3
console.log(add(5, 7)); // 12
```

在上面的示例中，我们有一个 add 函数，接收两个形参，返回两形参的和。

在调用的时候，我们每次也需要传递两个参数。

现在，我们对其进行柯里化，如下：

```JavaScript
function add(x) {
  return function (y) {
    return x + y;
  };
}
console.log(add(1)(2)); // 3
console.log(add(5)(7)); // 12
```

在上面的代码中，我们对 add 函数进行了柯里化改造，只接受一个参数，但是返回的也不是值了，而是返回一个函数，这个函数也接收一个参数，然后利用闭包的特性，可以访问到最开始传入的 x 的值，最终返回 x 和 y 的和。

所以，通过上面的这个示例，我们能够体会到前面所说的柯里化函数的特点：

一个柯里化的函数首先会接受一些参数，接受了这些参数之后，该函数并不会立即求值，而是继续返回另外一个函数，刚才传入的参数在函数形成的闭包中被保存起来。待到函数被真正需要求值的时候，之前传入的所有参数都会被一次性用于求值。

## 函数柯里化实际应用

通过上面的例子，我们体验到了什么是柯里化函数。

但是问题来了，费这么大劲封装一层，到底有什么用处呢？

没有好处想让我们程序员多干事情是不可能滴，这辈子都不可能。

所以接下来我们就来看一下函数柯里化的一个实际应用。

1. 参数复用

   就是将相同的参数固定下来。

   <<< ./snippets/currying.js#1

   上面的示例是一个正则的校验，正常来说直接调用 check 函数就可以了，但是如果我有很多地方都要校验是否有数字，其实就是需要将第一个参数 reg 进行复用，这样别的地方就能够直接调用 hasNumber、hasLetter 等函数，让参数能够复用，调用起来也更方便。

2. 提前确认

   <<< ./snippets/currying.js#2

   我们在做项目的过程中，封装一些 DOM 操作可以说再常见不过，上面第一种写法也是比较常见，但是我们看看第二种写法，它相对于第一种写法就是自执行然后返回一个新的函数，这样其实就是提前确定了会走哪一个方法，避免每次都进行判断。

## 封装通用柯里化函数

接下来我们来封装一个通用的柯里化函数。

```JavaScript
function curry() {
  var fn = arguments[0]; // 获取要执行的函数
  // 获取传递的参数，构成一个参数数组
  var args = [].slice.call(arguments, 1);
  // 如果传递的参数已经等于执行函数所需的参数数量
  if (args.length === fn.length) {
    return fn.apply(this, args);
  }
  // 参数不够向外界返回的函数
  function curry() {
    // 推入之前判断
    // 将新接收到的参数推入到参数数组中
    args.push(...arguments);
    if (args.length === fn.length) {
      return fn.apply(this, args);
    }
    return curry;
  }
  return curry;
}
```

对上面的代码进行测试：

```JavaScript
// 测试 1
function add(a, b, c) {
  return a + b + c;
}

console.log(curry(add)(1)(2)(3)); // 6
console.log(curry(add, 1)(2)(3)); // 6
console.log(curry(add, 1, 2, 3)); // 6
console.log(curry(add, 1)(3, 4)); // 8

var addCurrying = curry(add)(2);
console.log(addCurrying(7)(8)); // 17

// 测试 2
function check(reg, txt) {
  return reg.test(txt);
}
var hasNumber = curry(check)(/\d+/g);
console.log(hasNumber('test1')); // true
```

## 一道经典的柯里化面试题

实现一个 add 方法，使计算结果能够满足如下预期：

```JavaScript
add(1)(2)(3) = 6;
add(1, 2, 3)(4) = 10;
add(1)(2)(3)(4)(5) = 15;
```

要完成上面的需求，我们就可以使用柯里化函数：

```JavaScript
function add() {
  // 第一次执行时，定义一个数组专门用来存储所有的参数
  var args = Array.prototype.slice.call(arguments);

  // 在内部声明一个函数，利用闭包的特性保存 args 并收集所有的参数值
  var adder = function () {
    args.push(...arguments);
    return adder;
  };

  // 这个是最后输出的时候被调用的，return 后面如果是函数体，
  // 为了输出函数体字符串会自动调用 toString 方法
  // 利用 toString 隐式转换的特性，当最后执行时隐式转换，并计算最终的值返回
  adder.toString = function () {
    return args.reduce(function (a, b) {
      return a + b;
    });
  };

  // 这个 return 是第一次调用的时候返回上面的函数体，
  // 这样后面所有的括号再执行的时候就是执行 adder 函数体
  return adder;
}
console.log(add(1)(2)(3).toString()); // 6
console.log(add(1, 2, 3)(4).toString()); // 10
console.log(add(1)(2)(3)(4)(5).toString()); // 15
console.log(add(2, 6)(1).toString()); // 9
```

## 真题详解

- 什么是函数柯里化？

> 参考答案：
>
> 柯里化（currying）又称部分求值。一个柯里化的函数首先会接受一些参数，接受了这些参数之后，该函数并不会立即求值，而是继续返回另外一个函数，刚才传入的参数在函数形成的闭包中被保存起来。待到函数被真正需要求值的时候，之前传入的所有参数都会被一次性用于求值。
>
> 举个例子，就是把原本：
>
> function(arg1,arg2) 变成 function(arg1)(arg2)
>
> function(arg1,arg2,arg3) 变成 function(arg1)(arg2)(arg3)
> function(arg1,arg2,arg3,arg4) 变成 function(arg1)(arg2)(arg3)(arg4)
>
> 总而言之，就是将：
>
> function(arg1,arg2,…,argn) 变成 function(arg1)(arg2)…(argn)

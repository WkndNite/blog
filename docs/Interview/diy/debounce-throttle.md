---
date: 2025-03-25 21:30:59
tags:
  - JavaScript
  - 前端
  - 性能优化
  - 防抖
  - 节流
  - 面试
  - 手撕代码
---

# 函数防抖和节流

## 经典真题

> 防抖，节流是什么，如何实现？（字节）

## 什么是函数防抖和节流

JavaScript 中的函数大多数情况下都是由用户主动调用触发的，除非是函数本身的实现不合理，否则一般不会遇到跟性能相关的问题。

但是在一些少数情况下，函数的触发不是由用户直接控制的。在这些场景下，函数有可能被非常频繁地调用，而造成大的性能问题。解决性能问题的处理办法就有函数防抖和函数节流。

下面是函数被频繁调用的常见的几个场景：

- mousemove 事件：如果要实现一个拖拽功能，需要一路监听 mousemove 事件，在回调中获取元素当前位置，然后重置 DOM 的位置来进行样式改变。如果不加以控制，每移动一定像素而触发的回调数量非常惊人，回调中又伴随着 DOM 操作，继而引发浏览器的重排与重绘，性能差的浏览器可能就会直接假死。

- window.onresize 事件：为 window 对象绑定了 resize 事件，当浏览器窗口大小被拖动而改变的时候，这个事件触发的频率非常之高。如果在 window.onresize 事件函数里有一些跟 DOM 节点相关的操作，而跟 DOM 节点相关的操作往往是非常消耗性能的，这时候浏览器可能就会吃不消而造成卡顿现象。

- 射击游戏的 mousedown/keydown 事件（单位时间只能发射一颗子弹）

- 搜索联想（keyup 事件）

- 监听滚动事件判断是否到页面底部自动加载更多（scroll 事件）

对于这些情况的解决方案就是函数防抖（debounce）或函数节流（throttle），其核心就是限制某一个方法的频繁触发。

## 函数防抖

我们首先来看函数防抖。函数防抖，是指防止函数在极短的时间内反复调用，造成资源的浪费。

考虑一下电梯关门的场景，现代的大部分电梯都可以通过红外，感知到是否有人进入，为了避免夹到人，同时为了等待后面的人，电梯关门的时间往往有这么一种规则：始终保证电梯门在最后一个人进入后 3 秒后关闭。如果有人进入后，还没有等到 3 秒又有人进来了，电梯门会以最后一次进入的时间为计时起点，重新等待 3 秒。

再考虑一个页面上的场景，页面上的某些事件触发频率非常高，比如滚动条滚动、窗口尺寸变化、鼠标移动等，如果我们需要注册这类事件，不得不考虑效率问题，又特别是事件处理中涉及到了大量的操作，比如：

```JavaScript
window.onresize = function () {
  // 大量的 DOM 操作
};
```

当窗口尺寸发生变化时，哪怕只变化了一点点，都有可能造成成百上千次对处理函数的调用，这对网页性能的影响是极其巨大的。

于是，我们可以考虑，每次窗口尺寸变化、滚动条滚动、鼠标移动时，不要立即执行相关操作，而是等一段时间，以窗口尺寸停止变化、滚动条不再滚动、鼠标不再移动为计时起点，一段时间后再去执行操作，就像电梯关门那样。

再考虑一个搜索的场景（例如百度），当我在一个文本框中输入文字（键盘按下事件）时，需要将文字发送到服务器，并从服务器得到搜索结果，这样的话，用户直接输入搜索文字就可以了，不用再去点搜索按钮，可以提升用户体验，类似于下面的效果：

![alt](https://blog-1328542955.cos.ap-shanghai.myqcloud.com/2021-10-01-014859.gif)

上面的效果，我没有点击搜索按钮，也没有按回车键，只是写了一些搜索的文字而已。

可是如何来实现上面的场景呢？

如果文本框的文字每次被改变（键盘按下事件），我都要把数据发送到服务器，得到搜索结果，这是非常恐怖的！

想想看，我搜索 “google” 这样的单词，至少需要按 6 次按键，就这一个词，我需要向服务器请求 6 次，并让服务器去搜索 6 次，但我只需要最后一次的结果就可以了。如果考虑用户按错的情况，发送请求的次数更加恐怖。这样就造成了大量的带宽被占用，浪费了很多资源。

如何避免这样的问题呢？

仔细观察，你会发现，真正的搜索行为，并不是每次按键都会触发的，只有当用户停止按键一段事件后才会触发。

于是，为了满足这种类型场景，我们可以开发一个通用的函数，这个函数要满足以下功能：

1. 调用该函数后，不立即做事，而是一段时间后去做事
2. 如果在等待时间内调用了该函数，重新计时

这样的功能，就叫做函数防抖，其实就是防止函数短时间内被调用多次。

要完成该函数，需要给予两个条件：

1. 告诉我一段时间后要做什么事（这里应该是一个回调函数，即函数作为参数）
2. 告诉我要等待多长时间（毫秒）

下面我们就来封装这么一个函数防抖的通用函数：

```JavaScript
function debounce(func, wait) {
  // 设置变量，记录 setTimeout 得到的 id
  var timerId = null;
  return function (...args) {
    let ctx = this;
    if (timerId) {
      // 如果有值，说明目前正在等待中，清除它
      clearTimeout(timerId);
    }
    // 重新开始计时
    timerId = setTimeout(() => {
      func.apply(ctx,...args);
    }, wait);
  };
}
```

下面来进行一个测试，测试如下：

```HTML :no-line-numbers
<input type="text" id="txt" />
```

```JavaScript
var txt = document.getElementById('txt');
// 调用 debounce 函数来将事件处理函数变为一个防抖函数
var debounceHandle = debounce(function (event) {
  console.log(event.target.value);
}, 500);

txt.onkeyup = (event) => {
  debounceHandle(event);
};
```

效果如下：

![alt](https://blog-1328542955.cos.ap-shanghai.myqcloud.com/2021-10-01-020722.gif)

## 函数节流

函数节流的目的，也是为了防止一个函数短时间内被频繁的触发。

和函数防抖的原理不同，函数节流的核心思想是让连续的函数执行，变为固定时间段间断地执行。

这里做一个形象的的比喻：

前面我们所介绍的函数防抖，是指频繁触发的情况下，只有足够的空闲时间，才执行代码一次。比如生活中的坐公交，就是一定时间内，如果有人陆续刷卡上车，司机就不会开车。只有别人没刷卡了，司机才开车。

而这里我们要介绍的函数节流，指一定时间内函数只执行一次。比如人的眨眼睛，就是一定时间内眨一次。这是函数节流最形象的解释。

关于节流的实现，有 2 种主流的实现方式，一种是使用时间戳，一种是设置定时器。

1. 使用时间戳

   触发事件时，取出当前的时间戳，然后减去之前的时间戳（最一开始值设为 0），如果大于设置的时间周期，就执行函数，然后更新时间戳为当前的时间戳，如果小于，就不执行。

   下面是封装使用时间戳的函数节流的通用函数：

   ```JavaScript
   function throttle(func, wait) {
     var args; // 存储函数参数
     var previous = 0; // 一开始的默认时间
     return function (...args) {
       var now = new Date(); // 获取最新的时间戳
       if (now - previous > wait) {
         func.apply(null, args);
         previous = now;
       }
     };
   }
   ```

   下面来实际使用测试一下：

   ```HTML :no-line-numbers
   <input type="text" id="txt" />
   ```

   ```JavaScript
   var txt = document.getElementById('txt');
   var throttleHandle = throttle(function (event) {
     console.log(event.target.value);
   }, 1000);
   txt.onkeyup = (event) => {
     throttleHandle(event);
   };
   ```

   效果如下：

   ![alt](https://blog-1328542955.cos.ap-shanghai.myqcloud.com/2021-10-01-022740.gif)

2. 设置定时器

   第二种方式是设置定时器，触发事件时设置一个定时器，再触发事件的时候，如果定时器存在，就不执行，直到定时器执行，然后执行函数，清空定时器，这样就可以设置下个定时器。

   下面是封装使用定时器的函数节流的通用函数：

   ```JavaScript
   function throttle(func, wait) {
     // timeout 存储计时器返回值
     // args 存储参数
     var timeout;
     return function (...args) {
       // 如果 timeout 有值，说明上一次的执行间隔时间还没过
       if (!timeout) {
         // 进入此 if 说明时间间隔已经过了
         // 先执行一次要执行的函数
         func.apply(null, args);
         // 然后重新设置时间间隔
         timeout = setTimeout(function () {
           timeout = null;
         }, wait);
       }
     };
   }
   ```

## 真题解答

- 防抖，节流是什么，如何实现？

:::tip 参考答案

我们在平时开发的时候，会有很多场景会频繁触发事件，比如说搜索框实时发请求，onmousemove、resize、onscroll 等，有些时候，我们并不能或者不想频繁触发事件，这时候就应该用到函数防抖和函数节流。

函数防抖(debounce)，指的是短时间内多次触发同一事件，只执行最后一次，或者只执行最开始的一次，中间的不执行。
函数节流(throttle)，指连续触发事件但是在 n 秒中只执行一次函数。即 2n 秒内执行 2 次 。
节流如字面意思，会稀释函数的执行频率。节流如字面意思，会稀释函数的执行频率。

:::

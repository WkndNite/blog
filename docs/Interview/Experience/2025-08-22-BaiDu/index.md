---
publish: false
date: 2025-08-22 20:00:00
tags:
  - 秋招
  - 前端
  - 百度
  - 面试
---

# 百度秋招一面

> 答得很烂竟然也过了

1. 自我介绍。
2. 为什么离职？有无 Offer？
3. 介绍浏览器的架构。

    :::tip 📌 回答
    浏览器的架构可以从核心组件和工作流程来理解，它主要分为 浏览器内核、渲染引擎、JavaScript 引擎、网络层和 UI 层 等部分。

    - 浏览器的内核负责协调各个部分之间的配合，比如 Chrome 的 Blink、Safari 的 WebKit 等。
    - 渲染引擎负责将 HTML、CSS 和 JavaScript 代码转换为可视化的页面，比如 Chrome 的 Blink 渲染引擎。
    - JavaScript 引擎负责执行页面中的 JavaScript 代码，比如 Chrome 的 V8 引擎。具体来讲，又可以分为 Parser、Interpreter、JIT Compiler 三部分，分别负责解析代码、解释执行代码和编译执行代码。
    - 网络层负责处理网络请求，以及缓存策略、Cookie、DNS、重定向等网络功能。
    - UI 层负责显示页面和处理用户交互，比如 Chrome 的界面。

    浏览器的工作流程可以参考 [这篇文章](/Frontend/Browser/Render)。
    :::

4. 常用的布局方式。
5. 除了用 flex 还可以如何实现响应式？
6. 是否写过移动端？如何禁止页面的缩放？

    :::tip 📌 回答
    - 可以使用 meta 标签来设置视口（viewport），从而禁止页面的缩放:
    ```HTML
    <meta name="viewport"
      content="width=device-width,
               initial-scale=1,
               maximum-scale=1,
               user-scalable=no">
    ```
    - 可以使用 CSS 来减弱缩放的影响（没有具体属性来禁止）：
    ```CSS
    html, body {
      touch-action: pan-x pan-y; /* 阻止双指缩放 */
      overscroll-behavior: none; /* 阻止滚动回弹 */
    }
    ```
    - JS 操控：
    ```JavaScript
    document.addEventListener('touchmove', function(e) {
      if (e.scale !== 1) e.preventDefault(); // 阻止缩放
    }, { passive: false });

    document.addEventListener('gesturestart', function(e) {
      e.preventDefault(); // iOS Safari 缩放手势
    });
    ```
    :::

7. ES6 之后比较新且常用的 API 或特性？
8. ==、===、Object.is() 之间的区别？

    :::tip 📌 回答
    Object.is() 类似于 ===，但是它处理了一些特殊的情况，比如 -0 和 +0 被认为是不相等的，而 NaN 被认为是相等的。
    ```JavaScript
    Object.is(+0, -0) // false
    Object.is(0, +0) // true
    Object.is(0, -0) // false
    Object.is(NaN, NaN) // true
    ```
    :::

9.  HTTP 状态码里的 429/301/302 分别代表什么？

    :::tip 📌 回答
    429 表示 Too Many Requests，即请求次数过多，通常是因为客户端发送了太多的请求，服务器端拒绝处理。
    :::

10. HTTP 1.1 和 HTTP 2.0 之间的区别？
11. Cache-control 是强缓存还是协商缓存？

    :::tip 📌 回答
    `Cache-Control` 是 HTTP 中的缓存控制头，它既可以用于 _强缓存_，让浏览器在缓存有效期内直接使用本地资源而不发起请求（如 `max-age`、`immutable`），也可以用于 _协商缓存_，在缓存过期或需要验证时向服务器发起条件请求（如 `no-cache`、`must-revalidate`），由服务器返回是否更新资源，从而控制资源的使用和回源行为。
    :::

12. 用户访问突然白屏是为什么？如何定位和解决？

    :::tip 📌 回答
    白屏原因：
    - 静态资源加载失败，可能是跨域引起或者图片等数量过多。
    - JS 代码执行错误导致应用崩溃。
    - 页面上存在大量的 JS 代码，导致渲染阻塞。
    - 网络或 CDN 配置错误，导致资源加载失败。
    - 第三方依赖错误，比如引入了不存在的库或者版本冲突。

    排查方法：
    - 控制台 Console 或者 Network 等面板检查是否存在错误信息。
    - 通过线上监控等工具检查资源加载失败率等指标。
    - 二分排查，逐步注释或调试代码，定位问题所在。
    - 查看渲染效果，是否有元素被隐藏或覆盖。

    优化方向：
    - 优化资源加载，通过 defer/async 加载异步资源、通过懒加载或者 CDN 等优化静态资源等。
    - 增强代码稳定性，比如 try-catch 异常捕获、React 组件的错误边界等。
    - 优化渲染性能，尽量减少同步 JS 代码、CSS 尽量放在 head 中加载。
    - 线上监控，记录失败率、失败设备等指标，利于长期定位问题。
    :::

13. 内存泄露的场景和解决方案。
14. 数组扁平化去重并排序。

    :::details 🔍 展开代码
    <<< ./1.js
    :::

15. 事件循环输出。
16. 封装可中止的定时器钩子。

    :::details 🔍 展开代码
    <<< ./useCountDown.jsx
    :::

17. 「反问」业务、技术栈、校招情况。
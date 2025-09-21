---
tags:
  - Vue
  - 前端
  - 虚拟 DOM
date: 2025-01-20
---

# 组件树和虚拟 DOM 树

## 基本定义

在早期的时候，大家接触到的树就是 DOM 树。

```HTML
<div>
  <h1>Here is a list!</h1>
  <ul>
    <li>Apple</li>
    <li>Banana</li>
    <li>Cherry</li>
  </ul>
</div>
```

上面的 HTML 结构就会形成一个 DOM 树结构：

![DOM 树](https://blog-1328542955.cos.ap-shanghai.myqcloud.com/ctavt-1.excalidraw.png)

实际上，**组件的本质就是对一组 DOM 进行复用**。

假设我们将上面的 DOM 结构封装成一个组件 Fruit，该组件就可以用到其他的组件里面，组件和组件之间就形成了树结构，这就是 **组件树**。而每个组件的背后，对应的是一组虚拟 DOM。虚拟 DOM 的背后又是真实 DOM 的映射。

![组件树](https://blog-1328542955.cos.ap-shanghai.myqcloud.com/ctavt-2.excalidraw.png)

接下来明确定义：

- 组件树：指的是一个一个组件所形成的树结构。
- 虚拟 DOM 树：指的是某一个组件内部的虚拟 DOM 数据结构，**并非整个应用的虚拟 DOM 树**。

## Vue 相关理解

> 厘清上面的概念，有助于理解为什么 Vue 中既有响应式，又有虚拟 DOM 以及 diff 算法。

回顾 Vue 1.x 以及 Vue 2.x 的响应式：

- Object.defineProperty
- Dep：相当于观察者模式中的发布者
- Watcher：相当于观察者模式中的订阅者

但是在 Vue 1.x 的时候没有虚拟 DOM，模板中每次引用一个响应式数据，就会生成一个 watcher。

```vue
<template>
  <div class="wrapper">
    <div class="msg1">{{ msg }}</div>
    <div class="msg2">{{ msg }}</div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      msg: 'Hello Vue 1.0'
    };
  }
};
</script>
```

- 优点：这种设计的好处在于能够精准地知道哪个数据发生了变化。
- 缺点：当应用足够复杂的时候，一个应用里面会包含大量的组件，而这种设计又会导致一个组件对应多个 watcher，这样的设计是非常消耗资源的。

![Vue 1.x 响应式](https://blog-1328542955.cos.ap-shanghai.myqcloud.com/ctavt-3.excalidraw.png)

于是从 Vue 2.0 开始，引入了虚拟 DOM。2.0 的响应式有一个非常大的变动，将 watcher 的力度放大到了组件级别。也就是说，一个组件对应一个 watcher。

但这种设计也会带来一些新的问题，以前能够精准地知道哪一个节点需要更新，但现在只能确定是那一个组件需要更新，对于组件内部的节点情况是未知的。

这个时候，虚拟 DOM 就派上用场了。通过对组件内部的虚拟 DOM 进行 diff，就可以知道哪些节点需要更新。

![Vue 2.x 响应式](https://blog-1328542955.cos.ap-shanghai.myqcloud.com/ctavt-4.excalidraw.png)

Vue 3 的响应式在架构上面是没有改变的，仍然是响应式 + 虚拟 DOM：

- 响应式：精确到组件级别，不过 Vue 3.x 响应式基于 Proxy。
- 虚拟 DOM：diff 算法，但是相较于 Vue 2 有所更新。

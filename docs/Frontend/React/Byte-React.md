---
date: 2025-02-21
tags:
  - React
cover: https://cdn-icons-png.flaticon.com/128/2497/2497631.png
---

# 字节 · 响应式系统与 React

## React 的历史与应用

- 前端页面开发，如 Facebok、Instagram、Netflix 网页版。
- 移动端原生应用开发，如 Instagram、Discord、Oculus。
- 结合 Electron，进行桌面应用开发。

![FaxJS](https://blog-1328542955.cos.ap-shanghai.myqcloud.com/FaxJS.png)

2010 年，Facebook 在其 php 生态中引入 xhp 框架，首次引入了组合式组件的思想，启发了后来的 React 的设计。

2011 年，Jordan Walke 创造了 FaxJS，也就是后来的 React 原型。

2012 年，在 Facebook 收购 Instagram 后，该 FaxJS 项目在内部得到使用，Jordan Walke 基于 FaxJS 的经验，创造了 React。

2014 年至今，React 生态大爆发，各种[围绕 React 的新的工具和框架](https://github.com/enaqx/awesome-react)开始涌现。

## React 的设计思路

### UI 编程痛点

- 状态更新后 UI 不会自动更新，需要手动地调用 DOM 进行更新。
- 欠缺基本的代码层面的封装和隔离，代码层面没有组件化。
- UI 之间的数据依赖关系，需要手动维护，如果依赖链路长，则会遇到 Callback Hell。

### 响应式与转换式

转换式系统：给定输入，求解输出 => 数值计算 => 编译器

响应式系统：监听事件，消息驱动 => UI 界面 => 监控系统

响应式系统本质就是 —— 事件发生 ➡️ 执行既定回调函数 ➡️ 状态变更 ➡️ UI 更新

### 响应式编程

- 状态更新后 UI 更新。
- 前端代码组件化，可复用，可封装。
- 状态之间的互相依赖关系，只需要声明即可。

### 组件化

- 组件是组件的组合或者原子组件。
- 组件内拥有状态，外部不可见。
- 父组件可以将状态传入组件内部。

### 状态归属问题

- React 是单向数据流还是双向数据流？
- 如何解决状态不合理上升的问题？
- 组件的状态改变后如何更新 DOM 节点？

### 组件设计

- 组件声明了状态和 UI 的映射。
- 组件有 props 和 state 两种状态。
- 组件可以由其他组件拼装而成。

所以，组件的代码应该是这个样子的：

- 内部拥有私有状态 state
- 接受外部的 props 状态提供复用性
- 根据当前的 state/props 返回 UI

## React Hooks

不再展开，可以参考[另一篇文章](../React/Core-Concepts-Two.md#hooks)。

## React 的实现

### Problems

- JSX 不符合 JS 标准语法。
  - TransCompile
- 返回的 JSX 发生改变时如何更新 DOM？

  - Virtual DOM + Diff Algorithm 🔄 更新次数少和计算速度快 Tradeoff。
  - 完美的最小 Diff 算法 需要 O(n<sup>3</sup>) 的复杂度。
  - 牺牲理论最小 Diff 换取时间，得到了 O(n) 复杂度的算法：Heuristic O(n) Algorithm（启发式算法）。

- state/props 更新时需要重新触发 render。

:::details Diff 算法

| 元素种类          | Diff 操作 |
| ----------------- | --------- |
| 不同类型的元素    | 替换      |
| 同类型的 DOM 元素 | 更新      |
| 同类型的组件元素  | 递归      |

:::

## React 状态管理库

不再展开，可以参考[另一篇文章](/Frontend/React/Redux)。

推荐状态管理库：
[React Redux](https://react-redux.js.org/) /
[XState](https://xstate.js.org/) /
[Mobx](https://mobx.js.org/) /
[Recoli](https://recoiljs.org/) /
[Modern.js Reduck](https://modernjs.dev/guides/topic-detail/model/redux-integration.html)

## 应用级框架

- [Next.js](https://nextjs.org/)

  硅谷明星创业公司 Vercel 的 React 开发框架，稳定且开发体验好，支持 Unbundled Dev，SWC 等，其同样有 Serverless 一键部署平台帮助开发者快速完成部署。口号是 " Let's Make Web Faster"。

- [Modern.js](https://modernjs.dev)

  字节跳动 Web Infra 团队研发的全栈开发框架，内置了很多开箱即用的能力与最佳实践，可以减少很多调研选择工具的时间。

- [Blitz](https://blitzjs.com/)

  无 API 思想的全栈开发框架，开发过程中无需写 API 调用与 CURD 逻辑，适合前后端紧密结合的小团队项目。

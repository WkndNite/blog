---
tags:
    - React
    - 前端
date: 2025-01-25
cover: https://redux.js.org/img/redux.svg
---

# Redux —— React 中的状态管理库

## Redux 的核心思想

早期的时候，React 官方提供了 Flux，Flux 的特点如下：

- 单向数据流，视图事件或外部测试用例发出 Action，经由 Dispatcher 派发给 Store，Store 会触发相应的方法更新数据和视图。
- Store 可以有多个。
- Store 不仅存放数据，还封装了处理数据的方法。

2015 年的时候，Dan Abramov 推出的 Redux 席卷了整个 React 社区，其本质就是在 Flux 上做了一些更新：

- 单向数据流，View 发出 Action(store.dispatch(action))，Store 调用 Reducer 计算出新的 State，若 State 产生变化，则调用监听函数重新渲染 View(store.subscribe(render))。
- 单一数据源，只有一个 Store。
- state 是只读的，每次更新后只能返回一个新的 state。
- 没有 Dispatcher，而是在 Store 中集成了 dispatch 方法，store.dispatch() 是 View 发出 Action 的唯一途径。
- 支持使用中间件管理异步数据流。

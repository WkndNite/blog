---
date: 2025-09-20 15:15:00
publish: false
tags:
   - 虾皮
   - 前端
   - 秋招
   - 面试
---

# 虾皮秋招三面

1. 自我介绍。
2. 实习期间的核心工作？
3. 特征淘汰在前端的复杂度体现在哪里？
4. 对于性能的优化有没有具体的数据指标？
5. 只用了一个 Worker？有没有更好的方式？MapReduce 思想？
6. 有没有你主动发现并解决的问题？
7. 对于 DSL 转换工具有没有想过 IDE 插件的开发？
8. 你觉得比较完善的低代码平台需要有哪几部分？
9. 参考了哪些业内比较成熟的低代码平台？
10. 为什么要去做低代码平台这个项目？
11. 开发过什么样的 AI 应用？
12. 怎么写的 MCP Server？用了什么框架？
13. Agent 开发过程你觉得最核心的部分是哪里？
14. 大模型如何调用的 MCP Server？比如，大模型没有天气数据怎么得到的？
15. 对于 MCP Server 的调用是谁发起的？
16. MCP 通信的结果是什么样的格式？
17. 以下代码输出什么？如果想输出正确结果怎么修改？

    <<< ./1.jsx

18. 以下结构中 Fiber 链里有什么节点？Effect 相关信息存在那里？点击事件绑定在哪？

    ```JSX
    <div>
      <Counter >
    </div>
    ```

    :::tip 📌 回答
    - 会有 HostRootFiber、HostComponentFiber、FunctionComponentFiber，分别对应根节点、div、Counter，作用分别是管理整个 React 树的更新、原生 DOM 元素的 Fiber、自定义的函数组件。每个 Fiber 节点都会有 child/sibling/return 指针形成树状结构，还会有 pendingProps/memoizedProps/stateNode 等字段。
    - React 维护 Effect List。对于 FC，useState/useReducer 的更新信息存储在 Fiber 的 memoizedState 字段中，useEffect/useLayoutEffect 的更新信息存储在 Fiber 的 updateQueue 字段中，在 commit 阶段根据 effectTag 进行更新；对于 HC，DOM 的变更也是通过 effectTag 标记，并在 commit 阶段真正应用到 stateNode（即 DOM 节点）。
      ```TXT :no-line-numbers
      Fiber.effectTag        -> 标记需要执行的操作类型
      Fiber.updateQueue       -> 保存 useEffect 回调或 setState 更新
      Fiber.memoizedState     -> 保存 useState 状态
      ```
    - React 采用事件代理，所有的事件会统一绑定到根节点的 document 或者 root 的 DOM 节点上；但是时间存储在 Fiber 节点的 props.onClick 字段中。整体流程可以简单理解为，根节点绑定一个全局事件监听器，点击按钮之后 React 沿着 Fiber 树找到对应的 Fiber，通过 memoizedProps 中的 onClick 回调去触发用户定义的事件。
    :::

19. 「反问」业务痛点、发展方向、AI 落地、入职后的挑战、基本素养。
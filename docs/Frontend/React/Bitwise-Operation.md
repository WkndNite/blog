---
date: 2025-04-06 20:07:33
tags:
  - React
  - 前端
---

# React 中的位运算

> 面试题：React 中哪些地方用到了位运算？

- fiber 的 flags
- lane 模型
- 上下文

1. fiber 的 flags

   在 React 中，用来标记 fiber 操作的 flags，使用的就是二进制：

   <<< ./snippets/bitwise-operation.js#1

   这些 flags 就是用来标记 fiber 状态的。

   之所以要专门抽离 fiber 的状态，是因为这种操作是非常高效的。针对一个 fiber 的操作，可能有增加、删除、修改，但是我不直接进行操作，而是给这个 fiber 打上一个 flag，接下来在后面的流程中针对有 flag 的 fiber 统一进行操作。

   通过位运算，就可以很好的解决一个 fiber 有多个 flag 标记的问题，方便合并多个状态

   <<< ./snippets/bitwise-operation.js#2

2. lane 模型

   lane 模型也是一套优先级机制，相比 Scheduler，lane 模型能够对任务进行更细粒度的控制。

   <<< ./snippets/bitwise-operation.js#3

   例如在 React 源码中，有一段如下的代码：

   <<< ./snippets/bitwise-operation.js#4

   假设现在我们针对两个 lane 进行合并：

   ```JavaScript
   const SyncLane: Lane = 0b0000000000000000000000000000001;
   const InputContinuousLane: Lane = 0b0000000000000000000000000000100;
   ```

   合并出来就是一个 lanes，合并出来的结果如下：

   ```JavaScript
   0b0000000000000000000000000000001
   0b0000000000000000000000000000100
   ---------------------------------
   0b0000000000000000000000000000101
   ```

   0b0000000000000000000000000000101 是我们的 lanes，接下来取负值：

   ```JavaScript :no-line-numbers
   -lanes = 0b1111111111111111111111111111011
   ```

   最后一步，再和本身的 lanes 做一个 & 操作：

   ```JavaScript
   0b0000000000000000000000000000101
   0b1111111111111111111111111111011
   ---------------------------------
   0b0000000000000000000000000000001
   ```

   经过 & 操作之后，就把优先级最高的 lane 给分离出来了。

3. 上下文

   在 React 源码内部，有多个上下文：

   ```JavaScript
   export const NoContext = 0b000;
   const BatchedContext = 0b001;
   export const RenderContext = 0b010;
   export const CommitContext = 0b100;
   ```

   当执行流程到了 render 阶段，那么接下来就会切换上下文，切换到 RenderContext：

   ```JavaScript
   let executionContext = NoContext;
   executionContext |= RenderContext;
   ```

   在执行方法的时候，就会有一个判断，判断当前处于哪一个上下文：

   <<< ./snippets/bitwise-operation.js#5

   如果要离开某一个上下文：

   ```JavaScript
   // 从当前上下文中移除 RenderContext 上下文
   executionContext &= ~RenderContext;
   // 是否处于 RenderContext 上下文中，结果为 false
   (executionContext & CommitContext) !== NoContext;
   ```

---
date: 2025-09-22 20:14:48
publish: false
tags:
   - 腾讯音乐
   - 秋招
   - 前端
   - 面试
---

# 腾讯音乐秋招二面

1. 自我介绍。
2. 离职情况、现况简单了解。
3. 介绍 Zustand、Redux、Dva 和各自的应用场景。
4. 编辑历史的前进和后退有没有解决方案？存历史版本的想法和 Diff 存储策略？
5. BFF 怎么做容灾？接口 QPS 峰值是多少？
6. 输出是什么？

   <<< ./1.js

7. 输出是什么？

   <<< ./2.js

8. 判断给定的矩形能覆盖几行？

   :::details 🔍 覆盖一行的示例
   <div style="position: relative; width: 220px; height: 120px;">
      <div style="position: absolute; left: 0px; top: 0; width: 60px; height: 40px; background-color: rgba(0, 150, 255, 0.5); border: 1px solid #0096ff;line-height: 40px;text-align: center;">
         A
      </div>
      <div style="position: absolute; left: 0px; top: 60px; width: 60px; height: 40px; background-color: rgba(0, 150, 255, 0.5); border: 1px solid #0096ff;line-height: 40px;text-align: center;">
         B
      </div>
      <div style="position: absolute; left: 80px; top: 0px; width: 140px; height: 100px; background-color: rgba(255, 100, 0, 0.5); border: 1px solid #ff6400;line-height: 100px;text-align: center;">
         C
      </div>
   </div>
   :::

   :::details 🔍 展开代码
   <<< ./3.js
   :::

9. 实现 Omit。

    <<< ./4.ts

10. flex-basis/flex-shrink/flex-grow 是做什么的？下面的渲染效果是怎么样的？如果想让宽度是预设值怎么修改？

    <<< ./5.jsx

11. 手写一个 select 的 DOM 结构？如果菜单外容器有 `overflow: hidden` 怎么优化 select 能保证正常渲染？
12. 下拉框可能是支持搜索的，但你的搜索不一定能够返回最新的数据，你如何处理？

    :::details 🔍 展开代码
    <<< ./6.jsx
    :::

    :::tip 📌 面试官问有没有更简单的
    除了防抖、参考帧流概念的加时间戳、请求取消、缓存策略，可以对上一次请求的标志做记录，下次请求时先判断 keyword 或者 timeStamp 是否一致，`lastRequestTime.current = requestTime` 才发送请求。
    :::

    | 策略分类       | 具体实现方式                                                      | 核心目标                                                             | 关键代码/逻辑参考                                                                                                             |
    | -------------- | ----------------------------------------------------------------- | -------------------------------------------------------------------- | ----------------------------------------------------------------------------------------------------------------------------- |
    | 输入请求优化   | 防抖（Debounce）                                                  | 减少高频输入触发的无效请求，降低接口压力                             | `useCallback` 包裹防抖函数，延迟 300ms 执行搜索，避免输入过程中频繁发请求                                                     |
    | 旧请求拦截     | 记录上一次请求标志（Keyword/TimeStamp），新请求前先校验           | 避免相同关键词重复请求、或旧请求覆盖新请求                           | 1. 新请求前检查当前 `inputValue`（Keyword）是否与缓存关键词一致；<br>2. 仅当关键词变化/强制刷新时，才发起新请求               |
    | 响应顺序控制   | 时间戳标记（参考帧流思路）+ `lastRequestTime` 一致性判断          | 确保只有“最后一次请求”的响应能更新状态，防止旧响应覆盖新数据         | 1. 发送请求时记录 `requestTime = Date.now()`；<br>2. 响应返回时校验 `requestTime === lastRequestTime.current`，一致才更新状态 |
    | 无效请求终止   | `AbortController` 主动取消上一次未完成请求                        | 从源头终止过时请求，减少无效响应产生，避免网络资源浪费               | 1. 新请求前调用 `abortControllerRef.current?.abort()`；<br>2. 请求携带 `signal` 参数，支持中断                                |
    | 数据新鲜度保障 | 带有效期的缓存策略（Cache + 过期时间）+ 手动刷新触发              | 平衡性能（复用缓存）与数据新鲜度（过期失效），赋予用户主动更新控制权 | 1. `dataCache` 存储关键词对应的 `{data, timestamp}`，缓存有效期 30s；<br>2. 缓存未过期直接复用，过期/强制刷新时重新请求       |
    | 状态可视化反馈 | 明确区分请求状态（loading/error/empty/success）+ 显示数据更新时间 | 让用户感知数据时效性，减少“数据是否最新”的困惑，提升体验             | 1. `status` 状态控制 UI 显示（加载中/失败重试/无结果）；<br>2. 成功后显示 `lastUpdated` 格式化时间，提供“刷新”按钮            |

13. 一行代码求数组平均值。

   ```JavaScript
   const arr = [1, 2, 3, 4, 5];
   // 面试官觉得这并不是一行 只是写在一行格式化后的 reduce 参数
   const avg = arr.reduce((a, b) => a + b, 0) / arr.length;
   const avg2 = eval(arr.join("+")) / arr.length;
   ```

14. 「反问」部门氛围、业务趋势、入职挑战。
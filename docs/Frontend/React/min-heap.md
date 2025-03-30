---
date: 2025-03-30 22:31:52
tags:
  - React
  - 前端
---

# 最小堆

在 Scheduler 中，使用最小堆的数据结构在对任务进行排序。

```JavaScript
// 两个任务队列
var taskQueue: Array<Task> = [];
var timerQueue: Array<Task> = [];

push(timerQueue, newTask); // 像数组中推入一个任务
pop(timerQueue); // 从数组中弹出一个任务
timer = peek(timerQueue); // 从数组中获取第一个任务
```

## react 中对最小堆的应用

在 react 中，最小堆对应的源码在 _SchedulerMinHeap.js_ 文件中，总共有 6 个方法，其中向外暴露了 3 个方法。

- push：向最小堆推入一个元素
- pop：弹出一个
- peek：取出第一个

没有暴露的是：

- siftUp：向上调整
- siftDown：向下调整
- compare：这是一个辅助方法，就是两个元素做比较的

### peek

取出堆顶的任务，堆顶一定是最小的

这个方法极其的简单，如下：

```JavaScript
peek(timerQueue);
export function peek(heap) {
  // 返回这个数组的第一个元素
  return heap.length === 0 ? null : heap[0];
}
```

### push

向最小堆推入一个新任务，因为使用的是数组，所以在推入任务的时候，首先该任务是被推入到数组的最后一项，但是这个时候，涉及到一个调整，我们需要向上调整，把这个任务调整到合适的位置。

```JavaScript
push(timerQueue, newTask);
export function push(heap, node) {
  const index = heap.length;
  // 推入到数组的最后一位
  heap.push(node);
  // 向上调整，调整到合适的位置
  siftUp(heap, node, index);
}
```

### pop

pop 是从任务堆里面弹出第一个任务，也就是意味着该任务已经没有在队列里面了。

```JavaScript
pop(taskQueue);
export function pop(heap) {
  if (heap.length === 0) {
    return null;
  }
  // 获取数组的第一个任务（一定是最小的）
  const first = heap[0];
  // 拿到数组的最后一个
  const last = heap.pop();
  if (last !== first) {
    // 将最后一个任务放到第一个
    heap[0] = last;
    // 接下来向下调整
    siftDown(heap, last, 0);
  }
  return first;
}
```

具体的调整示意图如下：

<img src="https://xiejie-typora.oss-cn-chengdu.aliyuncs.com/2022-12-30-064713.png" alt="image-20221230144713347" style="zoom:50%;" />

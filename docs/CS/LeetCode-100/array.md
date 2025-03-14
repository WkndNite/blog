---
date: 2025-03-14 22:17:32
tags:
  - Hot-100
  - 计算机基础
  - 数据结构与算法
---

# Hot-100 普通数组

## 53. 最大子数组和

```js
var maxSubArray = function (nums) {
  let pre = 0,
    result = nums[0];
  nums.forEach((item) => {
    pre = Math.max(item + pre, item);
    result = Math.max(result, pre);
  });
  return result;
};
```

## 56. 合并区间

```js
/**
 * @param {number[][]} intervals
 * @return {number[][]}
 */
var merge = function (intervals) {
  const result = [];
  const sortedIntervals = intervals.sort((a, b) => a[0] - b[0]);
  for (const item of sortedIntervals) {
    let last = [];
    if (result.length) last = result[result.length - 1];
    if (!result.length || item[0] > last[1]) result.push(item);
    else last[1] = Math.max(item[1], last[1]);
  }
  return result;
};
```

---
date: 2025-03-07 23:17:50
tags:
  - LeetCode
  - 计算机基础
  - 数据结构与算法
---

# 巧妙的解题方法

## 136. 只出现一次的数字

```js
/**
 * @param {number[]} nums
 * @return {number}
 */
var singleNumber = function (nums) {
  let result = 0;
  for (const item of nums) {
    result ^= item;
  }
  return result;
};
```

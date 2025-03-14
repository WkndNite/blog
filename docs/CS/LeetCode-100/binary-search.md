---
date: 2025-03-11 22:00:03
tags:
  - Hot-100
  - 计算机基础
  - 数据结构与算法
---

# Hot-100 二分查找

## 35. 搜索插入位置

```js
/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
var searchInsert = function (nums, target) {
  let left = 0;
  let right = nums.length - 1;
  let middle = 0;
  while (left <= right) {
    middle = Math.floor(left + (right - left) / 2);
    if (nums[middle] === target) return middle;
    else if (nums[middle] < target) left = middle + 1;
    else right = middle - 1;
  }
  return left;
};
```

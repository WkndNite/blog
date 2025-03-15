---
date: 2025-03-04 22:39:49
tags:
  - Hot-100
  - 计算机基础
  - 数据结构与算法
  - 双指针
---

# Hot-100 双指针

## 283. 移动零

```js [283. 移动零.js]
/**
 * @param {number[]} nums
 * @return {void} Do not return anything, modify nums in-place instead.
 */
var moveZeroes = function (nums) {
  let slow = 0;
  let length = nums.length;

  for (let fast = 0; fast < length; fast++) {
    if (nums[fast] !== 0) {
      [nums[slow], nums[fast]] = [nums[fast], nums[slow]];
      slow++;
    }
  }
};
```

## 11. 盛最多水的容器

```js
/**
 * @param {number[]} height
 * @return {number}
 */
var maxArea = function (height) {
  let left = 0;
  let right = height.length - 1;
  let res = 0;

  while (left < right) {
    cur = Math.min(height[left], height[right]) * (right - left);
    res = Math.max(res, cur);

    height[left] <= height[right] ? left++ : right--;
  }
  return res;
};
```

## 15. 三数之和

```js
/**
 * @param {number[]} nums
 * @return {number[][]}
 */
var threeSum = function (nums) {
  const res = [],
    length = nums.length;
  nums.sort((a, b) => a - b);
  for (let i = 0; i < length; i++) {
    let left = i + 1,
      right = length - 1,
      current = nums[i];
    if (current > 0) return res;
    if (i > 0 && current === nums[i - 1]) continue;
    while (left < right) {
      let small = nums[left];
      let big = nums[right];
      let sum = small + current + big;
      if (sum < 0) left++;
      else if (sum > 0) right--;
      else {
        res.push([current, small, big]);
        while (left < right && nums[left] === nums[left + 1]) left++;
        while (right > left && nums[right] === nums[right - 1]) right--;
        left++;
        right--;
      }
    }
  }
  return res;
};
```

---
date: 2025-03-07 20:34:59
tags:
  - Hot-100
  - 计算机基础
  - 数据结构与算法
  - 动态规划
---

# Hot-100 动态规划

## 70. 爬楼梯

```js
/**
 * @param {number} n
 * @return {number}
 */
var climbStairs = function (n) {
  const dp = [];
  dp[0] = 1;
  dp[1] = 1;
  for (let i = 2; i <= n; i++) dp[i] = dp[i - 1] + dp[i - 2];
  return dp[n];
};
```

## 118. 杨辉三角

```js
/**
 * @param {number} numRows
 * @return {number[][]}
 */
var generate = function (numRows) {
  const result = new Array(numRows);
  for (let i = 0; i < numRows; i++) {
    const row = new Array(i + 1).fill(1);
    for (let j = 1; j < row.length - 1; j++) {
      row[j] = result[i - 1][j - 1] + result[i - 1][j];
    }
    result[i] = row;
  }
  return result;
};
```

## 198. 打家劫舍

```js
/**
 * @param {number[]} nums
 * @return {number}
 */
var rob = function (nums) {
  // dp[n] = max(dp[n-1] , dp[n-2]+nums[n])
  if (!nums.length) return 0;
  if (nums.length === 1) return nums[0];
  if (nums.length === 2) return nums[0] > nums[1] ? nums[0] : nums[1];
  const dp = [];
  dp[0] = nums[0];
  dp[1] = nums[0] > nums[1] ? nums[0] : nums[1];
  for (let i = 2; i < nums.length; i++) {
    dp[i] = Math.max(dp[i - 1], dp[i - 2] + nums[i]);
  }
  return dp[nums.length - 1];
};
```

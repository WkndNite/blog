---
date: 2025-03-07 20:34:59
tags:
  - LeetCode
  - 计算机基础
  - 数据结构与算法
---

# 动态规划

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

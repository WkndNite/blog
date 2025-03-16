---
date: 2025-03-16 17:37:13
tags:
  - 数据结构与算法
  - 动态规划
  - 代码随想录
  - 计算机基础
---

# 动态规划

## 509. 斐波那契数

:::details

```JavaScript
/**
 * @param {number} n
 * @return {number}
 */
var fib = function (n) {
  const dp = [0, 1];
  for (let i = 2; i <= n; i++) {
    dp[i] = dp[i - 1] + dp[i - 2];
  }
  return dp[n];
};
```

:::

## 70. 爬楼梯

:::details

```JavaScript
/**
 * @param {number} n
 * @return {number}
 */
var climbStairs = function (n) {
  const dp = [0, 1, 2];
  for (let i = 3; i <= n; i++) {
    dp[i] = dp[i - 1] + dp[i - 2];
  }
  return dp[n];
};
```

:::

## 746. 使用最小花费爬楼梯

<!-- TODO -->

:::details

```JavaScript

```

:::

## 62. 不同路径

:::details

```JavaScript
/**
 * @param {number} m
 * @param {number} n
 * @return {number}
 */
var uniquePaths = function (m, n) {
  const dp = Array.from({ length: m }, () => new Array(n).fill(1));
  for (let i = 1; i < m; i++) {
    for (let j = 1; j < n; j++) {
      dp[i][j] = dp[i - 1][j] + dp[i][j - 1];
    }
  }
  return dp[m - 1][n - 1];
};
```

:::

## 63. 不同路径 II

:::details

```JavaScript
/**
 * @param {number[][]} obstacleGrid
 * @return {number}
 */
var uniquePathsWithObstacles = function (obstacleGrid) {
  const rows = obstacleGrid.length;
  const columns = obstacleGrid[0].length;
  const dp = Array.from({ length: rows }, () => new Array(columns).fill(0));
  if (obstacleGrid[0][0] || obstacleGrid[rows - 1][columns - 1]) return 0;
  dp[0][0] = 1;
  for (let i = 1; i < columns; i++) {
    dp[0][i] = obstacleGrid[0][i] ? 0 : dp[0][i - 1];
  }
  for (let i = 1; i < rows; i++) {
    dp[i][0] = obstacleGrid[i][0] ? 0 : dp[i - 1][0];
  }
  for (let i = 1; i < rows; i++) {
    for (let j = 1; j < columns; j++) {
      dp[i][j] = obstacleGrid[i][j] ? 0 : dp[i - 1][j] + dp[i][j - 1];
    }
  }
  return dp[rows - 1][columns - 1];
};
```

:::

## 343. 整数拆分

<!-- TODO -->

## 96. 不同的二叉搜索树

<!-- TODO -->

---
date: 2025-07-07 23:31:41
tags:
  - 动态规划
  - 刷题
---

# 动态规划

[62.不同路径](https://leetcode.cn/problems/unique-paths/) <el-tag type="success">数论中的组合数</el-tag>

:::details 🔍 展开代码

```JavaScript
var uniquePaths = function (m, n) {
    // C_m+n-2^m-1
    let cnt = 1;
    for (let i = m + n - 2, j = 1; i > n - 1; i--, j++) {
        cnt = cnt * i / j;
    }
    return Math.round(cnt);
};
```

:::

[63.不同路径 II](https://leetcode.cn/problems/unique-paths-ii/) <el-tag type="danger">不难但磕绊</el-tag>

:::details 🔍 展开代码

```JavaScript
/**
 * @param {number[][]} obstacleGrid
 * @return {number}
 */
var uniquePathsWithObstacles = function (obstacleGrid) {
    const m = obstacleGrid.length;
    const n = obstacleGrid[0].length;
    const dp = Array.from({ length: m }, () => (
        Array.from({ length: n }, () => 0)
    ))
    dp[0][0] = obstacleGrid[0][0]===1?0:1;
   for (let j = 1; j < n; j++) {
        dp[0][j] = obstacleGrid[0][j] === 0 ? dp[0][j-1] : 0;
    }

    for (let i = 1; i < m; i++) {
        dp[i][0] = obstacleGrid[i][0] === 0 ? dp[i-1][0] : 0;
    }

    for (let i = 1; i < m; i++) {
        for (let j = 1; j < n; j++) {
            if (obstacleGrid[i][j] === 0) {
                dp[i][j] = dp[i-1][j] + dp[i][j-1];
            }
        }
    }

    return dp[m-1][n-1]
};
```

:::

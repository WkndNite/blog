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

[343.整数拆分](https://leetcode.cn/problems/integer-break/) <el-tag type="danger">忘记初始化 dp 直接赋值报错</el-tag>

:::details 🔍 展开代码

```JavaScript
/**
 * @param {number} n
 * @return {number}
 */
var integerBreak = function(n) {
    const dp = [-1, -1, 1];
    for(let i = 3; i <= n; i++){
        dp[i] = -1;
        for(let j = 1; j < i; j++){
            dp[i] = Math.max(dp[i], dp[i-j] * j, (i - j) * j);
        }
    }
    return dp[n];
};
```

:::

[96.不同的二叉搜索树](https://leetcode.cn/problems/unique-binary-search-trees/) <el-tag type="danger">想不到的 DP</el-tag> <el-tag type="success">卡特兰数</el-tag>

::::details 🔍 展开代码

:::code-group

```JavaScript [动态规划]
/**
 * @param {number} n
 * @return {number}
 */
var numTrees = function (n) {
    const dp = new Array(n + 1).fill(0);
    dp[0] = 1; dp[1] = 1;
    for (let i = 2; i <= n; i++) {
        for (let j = 1; j <= i; j++) {
            dp[i] += dp[j - 1] * dp[i - j];
        }
    }

    return dp[n];
};
```

```JavaScript [卡特兰数]
/**
 * @param {number} n
 * @return {number}
 */
var numTrees = function(n) {
    let c = 1;
    for (let i = 0; i < n; i++) {
        c = c * 2 * (2 * i + 1) / (i + 2);
    }
    return c;
};
```

:::

::::

[337.打家劫舍 III](https://leetcode.cn/problems/house-robber-iii/) <el-tag type="success">递归 + DP</el-tag>

:::details 🔍 展开代码

```JavaScript
/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {TreeNode} root
 * @return {number}
 */
var rob = function(root) {
    function post(root){
        if(!root){
            return [0,0]
        }
        const left = post(root.left);
        const right = post(root.right);
        return [
            Math.max(...left) + Math.max(...right),
            root.val + left[0] + right[0]
        ]
    }
    return Math.max(...post(root))

};
```

:::

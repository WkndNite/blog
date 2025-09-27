---
publish: false
date: 2025-08-23 10:00:00
tags:
   - 笔试
   - 前端
   - 秋招
   - 京东
---

# 京东秋招笔试

1. 定义幸运数为只由 $3$ 和 $7$ 组成的数字，定义 $f(n)$ 返回大于等于 n 的第一个幸运数。现给定一个区间，对于区间上所有整数值，调用这个函数并返回最后的和。即，对于区间 $[a, b]$ 求出 $\sum_{n=a}^{b} f(n)$。

   :::details 🔍 展开代码
   <<< ./1.js
   :::

2. 一共有 $m$ 道可选的菜，请制定未来 $n$ 天的菜单，要求每天与前一天菜的序号相差大于等于 $k$。

   找到动态规划的状态转移公式如下：

   $$
   dp[len][last] = \sum_{\substack{x=1 \\ |last - x| \geq k}}^{m} dp[len-1][x]
   $$

   那么我们最后只要输出 $\sum_{last=1}^{m} dp[n][last]$ 就行了。

   同时，我们注意到 $|last - x| \geq k \quad \Leftrightarrow \quad x \in [1,last-k] \cup [last+k, m]$。

   因此过程中我们需要引入前缀和数组来降低遍历复杂度，因此最终结果可以表示为：

   $$
   pre[j] = \sum_{x=1}^{j} dp[len-1][x]
   $$

   确定合法区间我们需要在 $[1,m]$ 去除掉 $[last-k+1,last+k-1]$，最终表达式可以化简为：

   $$
   dp[len][last] = pre[last-k] + (pre[m] - pre[last+k-1])
   $$


   :::details 🔍 展开代码
   <<< ./2.js
   :::
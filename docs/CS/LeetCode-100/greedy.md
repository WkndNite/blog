---
date: 2025-03-14 22:35:32
tags:
  - Hot-100
  - 计算机基础
  - 数据结构与算法
---

# Hot-100 贪心算法

## 121. 买卖股票的最佳时机

```js
/**
 * @param {number[]} prices
 * @return {number}
 */
var maxProfit = function (prices) {
  let cost = Infinity;
  let profit = -Infinity;
  for (const price of prices) {
    cost = Math.min(price, cost);
    profit = Math.max(profit, price - cost);
  }
  return profit;
};
```

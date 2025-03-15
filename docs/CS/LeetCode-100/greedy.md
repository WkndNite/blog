---
date: 2025-03-14 22:35:32
tags:
  - Hot-100
  - 计算机基础
  - 数据结构与算法
  - 贪心算法
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

## 55. 跳跃游戏

```js
/**
 * @param {number[]} nums
 * @return {boolean}
 */
var canJump = function (nums) {
  const length = nums.length;
  let maxJump = 0;

  for (let i = 0; i < length; i++) {
    const maxTarget = i + nums[i];
    if (maxTarget >= maxJump) {
      maxJump = maxTarget;
    }
    if (maxJump >= length - 1) {
      return true;
    }
    if (nums[i] === 0 && maxTarget >= maxJump) {
      return false;
    }
  }
  return false;
};
```

## 45. 跳跃游戏 II

```js
/**
 * @param {number[]} nums
 * @return {number}
 */
var jump = function (nums) {
  let position = nums.length - 1;
  let steps = 0;
  while (position > 0) {
    for (let i = 0; i < position; i++) {
      if (i + nums[i] >= position) {
        steps++;
        position = i;
        break;
      }
    }
  }
  return steps;
};
```

---
date: 2025-03-16 19:50:51
tags:
  - 数据结构与算法
  - 贪心算法
  - 计算机基础
  - 代码随想录
---

# 贪心算法

## 455. 分发饼干

:::details

```JavaScript
/**
 * @param {number[]} g
 * @param {number[]} s
 * @return {number}
 */
var findContentChildren = function (g, s) {
  g.sort((a, b) => a - b);
  s.sort((a, b) => a - b);
  let i = 0;
  let j = 0;
  let result = 0;
  while (i < g.length && j < s.length) {
    if (g[i] <= s[j]) {
      result++;
      i++;
    }
    j++;
  }
  return result;
};
```

:::

## 376. 摆动序列

:::details

```JavaScript
/**
 * @param {number[]} nums
 * @return {number}
 */
var wiggleMaxLength = function (nums) {
  if (nums.length < 2) return nums.length;
  let result = 1;
  let prediff = 0;
  let curdiff = 0;
  for (let i = 0; i < nums.length - 1; i++) {
    curdiff = nums[i + 1] - nums[i];
    if ((curdiff > 0 && prediff <= 0) || (curdiff < 0 && prediff >= 0)) {
      result++;
      prediff = curdiff;
    }
  }
  return result;
};
```

:::

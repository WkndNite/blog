---
date: 2025-03-15 11:29:13
tags:
  - LeetCode-100
  - 计算机基础
  - 数据结构与算法
---

# Hot-100 栈

## 20. 有效的括号

```js
/**
 * @param {string} s
 * @return {boolean}
 */
var isValid = function (s) {
  const map = {
    '(': ')',
    '[': ']',
    '{': '}'
  };
  const stack = [];
  for (const item of s) {
    if (map[item]) stack.push(item);
    else if (map[stack.pop()] !== item) return false;
  }
  return stack.length === 0;
};
```

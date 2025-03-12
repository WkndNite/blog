---
date: 2025-03-12 22:10:50
tags:
  - LeetCode
  - 计算机基础
  - 数据结构与算法
---

# 回溯算法

## 17. 电话号码的字母组合

```js
/**
 * @param {string} digits
 * @return {string[]}
 */
var letterCombinations = function (digits) {
  const map = {
    2: 'abc',
    3: 'def',
    4: 'ghi',
    5: 'jkl',
    6: 'mno',
    7: 'pqrs',
    8: 'tuv',
    9: 'wxyz',
  };
  const result = [];
  const length = digits.length;

  if (length === 0) return result;
  if (length === 1) return map[digits].split('');

  function _dfs(path, index) {
    if (index > length - 1) {
      result.push(path);
      return;
    }
    const letters = map[digits[index]];
    for (const letter of letters) {
      _dfs(path + letter, index + 1);
    }
  }

  _dfs('', 0);
  return result;
};
```

## 46. 全排列

```js
/**
 * @param {number[]} nums
 * @return {number[][]}
 */
var permute = function (nums) {
  const result = [];
  const used = {};

  function _dfs(path) {
    if (path.length === nums.length) {
      result.push(path.slice());
      return;
    }
    for (const num of nums) {
      if (used[num]) continue;
      path.push(num);
      used[num] = true;
      _dfs(path);
      path.pop();
      used[num] = false;
    }
  }
  _dfs([]);
  return result;
};
```

## 78. 子集

```js
/**
 * @param {number[]} nums
 * @return {number[][]}
 */
var subsets = function (nums) {
  const result = [];
  function _dfs(index, list) {
    if (index === nums.length) {
      result.push(list.slice());
      return;
    }
    list.push(nums[index]);
    _dfs(index + 1, list);
    list.pop();
    _dfs(index + 1, list);
  }
  _dfs(0, []);
  return result;
};
```

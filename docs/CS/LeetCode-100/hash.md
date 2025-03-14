---
date: 2025-02-24
tags:
  - Hot-100
  - 计算机基础
  - 数据结构与算法
---

# Hot-100 哈希

## 1. 两数之和

```js
/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
var twoSum = function (nums, target) {
  const map = new Map();
  for (let i = 0; i < nums.length; i++) {
    if (map.has(target - nums[i])) {
      return [i, map.get(target - nums[i])];
    }
    map.set(nums[i], i);
  }
  return [];
};
```

## 49. 字母异位词分组

```js
/**
 * @param {string[]} strs
 * @return {string[][]}
 */
var groupAnagrams = function (strs) {
  const map = new Map();
  for (let str of strs) {
    const count = new Array(26).fill(0);
    for (let c of str) {
      count[c.charCodeAt() - 'a'.charCodeAt()]++;
    }
    const key = count.join(' ');
    map.has(key) ? map.get(key).push(str) : map.set(key, [str]);
  }
  return Array.from(map.values());
};
```

## 128. 最长连续序列

```js
/**
 * @param {number[]} nums
 * @return {number}
 */
var longestConsecutive = function (nums) {
  const set = new Set(nums);
  let longest = 0;
  for (const num of set) {
    if (!set.has(num - 1)) {
      let current = num;
      let len = 1;
      while (set.has(current + 1)) {
        current++;
        len++;
      }
      longest = longest > len ? longest : len;
    }
  }
  return longest;
};
```

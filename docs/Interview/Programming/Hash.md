---
date: 2025-07-18 00:35:04
tags:
  - 哈希表
  - 刷题
---

# 哈希表

[242.有效的字母异位词](https://leetcode-cn.com/problems/valid-anagram/)<el-tag type="success">写的很漂亮的一次代码</el-tag>

```JavaScript
/**
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */
var isAnagram = function (s, t) {
    const map = new Map();
    for (const letter of s) {
        const cnt = map.has(letter) ? map.get(letter) : 0;
        map.set(letter, cnt + 1);
    }
    for (const letter of t) {
        if (!map.has(letter)) return false;
        const cnt = map.get(letter);
        map.set(letter, cnt - 1);
    }
    for (const [_, cnt] of map) {
        if (cnt) return false;
    }
    return true;
};
```

[202.快乐数](https://leetcode-cn.com/problems/happy-number/)<el-tag type="warning">记得 map(number) </el-tag>

```JavaScript
/**
 * @param {number} n
 * @return {boolean}
 */
var isHappy = function (n) {
    const set = new Set();

    let cur = n;

    while (cur !== 1) {
        let curArr = cur.toString().split('').map(Number);

        let afterSquareValue = curArr.reduce((pre, cur) => pre + cur * cur, 0);

        if (set.has(afterSquareValue)) return false;
        set.add(afterSquareValue);
        cur = afterSquareValue;
    }

    return true;
};
```

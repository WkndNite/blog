---
date: 2025-07-03 23:52:02
tags:
  - 刷题
  - 贪心算法
---

# 贪心算法

[26.不相同的字符串](https://kamacoder.com/problempage.php?pid=1026)<el-tag type="success">毫无技巧的纯粹地贪</el-tag>

:::details 🔍 展开代码

```JavaScript
const rl = require("readline").createInterface({
  input: process.stdin,
  output: process.stdout,
});

const inputs = [];
rl.on("line", (line) => {
  inputs.push(line);
});

rl.on("close", () => {
  const times = Number(inputs[0]);
  for (let i = 1; i <= times; i++) {
    deal(inputs[i]);
  }
});

function hasRepeatedLetter(str) {
  return [...new Set(str.split(""))].length !== str.split("").length;
}

function getOneLetterNotInStr(str) {
  return (
    "abcdefghijklmnopqrstuvwxyz"
      .split("")
      .filter((letter) => !str.split("").includes(letter))[0] || str[0]
  );
}

function deal(_str) {
  let str = _str;
  let count = 0;
  while (hasRepeatedLetter(str)) {
    const map = {};
    for (const s of str) {
      if (!map[s]) map[s] = 1;
      else map[s] += 1;
    }
    for (const s of str) {
      if (map[s] >= 2) {
        map[s] -= 2;
        break;
      }
    }
    str = "";
    for (const key in map) {
      str += key.repeat(map[key]);
    }
    str += getOneLetterNotInStr(str);
    count += 1;
  }
  console.log(count);
  return count;
}
```

:::

[27.最长递增子序列](https://kamacoder.com/problempage.php?pid=1027)<el-tag type="success">动态规划 or 二分贪心</el-tag>

::::details 🔍 展开代码

:::code-group

```JavaScript [动态规划 O(n<sup>2</sup>)]
const rl = require("readline").createInterface({
  input: process.stdin,
  output: process.stdout,
});

const inputs = [];
rl.on("line", (line) => {
  inputs.push(line);
});
rl.on("close", () => {
  const times = Number(inputs[0]);
  for (let i = 1; i <= times; i++) {
    deal(JSON.parse(inputs[i]));
  }
});

function deal(arr) {
  const dp = new Array(arr.length).fill(1);
  for (let i = 1; i < dp.length; i++) {
    for (let j = 0; j < i; j++) {
      if (arr[i] > arr[j]) {
        dp[i] = Math.max(dp[i], dp[j] + 1);
      }
    }
  }
  console.log(Math.max(...dp));
}
```

```JavaScript [二分查找 O(nlogn)]
const rl = require("readline").createInterface({
  input: process.stdin,
  output: process.stdout,
});

const inputs = [];
rl.on("line", (line) => {
  inputs.push(line);
});
rl.on("close", () => {
  const times = Number(inputs[0]);
  for (let i = 1; i <= times; i++) {
    deal(JSON.parse(inputs[i]));
  }
});

function deal(arr) {
  const tails = [];
  for (let num of arr) {
    let left = 0,
      right = tails.length;
    while (left < right) {
      let mid = left + Math.floor((right - left) / 2);
      if (tails[mid] < num) {
        left = mid + 1;
      } else {
        right = mid;
      }
    }
    tails[left] = num;
  }
  console.log(tails.length);
}
```

:::

::::

[455.分发饼干](https://leetcode.cn/problems/assign-cookies/) <el-tag type="success">EZ</el-tag>

:::details 🔍 展开代码

```JavaScript
/**
 * @param {number[]} g
 * @param {number[]} s
 * @return {number}
 */
var findContentChildren = function (g, s) {
    g.sort((a, b) => a - b);
    s.sort((a, b) => a - b);
    let cnt = 0;
    let child = 0;
    let cookie = 0;

    while(child < g.length && cookie < s.length){
        if(s[cookie]>=g[child]){
            cnt++;
            child++;
        }
        cookie++;
    }
    return cnt;
};
```

:::

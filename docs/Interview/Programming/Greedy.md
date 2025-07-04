---
date: 2025-07-03 23:52:02
tags:
  - 刷题
  - 贪心算法
---

# 贪心算法

一个只包含小写字母的字符串，每次操作可以将两个相同的字母删除，然后在字符串的末尾新增任意一个小写字母。请问最少需要多少次操作，才能使字符串中所有的字母都不相同。第一行是一个整数 N，表示后续会有 N 个字符串，每个字符串占一行。对于输入的每一个字符串，你需要输出该字符串所需的最少操作次数，每个输出占一行。<el-tag type="success">毫无技巧的纯粹地贪</el-tag>

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

子序列是原数组中一些元素的有序集合，这些元素按照它们在原数组中的出现顺序进行选择，但不一定要相邻。现在给定一个数组 array，需要你找出该数组的最长增长子序列的长度。第一行是一个整数 N，表示后续会有 N 行输入。每个数组占一行。对于输入的每个数组，你需要输出其该数组最长子序列的长度。每个输出占一行。<el-tag type="success">动态规划 or 二分贪心</el-tag>

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

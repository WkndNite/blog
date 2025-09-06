const rl = require("readline").createInterface({ input: process.stdin });
const inputs = [];
rl.on("line", (line) => inputs.push(line));
rl.on("close", () => {
  const n = +inputs[0];
  const nums = inputs[1].split(" ").map(Number);
  deal(n, nums);
});

// 对于给定的一个数组a，可以进行重排列。
// 构造一个数组b，b[i] 表示 数组a 0-i 没有出现的最小非负整数
// 比如 a = [0,1,2] b=[1,2,3]
// 比如 a = [0,1,2,3] b=[1,2,3,4]
// 比如 a = [0,1,2,3,4] b=[1,2,3,4,5]
// 求b所有元素最大和

// 输入
// 3
// 1 0 1
// 输出
// 5
// 0 1 1
// 解释 对 101 重排列得到 011 对应的b数组应该是 1 2 2
// 最大和就是 1+2+2 = 5

// 自己的做法是 递归所有情况 三层循环 通过 3%

function getAllOrders(n, nums) {
  const results = [];
  const used = new Set();

  function _dfs(path) {
    if (path.length === n) {
      results.push(path);
      return;
    }
    for (let i = 0; i < n; i++) {
      if (used.has(i)) {
        continue;
      }
      used.add(i);
      path.push(nums[i]);
      _dfs(path);
      path.pop();
      used.delete(i);
    }
  }
  _dfs([]);
  return results;
}

function deal(n, nums) {
  const orders = getAllOrders(n, nums);
  let max = 0;
  let res = "";
  for (const o of orders) {
    let localMax = 0;
    const length = o.length;
    for (let i = 0; i < length; i++) {
      const current = o[i];
      for (let j = 0; ; j++) {
        if (!current.includes(j)) {
          localMax += j;
          break;
        }
      }
    }
    if (localMax > max) {
      max = localMax;
      res = o.join(" ");
    }
  }
  console.log(max);
  console.log(res);
}
// TODO

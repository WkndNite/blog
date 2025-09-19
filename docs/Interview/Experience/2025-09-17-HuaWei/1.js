const rl = require("readline").createInterface({
  input: process.stdin,
});
const inputs = [];
rl.on("line", (data) => {
  inputs.push(data);
});
rl.on("close", () => {
  const k = +inputs[0];
  const m = +inputs[1];
  const arr = inputs[2].split(" ").map(Number);
  const result = deal(k, m, arr);
  console.log(result[result.length - 1]);
});

function deal(k, m, arr) {
  const dp = Array.from({ length: m }, (_, index) => arr[index]);
  const stack = [0];
  stack;
  for (let i = 1; i < m; i++) {
    const leftBorder = Math.max(i - k, 0);
    while (stack.length && stack[0] < i - k) {
      stack.shift();
    }
    stack;
    dp[i] = dp[stack[0]] + arr[i];
    while (stack.length && dp[stack[stack.length - 1]] <= dp[i]) {
      stack.pop();
    }
    stack.push(i);
  }
  return dp;
}

// const result = deal(3, 6, [1, -5, -2, 4, 0, 7])
// console.log(result);
// console.log(result[result.length - 1]);

console.log(deal(2, 8, [3, -5, -10, 2, -1, 5, -6, -5]));

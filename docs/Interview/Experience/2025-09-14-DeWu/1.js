const inputs = [];
while ((line = read_line()) !== "") {
  inputs.push(line);
}

const n = +inputs[0];
const coins = inputs.slice(1).map((line) => line.split(" ").map(Number));

// 对于一个n层房间应该计算0~n-2层的dp
// 最后一层只能由上面的房间向下走一步
const dp = Array.from({ length: n - 1 }, (_, index) =>
  Array.from({ length: index + 1 }, () => coins[0][0]),
);

for (let i = 1; i < n - 1; i++) {
  for (let j = 0; j < i + 1; j++) {
    const right = dp[i][j - 1] || 0;
    const down = dp[i - 1][j] || 0;
    dp[i][j] = Math.max(right, down) + coins[i][j];
  }
}

const resultDp = dp[n - 2].map(
  (beforeCoins, index) => beforeCoins + coins[n - 1][index],
);
const result = Math.max(...resultDp);
console.log(result);

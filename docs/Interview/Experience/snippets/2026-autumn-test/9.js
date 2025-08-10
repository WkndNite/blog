const rl = require("readline").createInterface({
  input: process.stdin,
  output: process.stdout,
});
const inputs = [];
rl.on("line", (line) => inputs.push(line));
rl.on("close", () => deal(inputs));

function deal(inputs) {
  const [r, c] = inputs[0].split(" ").map(Number);
  const matrix = [];
  for (let i = 0; i < r; i++) {
    matrix.push(inputs[i + 1].split(" ").map(Number));
  }
  const memo = Array.from({ length: r }, () =>
    Array.from({ length: c }, () => 0),
  );
  // matrix 里找到最长路径
  // 从当前节点出发 找到升高的最长路径 dfs
  let max = -Infinity;
  for (let i = 0; i < r; i++) {
    for (let j = 0; j < c; j++) {
      const cur = dfs(matrix, i, j, memo);
      max = Math.max(cur, max);
    }
  }

  console.log(max);
}

function dfs(grid, x, y, memo) {
  const [r, c] = [grid.length, grid[0].length];
  if (x < 0 || y < 0 || x >= r || y >= c) return 0;
  if (memo[x][y]) return memo[x][y];
  let max_len = 1;

  const choices = [
    [x - 1, y],
    [x + 1, y],
    [x, y - 1],
    [x, y + 1],
  ];
  for (const [d1, d2] of choices) {
    if (d1 >= 0 && d1 < r && d2 >= 0 && d2 < c && grid[d1][d2] > grid[x][y]) {
      max_len = Math.max(max_len, 1 + dfs(grid, d1, d2, memo));
    }
  }

  memo[x][y] = max_len;

  return max_len;
}

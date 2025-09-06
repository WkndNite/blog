// 超时
const rl = require("readline").createInterface({
  input: process.stdin,
});
const inputs = [];
rl.on("line", (line) => inputs.push(line));
rl.on("close", () => {
  const [N, M] = inputs[0].split(" ").map(Number);
  const lefts = inputs[1].split(" ").map(Number);
  const rights = inputs[2].split(" ").map(Number);
  const times = +inputs[3];
  const queries = inputs[4].split(" ").map(Number);

  const result = deal(N, M, lefts, rights);
  const answer = [];
  for (let i = 0; i < times; i++) {
    const q = queries[i];
    answer.push(result[q]);
  }

  console.log(answer.join(" "));
});

function deal(n, m, lefts, rights) {
  const records = new Array(n + 1).fill(0);
  for (let i = 0; i < m; i++) {
    j = lefts[i];
    while (j <= rights[i]) {
      records[j++]++;
    }
  }
  return records;
}
// 优化
function deal(n, m, lefts, rights) {
  const records = new Array(n + 1).fill(0);

  // 差分数组更新区间
  for (let i = 0; i < m; i++) {
    const left = lefts[i];
    const right = rights[i];
    records[left]++; // 开始加一
    records[right + 1]--; // 结束减一
  }

  // 计算前缀和得到最终的记录数组
  for (let i = 1; i <= n; i++) {
    records[i] += records[i - 1];
  }

  // 记录数组存储了每个位置上的最终结果
  return records;
}

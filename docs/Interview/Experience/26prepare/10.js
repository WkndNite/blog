const rl = require("readline").createInterface({
  input: process.stdin,
});
const inputs = [];
rl.on("line", (line) => inputs.push(line));
rl.on("close", () => {
  const [n, m] = inputs[0].split(" ").map(Number);
  const cases = inputs.slice(1).map((c) => c.split(" ").map(Number));
  const result = deal(n, m, cases);
  console.log(result);
});

function deal(n, m, cases) {
  const min = new Array(m).fill(Infinity);
  min[0] = Math.min(...cases.map((c) => c[0]));
  for (let i = 1; i < m; i++) {
    for (const c of cases) {
      min[i] = Math.min(min[i], c[i] - c[i - 1]);
    }
  }
  const result = min.reduce((pre, cur) => pre + cur, 0);
  return result;
}

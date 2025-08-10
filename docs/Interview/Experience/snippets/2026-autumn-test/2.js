const rl = require("readline").createInterface({
  input: process.stdin,
});
const lines = [];
rl.on("line", (line) => lines.push(line.trim()));
rl.on("close", () => deal(lines));

function deal(inputs) {
  const n = +inputs[0];
  const cases = inputs.slice(1).map(Number);

  // 预处理所有不超过 1e9 的幂乘积格式的数字
  const powers = [];
  const LIMIT = 1e9;
  const seen = new Set();

  for (let x = 1; x <= LIMIT; x *= 2) {
    for (let y = x; y <= LIMIT; y *= 3) {
      if (!seen.has(y)) {
        seen.add(y);
        powers.push(y);
      }
    }
  }

  powers.sort((a, b) => a - b);

  for (let i = 0; i < n; i++) {
    let cur = cases[i];
    const result = [];
    for (const val of powers) {
      if (val <= cur) {
        result.push(val);
        cur -= val;
        if (cur === 0) break;
      }
    }
    console.log(result.length);
    console.log(result.join(" "));
  }
}

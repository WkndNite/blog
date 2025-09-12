const rl = require("readline").createInterface({ input: process.stdin });
const inputs = [];
rl.on("line", (line) => inputs.push(line));
rl.on("close", () => {
  for (let i = 1; i < inputs.length; i += 2) {
    const n = +inputs[i];
    const nums = inputs[i + 1].split(" ").map(Number);
    // nums 有多少个子序列在 Fibonacci 序列中
    console.log(deal(n, nums));
  }
});
function deal(n, nums) {}

console.log(deal(3, [1, 1, 1])); // 6 [1]*3 [1,1]*2
console.log(deal(4, [1, 1, 2, 3])); // 15
// [1]*2 [2]*1 [3]*1
// [1,1]*1 [1,2]*2 [1,3]*2 [2,3]*1
// [1,1,2]*1 [1,2,3]*2 [1,1,3]*1
// [1,1,2,3]*1

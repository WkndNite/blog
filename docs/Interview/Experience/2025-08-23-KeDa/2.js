const rl = require("readline").createInterface({ input: process.stdin });
const inputs = [];
rl.on("line", (line) => inputs.push(line));
rl.on("close", () => {
  const n = +inputs[0];
  const arr = inputs[1].split(" ").map(Number);
  const res = deal(n, arr);
  console.log(res);
});

function deal(n, arr) {
  if (n === 0) return 0;

  const leftCount = new Array(n).fill(0);
  const leftSet = new Set();

  const rightCount = new Array(n).fill(0);
  const rightSet = new Set();

  for (let i = 0; i < n; i++) {
    leftSet.add(arr[i]);
    leftCount[i] = leftSet.size;
  }
  for (let i = n - 1; i >= 0; i--) {
    rightSet.add(arr[i]);
    rightCount[i] = rightSet.size;
  }

  let max = 0;
  for (let i = 0; i < n; i++) {
    const current = leftCount[i] + (i + 1 < n ? rightCount[i + 1] : 0);
    max = Math.max(max, current);
  }
  return max;
}

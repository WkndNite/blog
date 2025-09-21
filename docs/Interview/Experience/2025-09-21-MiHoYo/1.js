const rl = require("readline").createInterface({ input: process.stdin });
const inputs = [];
rl.on("line", (line) => inputs.push(line));
rl.on("close", () => {
  const queryTimes = +inputs[0];
  for (let i = 1; i <= queryTimes; i++) {
    const [left, right] = inputs[i].split(" ").map(Number);
    const result = deal(left, right);
    console.log(result);
  }
});

function findLCM(i, j, k) {
  for (let start = k + 1; ; start++) {
    if (start % i === 0 && start % j === 0 && start % k === 0) return start;
    // 不超时的关键
    if (start === i + j + k) return -1;
  }
}

/**
 * @description 找到区间内 left <= a < b < c
 * 满足 max < lcm < sum
 */
function deal(left, right) {
  // 区间宽度如果不足以容纳三个数
  const width = right - left;
  if (width < 3) return 0;

  let res = 0;

  for (let i = left; i <= right - 2; i++) {
    for (let j = i + 1; j <= right - 1; j++) {
      for (let k = j + 1; k <= right; k++) {
        const lcm = findLCM(i, j, k);
        if (lcm === -1) continue;
        if (k < lcm && i + j + k > lcm) res++;
      }
    }
  }

  return res;
}

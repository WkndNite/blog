const rl = require("readline").createInterface({
  input: process.stdin,
  output: process.stdout,
});
const inputs = [];
rl.on("line", (line) => inputs.push(line));
rl.on("close", () => {
  const T = +inputs[0]; // 数据组数
  const queries = inputs
    .slice(1, T + 1)
    .map((item) => item.split(" ").map(Number));

  // 预生成幸运数
  const lucky = [];
  function dfs(num) {
    if (num > 1e18) return;
    if (num > 0) lucky.push(num);
    dfs(num * 10 + 3);
    dfs(num * 10 + 7);
  }
  dfs(0);
  lucky.sort((a, b) => a - b);

  for (let [L, R] of queries) {
    console.log(deal(L, R, lucky));
  }
});

function deal(L, R, lucky) {
  let sum = 0;
  let cur = L;
  let index = lowerBound(lucky, L);
  while (cur <= R) {
    const next = lucky[index];
    const end = Math.min(R, next);
    sum += (end - cur + 1) * next;
    cur = end + 1;
    index++;
  }
  return sum;
}

/**
 *
 * @description 实际上用的就是二分查找
 * @returns 找到第一个大于等于自身的幸运数
 */
function lowerBound(arr, target) {
  let l = 0;
  let r = arr.length;
  while (l < r) {
    const mid = (l + r) >> 1;
    if (arr[mid] >= target) r = mid;
    else l = mid + 1;
  }
  return l;
}

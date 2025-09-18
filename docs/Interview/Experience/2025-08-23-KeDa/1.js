const rl = require("readline").createInterface({ input: process.stdin });
const inputs = [];
rl.on("line", (line) => inputs.push(line));
rl.on("close", () => {
  const [n, k] = inputs[0].split(" ").map(Number);
  const str = inputs[1];
  console.log(maxUppercase(n, k, str));
});

function maxUppercase(n, k, str) {
  let lowercaseCount = 0;
  for (let i = 0; i < n; i++) {
    if (str[i] >= "a" && str[i] <= "z") {
      lowercaseCount++;
    }
  }

  let uppercaseCount = n - lowercaseCount;

  // 贪心 优先将小写字母转换为大写字母
  const convert = Math.min(lowercaseCount, k);
  uppercaseCount += convert;
  k -= convert;

  // 有剩余次数
  // 剩下奇数次 大写 -1
  // 剩下偶数次 不影响结果
  if (k > 0 && k % 2 === 1) {
    uppercaseCount--;
  }
  return uppercaseCount;
}

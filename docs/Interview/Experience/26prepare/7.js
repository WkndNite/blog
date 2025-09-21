const rl = require("readline").createInterface({
  input: process.stdin,
});
const inputs = [];
rl.on("line", (line) => inputs.push(line));
rl.on("close", () => deal(inputs));

function deal(inputs) {
  const preDeal = (s) => s.split(" ").map(Number);
  const [v, length] = preDeal(inputs[0]);
  const arr = preDeal(inputs[1]);

  // dp[i] 体积为 i 能装多少
  const dp = new Array(v + 1).fill(0);
  // 遍历所有物品
  for (let i = 0; i < length; i++) {
    // 逆序遍历背包容量，防止一个物品被重复使用
    for (let j = v; j >= arr[i]; j--) {
      dp[j] = Math.max(dp[j], dp[j - arr[i]] + arr[i]);
    }
  }

  // 最终 dp[v] 就是最大能装的体积
  console.log(v - dp[v]);
}

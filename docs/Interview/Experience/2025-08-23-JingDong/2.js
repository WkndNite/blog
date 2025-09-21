const rl = require("readline").createInterface({
  input: process.stdin,
  output: process.stdout,
});
const inputs = [];
rl.on("line", (line) => inputs.push(line));
rl.on("close", () => {
  const [n, m, k] = inputs[0].split(" ").map(Number);
  console.log(deal(n, m, k));
});

/**
 *
 * @description 长度为 n 的序列，数字范围为 1 ~ m，相邻数字差值 >= k
 * @returns 符合条件的序列个数 % 998244353
 */
function deal(n, m, k) {
  const MOD = 998244353; // 取模值，防止结果溢出

  // 初始状态：长度为1的序列，每个数字都可作为序列，因此每个位置的方案数为1
  let dp = new Array(m + 1).fill(1);

  // 从长度2开始计算，直到长度n
  for (let len = 2; len <= n; len++) {
    // 前缀和数组：pre[j] 表示 dp[1] + dp[2] + ... + dp[j]
    const pre = new Array(m + 1).fill(0);
    for (let j = 1; j <= m; j++) {
      pre[j] = (pre[j - 1] + dp[j]) % MOD; // 累加并取模
    }

    // 计算新的dp数组（长度为len时的状态）
    const newDp = new Array(m + 1).fill(0);
    for (let last = 1; last <= m; last++) {
      let res = 0; // 存储当前last的方案数

      // 累加左区间 [1, last - k] 的和（若区间有效）
      if (last - k >= 1) {
        res += pre[last - k];
      }

      // 累加右区间 [last + k, m] 的和（若区间有效）
      if (last + k <= m) {
        // 右区间和 = 总和 - 前缀和[last + k - 1]
        res += pre[m] - pre[last + k - 1] + MOD; // +MOD防止负数
      }

      newDp[last] = res % MOD; // 取模后存入新状态
    }

    dp = newDp; // 更新dp为当前长度的状态
  }

  // 最终结果：长度为n时，所有可能结尾的方案数之和
  return dp.reduce((a, b) => (a + b) % MOD, 0);
}

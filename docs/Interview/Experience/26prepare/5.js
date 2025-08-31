const rl = require("readline").createInterface({
  input: process.stdin,
  output: process.stdout,
});
const inputs = [];
rl.on("line", (line) => inputs.push(line));
rl.on("close", () => deal(inputs));

function deal(inputs) {
  const [_t, ...cases] = inputs;
  const t = +_t;
  for (let i = 0; i < t; i++) {
    const curCase = cases[i * 2 + 1].split(" ").map(Number);
    const length = +cases[i * 2];
    const dp = new Array(length).fill(0);

    // curCase -1 or /2 ===> [0,0,0,...,0] min times
    // odd -1 even /2
    for (let j = 0; j < length; j++) {
      let curNum = curCase[j];
      while (curNum) {
        curNum = curNum % 2 === 0 ? curNum / 2 : curNum - 1;
        dp[j]++;
      }
    }
    console.log(Math.min(...dp)); // [!code --]
    let res = dp[0];
    for (let k = 1; k < dp.length; k++) {
      if (dp[k] > dp[k - 1]) {
        res += dp[k] - dp[k - 1];
      }
    }
    console.log(res);
  }
}

const rl = require("readline").createInterface({ input: process.stdin });
const inputs = [];
rl.on("line", (line) => inputs.push(line));
rl.on("close", () => {
  const queryTimes = +inputs[0];
  for (let i = 1; i < inputs.length; i += 2) {
    const n = +inputs[i];
    const nums = inputs[i + 1].split(" ").map(Number);
    const result = findGood(n, nums);
    console.log(result);
  }
});

function findGood(n, nums) {
  let answer = 0;
  for (let i = 0; i < n; i++) {
    const curNum = nums[i];
    if (curNum < 10) {
      answer++;
      continue;
    }
    // 不是个位数的情况
    const numArr = Array.from("" + curNum).map(Number);
    const gcd = generateGCD(numArr);
    if (curNum % gcd === 0) answer++;
  }
  return answer;
}

function generateGCD(numArr) {
  let res = 1;
  for (let i = 2; i < 10; i++) {
    res = numArr.every((n) => n % i === 0) ? i : res;
  }
  return res;
}

const rl = require("readline").createInterface({
  input: process.stdin,
});
const inputs = [];
rl.on("line", (line) => inputs.push(line));
rl.on("close", () => {
  const [r, k, n] = inputs.slice(0, 3).map(Number);
  const cities = inputs[3].split(" ").map(Number);
  const result = solve(r, k, n, cities);
  console.log(result);
});

function solve(r, k, n, cities) {
  const dp = Array.from({ length: n }, (_, index) => cities[index]);
  for (let i = 0; i < n; i++) {
    for (let j = 1; j <= r; j++) {
      if (i - j >= 0) dp[i] += cities[i - j];
      if (i + j < n) dp[i] += cities[i + j];
    }
  }
  // return Math.min(...dp) + k;
  let index = 0;
  let min = Infinity;
  for (let i = 0; i < n; i++) {
    if (cities[i] < min) {
      index = i;
      min = cities[i];
    }
  }
  cities[index] += k;
  return Math.min(...dp);
}

const r1 = 0;
const k1 = 3;
const n1 = 4;
const cities1 = [5, 5, 5, 5];
const result1 = solve(r1, k1, n1, cities1);
console.log(result1);

const r2 = 1;
const k2 = 2;
const n2 = 5;
const cities2 = [1, 2, 4, 9, 3];
const result2 = solve(r2, k2, n2, cities2);
console.log(result2);

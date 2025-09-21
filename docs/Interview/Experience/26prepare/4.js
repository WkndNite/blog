const rl = require("readline").createInterface({
  input: process.stdin,
  output: process.stdout,
});

const inputs = [];
rl.on("line", (line) => inputs.push(line));
rl.on("close", () => deal(inputs));

function deal(inputs) {
  const [n, k] = inputs[0].split(" ").map(Number);
  const choices = inputs[1].split(" ").map(Number);

  let res = 0;
  const map = new Map();
  for (const num of choices) {
    map.set(num, 1 + map.get(num) || 1);
  }
  for (const num of choices) {
    res += map.get(k - num) || 0;
  }
  console.log(res);
}

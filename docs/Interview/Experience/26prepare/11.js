const rl = require("readline").createInterface({
  input: process.stdin,
});
const inputs = [];
rl.on("line", (line) => inputs.push(line));
rl.on("close", () => {
  let res = "";
  const times = +inputs[0];
  for (let i = 1; i <= times; i++) {
    const [n, m] = inputs[i].split(" ").map(Number);
    const _res = deal(n, m);
    res += `${_res} `;
  }
  console.log(res.trimEnd());
});

function deal(n, m) {
  if (n === 1) return 0;
  if (n === 2) return m;
  return 2 * m;
}

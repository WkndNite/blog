const rl = require("readline").createInterface({
  input: process.stdin,
});
const inputs = [];
rl.on("line", (line) => inputs.push(line));
rl.on("close", () => {
  const n = +inputs[0];
  const selectors = inputs.slice(1).map((s) => s.split(" "));
  const result = deal(n, selectors);
  console.log(result);
});

function deal(n, selectors) {
  const infos = Array.from({ length: n }, () => {});
  for (let i = 0; i < n; i++) {
    const currentSelector = selectors[i];
    let value = 0;
    for (const s of currentSelector) {
      if (s.startsWith("#")) value += 100;
      else if (s.startsWith(".")) value += 10;
      else value += 1;
    }
    infos[i] = {
      value,
      index: i,
    };
  }
  infos.sort((a, b) => {
    if (a.value === b.value) return b.index - a.index;
    return b.value - a.value;
  });
  let res = "";
  for (const i of infos) {
    res += ` ${i.index + 1}`;
  }
  return res.slice(1);
}

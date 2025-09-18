const rl = require("readline").createInterface({
  input: process.stdin,
});
const inputs = [];
rl.on("line", (line) => {
  inputs.push(line);
});
rl.on("close", () => {
  const str = inputs[0];
  let hori = 0;
  let vert = 0;
  for (const s of str) {
    if (s === "L") hori++;
    else if (s === "R") hori--;
    else if (s === "U") vert++;
    else vert--;
  }
  hori = Math.abs(hori);
  vert = Math.abs(vert);
  res = Math.floor(hori / 2) + Math.floor(vert / 2) + (hori % 2 === 1 ? 1 : 0);
  console.log(res);
});

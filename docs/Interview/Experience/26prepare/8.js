const rl = require("readline").createInterface({
  input: process.stdin,
  output: process.stdout,
});

rl.on("line", (line) => {
  let diff = 0;
  let max = 0;
  const m = new Map();
  m.set(0, -1);

  for (let i = 0; i < line.length; i++) {
    diff = line[i] === "A" ? diff + 1 : diff - 1;
    if (!m.has(diff)) m.set(diff, i);
    else max = Math.max(max, i - m.get(diff));
  }
  console.log(max);
});

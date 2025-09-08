const rl = require("readline").createInterface({ input: process.stdin });
const inputs = [];
rl.on("line", (line) => inputs.push(line));
rl.on("close", () => {
  const line = +inputs[0];
  const result = deal(line);
  console.log(result);
});

function deal(line) {
  const B_LIMIT = 1024;
  const KB_LIMIT = 1024 * B_LIMIT;
  const MB_LIMIT = 1024 * KB_LIMIT;
  const GB_LIMIT = 1024 * MB_LIMIT;

  if (line < B_LIMIT) return `${line}B`;
  else if (line < KB_LIMIT) {
    const kb = line / B_LIMIT;
    return `${line % B_LIMIT ? kb.toFixed(1) : kb}KB`;
  } else if (line < MB_LIMIT) {
    const mb = line / KB_LIMIT;
    return `${line % KB_LIMIT ? mb.toFixed(1) : mb}MB`;
  } else {
    const gb = line / MB_LIMIT;
    return `${line % MB_LIMIT ? gb.toFixed(1) : gb}GB`;
  }
}

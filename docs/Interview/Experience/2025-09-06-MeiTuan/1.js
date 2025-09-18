const rl = require("readline").createInterface({ input: process.stdin });
rl.on("line", (line) => {
  const result = deal(line);
  console.log(result);
});

function deal(str) {
  const arr = str.split("dp").filter((item) => item !== "");
  const set = new Set(arr);
  return set.size;
}

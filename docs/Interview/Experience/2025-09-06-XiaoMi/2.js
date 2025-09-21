const rl = require("readline").createInterface({
  input: process.stdin,
});
const inputs = [];
rl.on("line", (line) => inputs.push(line));
rl.on("close", () => {
  const times = +inputs[0];
  for (let i = 1; i <= 1 + (times - 1) * 3; i += 3) {
    const [n, m] = inputs[i].split(" ").map(Number);
    const case1 = inputs[i + 1].split(" ").map(Number);
    const case2 = inputs[i + 2].split(" ").map(Number);

    const result = deal(n, m, case1, case2);
    console.log(result);
  }
});

function deal(n, m, case1, case2) {
  const analysis = Array.from({ length: m }, (_, index) =>
    [case1[index], case2[index]].sort((a, b) => a - b),
  );
  const results = [];
  const used = new Set();
  function dfs(path) {
    if (path.length === 3) {
      results.push(path.slice());
      return;
    }
    for (let i = 1; i <= n; i++) {
      if (used.has(i)) continue;
      used.add(i);
      dfs(path.concat(i));
      used.delete(i);
    }
  }
  dfs([]);

  for (const comp of results) {
    const a = [comp[0], comp[1]].sort((a, b) => a - b);
    const b = [comp[1], comp[2]].sort((a, b) => a - b);
    const c = [comp[0], comp[2]].sort((a, b) => a - b);

    const flag1 = analysis.some((pair) => arraysEqual(pair, a));
    const flag2 = analysis.some((pair) => arraysEqual(pair, b));
    const flag3 = analysis.some((pair) => arraysEqual(pair, c));

    if (flag1 + flag2 + flag3 === 1) return "No";
  }
  return "Yes";
}

function arraysEqual(arr1, arr2) {
  if (arr1.length !== arr2.length) return false;
  for (let i = 0; i < arr1.length; i++) {
    if (arr1[i] !== arr2[i]) return false;
  }
  return true;
}

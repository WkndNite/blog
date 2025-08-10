const rl = require("readline").createInterface({
  input: process.stdin,
});
const inputs = [];
rl.on("line", (line) => inputs.push(line));
rl.on("close", () => deal(inputs));

const preDeal = (s, flag = false) => {
  const a = s.split(" ").map(Number);
  const b = a
    .slice()
    .map((value, index) => [value, index])
    .sort((a, b) => a[0] - b[0]);
  return flag ? b : a;
};

function deal(inputs) {
  const [m, n, x] = preDeal(inputs[0]);
  const a = preDeal(inputs[1], true);
  const b = preDeal(inputs[2], true);

  let i = 0;
  let j = n - 1;

  let diff = Infinity;
  let pairs = [Infinity, Infinity];

  const flag = (localDiff, localX, localY) => {
    if (localDiff < diff) return true;
    if (localDiff === diff) {
      if (localX < pairs[0]) return true;
      if (localX === pairs[0] && localY < pairs[1]) return true;
    }
    return false;
  };

  while (i < m && j >= 0) {
    const sum = a[i][0] + b[j][0];
    const localDiff = Math.abs(sum - x);

    if (flag(localDiff, a[i][1], b[j][1])) {
      diff = localDiff;
      pairs = [a[i][1], b[j][1]];
    }

    if (sum < x) {
      i++;
    } else {
      j--;
    }
  }

  console.log(pairs.join(" "));
}

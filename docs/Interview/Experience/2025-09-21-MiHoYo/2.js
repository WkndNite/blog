const rl = require("readline").createInterface({ input: process.stdin });
const inputs = [];
rl.on("line", (line) => inputs.push(line));
rl.on("close", () => {
  const DIV = 1e9 + 7;
  const queryTimes = +inputs[0];
  for (let i = 1; i <= queryTimes; i++) {
    const sequence = inputs[i];
    const solutionCnt = deal(sequence);
    console.log(solutionCnt % DIV);
  }
});

function deal(str) {
  const arr = [];
  const len = str.length;
  for (let i = 0; i < len; i++) {
    const arrLen = arr.length;
    const cur = str[i];
    if (!arrLen) arr.push(cur);
    else {
      const lastLength = arr[arrLen - 1].length;
      const last = arr[arrLen - 1][lastLength - 1];
      if (last === cur) {
        arr[arrLen - 1] += cur;
      } else {
        arr.push(cur);
      }
    }
  }
  const fibonnaci = [0, 1, 2, 3, 5];
  for (let i = 5; i < 2e5; i++) {
    fibonnaci[i] = fibonnaci[i - 1] + fibonnaci[i - 2]; // [!code --]
    fibonnaci[i] = (fibonnaci[i - 1] + fibonnaci[i - 2]) % DIV; // [!code ++]
  }

  //   const dp = Array.from({ length: arr.length }, (_, index) => {
  //     const len = arr[index].length;
  //     return fibonnaci[len];
  //   });
  //   return dp.reduce((pre, cur) => pre * cur, 1);
  const dp = arr.map((block) => fibonnaci[block.length]); // [!code ++]
  return dp.reduce((pre, cur) => (pre * cur) % DIV, 1); // [!code ++]
}

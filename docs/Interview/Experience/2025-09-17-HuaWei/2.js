const rl = require("readline").createInterface({
  input: process.stdin,
});
const inputs = [];
rl.on("line", (data) => {
  inputs.push(data);
});
rl.on("close", () => {
  const limit = +inputs[0];
  const result = findNumber(limit);
  console.log(result);
});

function findNumber(limit) {
  const _sushus = new Set([
    2, 3, 5, 7, 11, 13, 17, 19, 23, 29, 31, 37, 41, 43, 47, 53, 59, 61, 67, 71,
    73, 79, 83, 89, 97, 101, 103, 107, 109, 113, 127, 131, 137, 139, 149, 151,
    157,
  ]);
  for (let i = limit; i >= 2; i--) {
    const arr = Array.from("" + i);
    const sum = arr.reduce((pre, cur) => +cur + pre, 0);
    const flag1 = _sushus.has(sum);
    let flag2 = true;
    for (let j = 1; j < arr.length; j++) {
      if (arr[j] < arr[j - 1]) {
        flag2 = false;
        break;
      }
    }
    console.log(i, arr, sum, flag1, flag2);
    if (flag1 && flag2) return i;
  }

  return -1;
}

const result = findNumber(111);
console.log(result);

const rl = require("readline").createInterface({
  input: process.stdin,
});
let times = 0;
rl.on("line", (line) => {
  inputs.push(line);
  times = +inputs[0];
  if (inputs.length === times * 2 + 1) rl.close();
});
rl.on("close", () => {
  for (let i = 1; i <= times; i++) {
    const length = +inputs[2 * i - 1];
    const array = inputs[2 * i].split(" ").map(Number);
    console.log(solution(array));
  }
});

/**
 *
 * @param {Array<Number>} array
 * @returns {Number}
 */
function solution(array) {
  let result = 0;
  const length = array.length;
  const sli = array.slice();
  array.sort((a, b) => a - b);
  for (let left = 0; left < length; left++) {
    let right = left;
    while (left <= right && right < length) {
      const curSli = sli.slice(left, right + 1);
      const curArr = array.slice(left, right + 1);
      if (valid(curSli, curArr)) {
        result++;
      }
      right += 2;
    }
  }
  return result;
}

function valid(cur1, cur2) {
  const length = cur1.length;
  return length === 1 || cur1[(length - 1) / 2] === cur2[(length - 1) / 2];
}

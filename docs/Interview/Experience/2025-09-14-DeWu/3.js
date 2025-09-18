const inputs = [];
while ((line = read_line()) !== "") {
  inputs.push(line);
}

const len = +inputs[0];
const [A, B] = inputs.slice(1).map((line) => line.split(" ").map(Number));

// len === 2： 0011 0101
// 0 是左括号 1 是右括号的有效对
const compos = [];

function gen(size, res) {
  function dfs(current, left, right) {
    if (current.length === 2 * size) {
      res.push(current);
      return;
    }
    if (left < size) dfs(current + "0", left + 1, right);
    if (right < left) dfs(current + "1", left, right + 1);
  }
  dfs("", 0, 0);
}

gen(len, compos);

const stack = [];

function into(origin) {
  const target = origin.shift();
  stack.push(target);
}

function out() {
  const stackSize = stack.length;
  const num1 = B[stackSize - 1];
  const num2 = stack.pop();
  return num1 * num2;
}
let result = 0;
for (const c of compos) {
  let localRes = 0;
  let origin = A.slice();
  for (const s of c) {
    if (s === "0") {
      into(origin);
    } else {
      localRes += out();
    }
  }
  result += localRes;
}

console.log(result);

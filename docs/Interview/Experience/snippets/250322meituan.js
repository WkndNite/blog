// #region choose1
const person = {
  name: 'zhoumowan',
  sayName: function () {
    console.log(this.name);
  }
};
person.sayName();
// #endregion choose1

// #region choose2
const myName = Symbol();
obj = {
  [myName]: '123'
};
// #endregion choose2

// #region choose3
var a = 1;
function fn1(b) {
  var a = 2;
  return fn2(b);
}
function fn2(b) {
  return a + b;
}
const res = fn1(3);
console.log(res);
// #endregion choose3

// #region code1
const yes = ['A', 'H', 'I', 'M', 'O', 'T', 'U', 'V', 'W', 'X', 'Y'];

function solution(str) {
  const length = str.length;
  let result = 0;
  for (let i = 0; i < length; i++) {
    for (let right = i; right < length; right++) {
      const cur = str.slice(i, right + 1);
      if (valid(cur) && cur.length > 1) result++;
    }
  }
  return result;
}

function valid(str) {
  let left = 0;
  let right = str.length - 1;
  while (left <= right) {
    if (!yes.includes(str[left]) || !yes.includes(str[right])) return false;
    if (str[left] !== str[right]) return false;
    left++;
    right--;
  }
  return true;
}
const result = solution('AAAA');
console.log(result); // 6
// #endregion code1

// #region code2
// 用例通过率最高 10% OR 超时
const rl = require('readline').createInterface({
  input: process.stdin
});
let times = 0;
rl.on('line', (line) => {
  inputs.push(line);
  times = +inputs[0];
  if (inputs.length === times * 2 + 1) rl.close();
});
rl.on('close', () => {
  for (let i = 1; i <= times; i++) {
    const length = +inputs[2 * i - 1];
    const array = inputs[2 * i].split(' ').map(Number);
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
// #endregion code2

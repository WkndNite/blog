// #region 1
// 暴力拆解中位数并做字符串拼接或者数组push会超时
const rl = require("readline").createInterface({ input: process.stdin });
const inputs = [];
rl.on("line", (line) => {
  inputs.push(line);
});
rl.on("close", () => {
  deal(inputs);
});

class FenwickTree {
  constructor(size) {
    this.size = size;
    this.tree = new Array(size + 1).fill(0);
  }

  update(i, delta) {
    while (i <= this.size) {
      this.tree[i] += delta;
      i += i & -i;
    }
  }

  query(i) {
    let sum = 0;
    while (i > 0) {
      sum += this.tree[i];
      i -= i & -i;
    }
    return sum;
  }

  findKth(k) {
    let pos = 0;
    let bitMask = 1 << 20;
    while (bitMask > 0) {
      let nextPos = pos + bitMask;
      if (nextPos <= this.size && this.tree[nextPos] < k) {
        k -= this.tree[nextPos];
        pos = nextPos;
      }
      bitMask >>= 1;
    }
    return pos + 1;
  }
}

function deal(inputs) {
  const n = +inputs[0];
  const arr = inputs[1].split(" ").map(Number);

  const sortedUniqueArr = Array.from(new Set(arr)).sort((a, b) => a - b);
  const rankMap = new Map();
  sortedUniqueArr.forEach((value, index) => {
    rankMap.set(value, index + 1);
  });

  const ft = new FenwickTree(sortedUniqueArr.length);
  const res = [];
  let length = n;

  for (let v of arr) {
    ft.update(rankMap.get(v), 1);
  }

  while (length) {
    const k = length % 2 === 0 ? length / 2 : Math.floor(length / 2) + 1;
    const discreteVal = ft.findKth(k);
    const realVal = sortedUniqueArr[discreteVal - 1];
    res.push(realVal);
    ft.update(discreteVal, -1);
    length--;
  }
  console.log(res.join(" "));
}
// #endregion 1

// #region 2
const rli = require("readline").createInterface({
  input: process.stdin,
});
const lines = [];
rli.on("line", (line) => lines.push(line.trim()));
rli.on("close", () => deal(lines));

function deal(inputs) {
  const n = +inputs[0];
  const cases = inputs.slice(1).map(Number);

  // 预处理所有不超过 1e9 的幂乘积格式的数字
  const powers = [];
  const LIMIT = 1e9;
  const seen = new Set();

  for (let x = 1; x <= LIMIT; x *= 2) {
    for (let y = x; y <= LIMIT; y *= 3) {
      if (!seen.has(y)) {
        seen.add(y);
        powers.push(y);
      }
    }
  }

  powers.sort((a, b) => a - b);

  for (let i = 0; i < n; i++) {
    let cur = cases[i];
    const result = [];
    for (const val of powers) {
      if (val <= cur) {
        result.push(val);
        cur -= val;
        if (cur === 0) break;
      }
    }
    console.log(result.length);
    console.log(result.join(" "));
  }
}
// #endregion 2

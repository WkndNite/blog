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

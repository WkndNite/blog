// #region 1
class FenwickTree {
  constructor(size) {
    this.size = size;
    this.tree = new Array(size + 1).fill(0);
  }
  // ...
}
// #endregion 1

// #region 2
class FenwickTree {
  // ...
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
// #endregion 2

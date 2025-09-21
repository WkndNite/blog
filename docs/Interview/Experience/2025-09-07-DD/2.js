const rl = require("readline").createInterface({
  input: process.stdin,
});
const inputs = [];
rl.on("line", (line) => inputs.push(line));
rl.on("close", () => {
  const [n, m, v] = inputs[0].split(" ").map(Number);
  const pressures = inputs[1].split(" ").map(Number);
  const prices = inputs[2].split(" ").map(Number);
  const result = deal(n, m, v, pressures, prices);
  console.log(result);
});

function deal(n, m, v, pressures, prices) {
  pressures.sort((a, b) => a - b);

  // 房子价格 -> 数量
  const map = new Map();
  for (const p of prices) {
    map.set(p, (map.get(p) || 0) + 1);
  }

  // 从剩余房源中分配
  const distribute = (pressure) => {
    const smaller = [...map.keys()].filter((p) => p <= pressure);
    if (smaller.length) {
      return Math.max(...smaller); // 选最大的不超过 pressure
    }

    // 否则选剩余的最小价格
    let minPrice = Infinity;
    for (const [p, cnt] of map) {
      if (cnt > 0) minPrice = Math.min(minPrice, p);
    }
    return minPrice;
  };

  let res = n;

  for (const cur of pressures) {
    if (map.size === 0) break; // 没房子了

    const house = distribute(cur);

    if (!Number.isFinite(house)) break; // 无可用房

    if (house <= cur) {
      map.set(house, map.get(house) - 1);
      if (map.get(house) === 0) map.delete(house);
      res--;
    } else {
      const diff = house - cur;
      if (v >= diff) {
        v -= diff;
        map.set(house, map.get(house) - 1);
        if (map.get(house) === 0) map.delete(house);
        res--;
      }
    }
  }
  return res;
}

function deal(first, second) {
  const M = 998244353;
  const q = 36;
  const map1 = new Map();
  const map2 = new Map();
  let exclude = 0;
  for (let i = 0; i < 6; i++) {
    map1.set(first[i], 1 + (map1.get(first[i]) || 0));
    map2.set(second[i], 1 + (map2.get(second[i]) || 0));
  }
  for (const [key, value1] of map1) {
    const value2 = map2.get(key) || 0;
    exclude += value1 * value2;
  }
  const p = q - exclude;
  const result = Math.pow(q % M, M - 2);

  // const _q = Math.pow(q,M-2) % M;
  // const _result = p * _q;
  // const result = _result % M
  return result;
}

console.log(deal([1, 4, 4, 1, 5, 6], [5, 4, 3, 2, 3, 1]));

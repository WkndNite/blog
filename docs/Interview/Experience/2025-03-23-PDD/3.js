function hasCycleDep(config) {
  const visited = [];
  let queue = [];
  for (const key in config) {
    if (queue.includes(key)) queue = queue.filter((item) => item !== key);
    visited.push(key);
    const { deps } = config[key];
    for (const dep of deps) {
      if (visited.includes(dep)) return true;
      queue.push(dep);
    }
  }
  return false;
}

const result = hasCycleDep({
  a: { deps: ["b", "d"] },
  b: { deps: ["c"] },
  c: { deps: ["a"] },
});
console.log(result);

function getIps(s) {
  const result = [];

  function backtrack(start, path) {
    if (path.length === 4) {
      if (start === s.length) {
        result.push(path.join("."));
        return;
      }
    }

    for (let len = 1; len <= 3; len++) {
      if (start + len > s.length) break;

      const segment = s.substring(start, start + len);
      if (segment.length > 1 && segment.charAt(0) === "0") continue;
      if (parseInt(segment, 10) > 255) continue;

      path.push(segment);
      backtrack(start + len, path);
      path.pop();
    }
  }

  backtrack(0, []);
  return result;
}

console.log(getIps("25525511135"));
console.log(getIps("0000"));
console.log(getIps("00000"));

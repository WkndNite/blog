function getSum(str) {
  let result = "";
  for (const s of str) {
    if (/[a-z]$/.test(s)) {
      result += s.toUpperCase();
    } else {
      result += s.toLowerCase();
    }
  }
  return result
    .split("")
    .reduce(
      (acc, cur, index) => (index % 2 === 0 ? acc + cur.charCodeAt() : acc),
      0,
    );
}
console.log(getSum("HeLlo"));

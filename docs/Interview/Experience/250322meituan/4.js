const yes = ["A", "H", "I", "M", "O", "T", "U", "V", "W", "X", "Y"];

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
const result = solution("AAAA");
console.log(result); // 6

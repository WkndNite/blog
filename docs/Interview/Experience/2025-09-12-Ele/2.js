const rl = require("readline").createInterface({ input: process.stdin });
const inputs = [];
rl.on("line", (line) => inputs.push(line));
rl.on("close", () => {
  const [n, k] = inputs[0].split(" ").map(Number);
  const str = inputs[1];
  console.log(deal(n, k, str));
});

function deal(n, k, str) {
  // 长度为 n 的字符串 str 任意修改 k 个位置以后最长的相同字母连续子串

  let maxLength = 0;

  // 对每个可能的字符（a-z）都尝试一次
  for (let targetChar = 0; targetChar < 26; targetChar++) {
    const char = String.fromCharCode(97 + targetChar); // 'a' + targetChar

    let left = 0,
      right = 0;
    let changesNeeded = 0;

    // 滑动窗口
    while (right < n) {
      // 扩展右边界
      if (str[right] !== char) {
        changesNeeded++;
      }

      // 收缩左边界，直到修改次数不超过k
      while (changesNeeded > k) {
        if (str[left] !== char) {
          changesNeeded--;
        }
        left++;
      }

      // 更新最大长度
      maxLength = Math.max(maxLength, right - left + 1);
      right++;
    }
  }

  return maxLength;
}

// 测试
console.log(deal(4, 2, "abcd")); // 3
console.log(deal(5, 2, "abacc")); // 4
console.log(deal(8, 1, "aaaacaaa")); // 8

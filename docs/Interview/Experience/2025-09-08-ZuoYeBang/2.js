const rl = require("readline").createInterface({ input: process.stdin });
const inputs = [];
rl.on("line", (line) => inputs.push(line));
rl.on("close", () => {
  const versions = inputs[0].split(" ");
  const standard = inputs[1];
  const results = versions.filter((v) => check(v, standard));
  console.log(results.join(" "));
});

function check(version, standard) {
  const number_standard = +standard;
  const isNumber = !Number.isNaN(number_standard);
  if (isNumber) {
    const arr_s = standard.split(".");
    const arr_v = version.split(".");
    let i = 0;
    while (i < arr_s.length && i < arr_v.length) {
      const cur_s = arr_s[i];
      const cur_v = arr_v[i];
      if (cur_s === cur_v) i++;
      else return false;
    }
    return true;
  } else {
    // 这里只是判断了主版本号相同或者主版本号、次版本号相同
    // 实际上应该还要判断是否是 standard 之后的版本号
    if (standard.startsWith("^")) {
      const arr_s = standard.slice(1).split(".");
      const arr_v = version.split(".");
      return arr_s[0] === arr_v[0];
    } else {
      const arr_s = standard.slice(1).split(".");
      const arr_v = version.split(".");
      return arr_s[0] === arr_v[0] && arr_s[1] === arr_v[1];
    }
  }
}

// 下面给一个更完整的代码
function check(version, standard) {
  // 数字形式，比如 "1.2.3"
  const number_standard = +standard;
  const isNumber = !Number.isNaN(number_standard);
  if (isNumber) {
    const arr_s = standard.split(".");
    const arr_v = version.split(".");
    let i = 0;
    while (i < arr_s.length && i < arr_v.length) {
      if (arr_s[i] !== arr_v[i]) return false;
      i++;
    }
    return true;
  } else {
    const arr_s = standard.slice(1).split(".").map(Number);
    const arr_v = version.split(".").map(Number);

    if (standard.startsWith("^")) {
      // ^x.y.z  -> 主版本相同 && 版本 >= x.y.z
      if (arr_s[0] !== arr_v[0]) return false;
      return compareVersion(arr_v, arr_s) >= 0;
    } else if (standard.startsWith("~")) {
      // ~x.y.z -> 主版本相同 && 次版本相同 && 修订号 >= z
      if (arr_s[0] !== arr_v[0] || arr_s[1] !== arr_v[1]) return false;
      return compareVersion(arr_v, arr_s) >= 0;
    } else {
      return false; // 其他情况不处理
    }
  }
}

// 比较两个版本号 [major, minor, patch]
// v1 >= v2 -> 返回 1
// v1 == v2 -> 返回 0
// v1 < v2  -> 返回 -1
function compareVersion(v1, v2) {
  for (let i = 0; i < 3; i++) {
    const diff = (v1[i] || 0) - (v2[i] || 0);
    if (diff > 0) return 1;
    if (diff < 0) return -1;
  }
  return 0;
}

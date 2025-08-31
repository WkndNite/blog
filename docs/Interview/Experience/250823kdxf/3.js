const rl = require("readline").createInterface({ input: process.stdin });
const inputs = [];
rl.on("line", (line) => inputs.push(line));
rl.on("close", () => {
  // 1. 解析输入数据
  const [n, m] = inputs[0].split(" ").map(Number);
  const lives = [];
  for (let i = 1; i <= n; i++) {
    const [s, e] = inputs[i].split(" ").map(Number);
    lives.push({ s, e });
  }
  const queries = [];
  for (let i = n + 1; i <= n + m; i++) {
    const [left, right] = inputs[i].split(" ").map(Number);
    queries.push({ left, right });
  }

  // 2. 预处理：按结束时间e分组，且每组的s排序（用于后续二分查找）
  // 动态计算最大结束时间，避免固定值浪费空间
  const maxE = lives.length ? Math.max(...lives.map((l) => l.e)) : 0;
  const eGroup = Array.from({ length: maxE + 2 }, () => []); // e的范围：0 ~ maxE +2防止越界
  for (const { s, e } of lives) {
    eGroup[e].push(s);
  }
  // 对每个e对应的s数组排序
  for (let e = 0; e <= maxE; e++) {
    eGroup[e].sort((a, b) => a - b);
  }

  // 3. 处理每个查询，直接输出结果
  for (const { left, right } of queries) {
    let count = 0;
    // 仅遍历结束时间≤right的分组（超过right的e无需考虑）
    const targetE = Math.min(right, maxE); // 避免超出eGroup的范围
    for (let e = 0; e <= targetE; e++) {
      const sList = eGroup[e];
      if (sList.length === 0) continue;

      // 二分查找：找到s≥left的元素个数（排序数组特性）
      let low = 0,
        high = sList.length;
      while (low < high) {
        const mid = (low + high) >> 1;
        if (sList[mid] >= left) {
          high = mid;
        } else {
          low = mid + 1;
        }
      }
      count += sList.length - low; // 大于等于left的元素数量
    }
    // 直接输出当前查询的结果（按输入顺序）
    console.log(count);
  }
});

function mergeIntervals(intervals) {
  if (intervals.length === 0) return [];

  // 1. 先按区间起点排序
  intervals.sort((a, b) => a[0] - b[0]);

  const result = [intervals[0]]; // 放入第一个区间

  for (let i = 1; i < intervals.length; i++) {
    let [left, right] = intervals[i];
    let last = result[result.length - 1];

    if (left <= last[1]) {
      // 有重叠，合并区间
      last[1] = Math.max(last[1], right);
    } else {
      // 没重叠，直接放进结果
      result.push([left, right]);
    }
  }

  return result;
}

const intervals = [
  [1, 3],
  [2, 6],
  [8, 10],
  [15, 18],
];
const result = mergeIntervals(intervals);
console.log(result);

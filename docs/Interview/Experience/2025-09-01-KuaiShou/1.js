const arr = [6, 7, [3], [[4, 5], 2], [[[1]]]];

function deal1(arr, depth = 1) {
  const flatten = arr.flat(depth);
  const unique = [...new Set(flatten)];
  const sorted = unique.sort((a, b) => a - b);
  return sorted;
}

function deal2(arr, depth = 1) {
  return [...new Set(arr.flat(depth))].sort((a, b) => a - b);
}

function deal3(arr, depth = 1) {
  const result = [];

  function insert(val) {
    // 二分查找插入位置
    let left = 0,
      right = result.length;
    while (left < right) {
      const mid = Math.floor((left + right) / 2);
      if (result[mid] < val) left = mid + 1;
      else right = mid;
    }
    if (result[left] !== val) result.splice(left, 0, val); // 去重
  }

  function dfs(a, d) {
    for (const item of a) {
      if (Array.isArray(item) && d > 0)
        dfs(item, d - 1); // 控制深度
      else insert(item);
    }
  }

  dfs(arr, depth);
  return result;
}

console.log(deal1(arr, 1));
console.log(deal2(arr, 2));
console.log(deal3(arr, Infinity));

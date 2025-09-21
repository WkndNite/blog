function getValue(data, path, defaultValue = undefined) {
  // 处理路径：将连续点号替换为单个点号，将数组语法转换为点语法
  let _path = path
    .replace(/\.+/g, ".") // 处理连续点号
    .replace(/\[(\d+)\]/g, ".$1") // 处理数组索引
    .replace(/^\./, "") // 移除开头的点号（如果有）
    .replace(/\.$/, ""); // 移除结尾的点号（如果有）

  let keys = _path.split(".");
  let result = data;
  for (let key of keys) {
    result = result[key];
    if (!result) {
      return defaultValue;
    }
  }
  return result;
}

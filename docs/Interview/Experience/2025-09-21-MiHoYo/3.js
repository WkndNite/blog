const rl = require("readline").createInterface({ input: process.stdin });
const inputs = [];
rl.on("line", (line) => inputs.push(line));
rl.on("close", () => {
  const [nodesCount, edgesCount, xor] = inputs[0].split(" ").map(Number);
  const edges = [];
  for (let i = 1; i <= edgesCount; i++) {
    const [source, target, weight] = inputs[i].split(" ").map(Number);
    edges.push({ source, target, weight });
  }
  const result = findBestPath(nodesCount, edgesCount, xor, edges);
  console.log(result);
});

/**
 * @param {number} nc 顶点个数
 * @param {number} ec 边的条数
 * @param {number} xor 寻找最优代价的路径异或因子
 * @param {Array<{source:number,target:number,weight:number}>} edges 有向边的信息
 * @return {string} 从第一个节点出发到各自节点最小代价
 */
function findBestPath(nc, ec, xor, edges) {
  const result = Array.from({ length: nc }, () => Infinity);
  result[0] = 0;

  const dfs = (start, end, edges) => {
    const path = [];
    // ...
  };

  const optimize = (path, xor) => {
    const len = path.length;
    const dp = new Array(len);
    for (let i = 0; i < len; i++) {
      const currentWeight = path[i].weight;
      const optimizedWeight = currentWeight ^ xor;
      dp[i] = optimizedWeight;
    }

    // 接下来应该找到 dp 的最小子数组和

    return;
  };

  for (let i = 2; i <= nc; i++) {
    // 从第一个节点到第i个节点
    const path = dfs(1, i, edges);
    if (!path.length) {
      result[i] = -1;
      continue;
    }
    // 存在可达路径
    result[i] = optimize(path, xor);
  }

  return result.join(" ");
}

/* ----------------------------------------------------------------------- */
/*                           Answer By ChatGpt                             */
/* ----------------------------------------------------------------------- */

/**
 * @param {number} nc 节点数量
 * @param {number} xor 异或因子
 * @param {Array<{source:number,target:number,weight:number}>} edges 边数组
 * @returns {Array<number>} 每个节点的最优代价
 */
function findBestPath(nc, xor, edges) {
  // 构建邻接表
  const graph = Array.from({ length: nc + 1 }, () => []);
  for (const e of edges) {
    graph[e.source].push({ to: e.target, weight: e.weight });
  }

  const result = Array(nc + 1).fill(-1);
  result[1] = 0; // 节点1到自身为0

  // DFS 找到一条从1到目标节点的路径
  const dfs = (current, target, visited = new Set()) => {
    if (current === target) return [];
    visited.add(current);
    for (const edge of graph[current]) {
      if (!visited.has(edge.to)) {
        const subPath = dfs(edge.to, target, visited);
        if (subPath !== null) return [edge, ...subPath];
      }
    }
    visited.delete(current);
    return null;
  };

  // 优化函数：计算路径最优代价（允许连续子段异或）
  const optimize = (path, xor) => {
    const n = path.length;
    const prefix = [0];
    for (let i = 0; i < n; i++) {
      prefix.push(prefix[prefix.length - 1] + path[i].weight);
    }

    const dp = Array(n + 1).fill(Infinity);
    dp[0] = 0;

    for (let i = 1; i <= n; i++) {
      // 不使用异或
      dp[i] = dp[i - 1] + path[i - 1].weight;
      // 尝试连续子段异或
      for (let j = 0; j < i; j++) {
        const segmentSum = prefix[i] - prefix[j];
        dp[i] = Math.min(dp[i], dp[j] + (segmentSum ^ xor));
      }
    }

    return dp[n];
  };

  // 遍历节点
  for (let node = 2; node <= nc; node++) {
    const path = dfs(1, node, new Set());
    if (!path) {
      result[node] = -1;
    } else {
      result[node] = optimize(path, xor);
    }
  }

  return result.slice(1); // 去掉 result[0]
}

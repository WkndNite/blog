/**
 * 按依赖顺序执行任务树
 * @param {Object} tree - 任务依赖关系树
 * tree 的结构示例：
 * {
 *   taskA: { task: async () => { ... }, dependencies: [] },
 *   taskB: { task: async () => { ... }, dependencies: ['taskA'] },
 *   taskC: { task: async () => { ... }, dependencies: ['taskA', 'taskB'] }
 * }
 */
async function executeDependencyTree(tree) {
  const executedTask = new Set(); // 已经确定顺序的任务名称集合
  const queue = []; // 按依赖顺序排好的任务队列（数组）

  // 1. 初始化任务队列 —— 找到没有依赖的任务（即可以直接执行的）
  for (const taskName in tree) {
    if (
      !tree[taskName].dependencies ||
      tree[taskName].dependencies.length === 0
    ) {
      queue.push({ taskName, task: tree[taskName].task });
      executedTask.add(taskName);
    }
  }

  // 2. 循环查找剩下的任务
  // 条件：所有依赖任务都已经在 executedTask 里，才可以加入队列
  while (queue.length < Object.keys(tree).length) {
    for (const taskName in tree) {
      if (
        !executedTask.has(taskName) && // 没被处理过
        tree[taskName]?.dependencies.every((dep) => executedTask.has(dep)) // 依赖都已完成
      ) {
        queue.push({ taskName, task: tree[taskName].task });
        executedTask.add(taskName);
      }
    }
  }

  // 3. 按顺序执行队列里的任务
  const settledResults = await Promise.allSettled(
    queue.map((info) => info.task()),
  );

  // 4. 把执行结果整理成 { taskName: result } 的形式
  const result = {};
  queue.forEach((info, index) => {
    result[info.taskName] = settledResults[index];
  });

  return result;
}

// ============================
// 👇 定义任务树
// A -> B -> C 的依赖链
// 其中 B 依赖 A，C 依赖 B
// ============================

const tree = {
  taskA: {
    task: async () => {
      console.log("执行 A");
      return "结果 A";
    },
    dependencies: [],
  },
  taskB: {
    task: async () => {
      console.log("执行 B");
      return "结果 B";
    },
    dependencies: ["taskA"],
  },
  taskC: {
    task: async () => {
      console.log("执行 C");
      return "结果 C";
    },
    dependencies: ["taskB"],
  },
};

// ============================
// 👇 运行
// ============================
executeDependencyTree(tree).then((result) => {
  console.log("最终结果：", result);
});

// ============================
// 👇 定义任务树（含失败任务）
// A 正常执行
// B 执行失败
// C 依赖 B
// ============================
const _tree = {
  taskA: {
    task: async () => {
      console.log("执行 A");
      return "结果 A";
    },
    dependencies: [],
  },
  taskB: {
    task: async () => {
      console.log("执行 B");
      throw new Error("B 出错了！");
    },
    dependencies: ["taskA"],
  },
  taskC: {
    task: async () => {
      console.log("执行 C");
      return "结果 C";
    },
    dependencies: ["taskB"],
  },
};

// ============================
// 👇 运行
// ============================
executeDependencyTree(_tree).then((result) => {
  console.log("最终结果：", result);
});

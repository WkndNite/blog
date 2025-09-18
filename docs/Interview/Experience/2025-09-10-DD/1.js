async function runWithConcurrency(tasks, n) {
  const results = [];
  let index = 0; // 当前要取的任务下标

  // 运行一个任务
  async function run() {
    if (index >= tasks.length) return;
    const cur = index++;
    try {
      results[cur] = await tasks[cur]();
    } finally {
      // 一个任务结束后，立刻补下一个
      await run();
    }
  }

  // 先启动 n 个并发
  await Promise.all(Array.from({ length: n }, run));
  return results;
}
// 模拟一堆异步任务
function createTask(id, ms) {
  return () =>
    new Promise((res) => {
      setTimeout(() => {
        console.log("done", id);
        res(id);
      }, ms);
    });
}

const tasks = [
  createTask(1, 1000),
  createTask(2, 500),
  createTask(3, 300),
  createTask(4, 400),
  createTask(5, 700),
];

runWithConcurrency(tasks, 2).then((res) => {
  console.log("all done", res);
});

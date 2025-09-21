function executeTasks(tasks = [], retries = 3) {
  const results = [];
  let err = null;

  const exe = (task, remains) => {
    return task()
      .then((res) => {
        return {
          status: "fulfilled",
          value: res,
          times: retries - remains,
        };
      })
      .catch((e) => {
        if (remains > 0) {
          return exe(task, remains - 1);
        }
        err = e || {};
        return {
          status: "rejected",
          reason: e,
          times: retries,
        };
      });
  };

  return tasks
    .reduce((promiseChain, currentPromise, index) => {
      return promiseChain.then(() => {
        return exe(currentPromise, retries).then((r) => {
          results.push({
            index,
            ...r,
          });
          return results;
        });
      });
    }, Promise.resolve())
    .then(() => {
      if (err) {
        throw err;
      }
      return results;
    });
}

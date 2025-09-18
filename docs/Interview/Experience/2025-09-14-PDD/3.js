function createRouter() {
  const routesInfos = new Map();

  const addRoute = (path, view) => {
    routesInfos.set(path, view);
  };

  const match = (currentPath) => {
    // 先尝试完全匹配
    if (routesInfos.has(currentPath)) {
      const name = routesInfos.get(currentPath);
      return { name, params: null };
    }

    // 动态参数匹配
    for (const [path, view] of routesInfos.entries()) {
      const currentPathArr = currentPath
        .split("/")
        .filter((item) => item !== "");
      const pathArr = path.split("/").filter((item) => item !== "");

      if (currentPathArr.length !== pathArr.length) continue;

      const params = {};
      let matched = true;

      for (let i = 0; i < pathArr.length; i++) {
        const actual = currentPathArr[i];
        const expected = pathArr[i];

        if (expected.startsWith(":")) {
          params[expected.slice(1)] = actual;
        } else if (actual !== expected) {
          matched = false;
          break;
        }
      }

      if (matched) return { name: view, params };
    }

    // 没有匹配
    return null;
  };

  return { routesInfos, addRoute, match };
}

const router = createRouter();
router.addRoute("/home", "HomePage");
router.addRoute("/user/:id", "UserPage");

console.log(router.match("/home"));
console.log(router.match("/user/123"));
console.log(router.match("/user/new/form"));

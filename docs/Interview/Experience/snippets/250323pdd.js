const { set } = require('animejs');

// #region choose1
class Parent {
  constructor(name) {
    this.name = name;
  }
  logName() {
    console.log(this.name);
  }
}
class Child extends Parent {
  constructor(name) {
    super(name + '_P');
    this.name = name + '_C';
  }
  logName = () => {
    super.logName();
    console.log(this.name);
  };
  log() {
    this.logName();
    console.log(this.name);
  }
}

const child = new Child('A');
const obj = {
  name: 'object',
  log: child.log,
  logName: child.logName
};
obj.log();
// #endregion choose1

// #region choose2
const p1 = new Promise((resolve) => setTimeout(() => resolve(1), 0));
const p2 = new Promise((_, reject) => setTimeout(() => reject(2), 0));

Promise.allSettled([p1, p2])
  .then(([res1, res2]) => {
    console.log(res1.value + res2.value);
  })
  .catch((err) => {
    console.log(err.value);
  });

setTimeout(() => {
  console.log(3);
}, 0);

Promise.resolve()
  .then(() => {
    console.log(4);
  })
  .then(() => {
    console.log(5);
  });

setTimeout(() => {
  console.log(6);
}, 0);
// #endregion choose2

// #region code1
function hasCycleDep(config) {
  const visited = [];
  let queue = [];
  for (const key in config) {
    if (queue.includes(key)) queue = queue.filter((item) => item !== key);
    visited.push(key);
    const { deps } = config[key];
    for (const dep of deps) {
      if (visited.includes(dep)) return true;
      queue.push(dep);
    }
  }
  return false;
}

const result = hasCycleDep({
  a: { deps: ['b', 'd'] },
  b: { deps: ['c'] },
  c: { deps: ['a'] }
});
console.log(result);
// #endregion code1

// #region code2
function matrixSnakeTraversal(matrix) {
  let srcX = 0;
  let srcY = 0;

  const result = [];

  const rows = matrix.length;
  const columns = matrix[0].length;

  while (result.length < rows * columns) {
    up(srcX, srcY, result, rows, columns, matrix);
  }

  return result;
}
function up(srcX, srcY, result, rows, columns, matrix) {
  while (srcX >= 0 && srcY < columns) {
    result.push(matrix[srcX--][srcY++]);
  }
  if (srcY >= columns) {
    srcX += 2;
    srcY--;
  } else if (srcX < 0) {
    srcX++;
  }
  down(srcX, srcY, result, rows, columns, matrix);
}
function down(srcX, srcY, result, rows, columns, matrix) {
  while (srcX < rows && srcY >= 0) {
    result.push(matrix[srcX++][srcY--]);
  }
  if (srcX >= rows) {
    srcX--;
    srcY += 2;
  } else if (srcY < 0) {
    srcY++;
  }
  up(srcX, srcY, result, rows, columns, matrix);
}

const matrix = [
  [1, 2, 3],
  [4, 5, 6],
  [7, 8, 9],
  [11, 12, 13]
];

console.log(matrixSnakeTraversal(matrix));
// #endregion code2

// #region code2correct
function matrixSnakeTraversal2(matrix) {
  let srcX = 0;
  let srcY = 0;
  const result = [];

  const rows = matrix.length;
  const columns = matrix[0].length;

  while (result.length < rows * columns) {
    [srcX, srcY] = up2(srcX, srcY, result, rows, columns, matrix);
    if (result.length < rows * columns) {
      [srcX, srcY] = down2(srcX, srcY, result, rows, columns, matrix);
    }
  }

  return result;
}

function up2(srcX, srcY, result, rows, columns, matrix) {
  while (srcX >= 0 && srcY < columns) {
    result.push(matrix[srcX][srcY]);
    srcX--;
    srcY++;
  }
  // 处理边界
  if (srcY >= columns) {
    srcX += 2;
    srcY--;
  } else if (srcX < 0) {
    srcX++;
  }
  return [srcX, srcY];
}

function down2(srcX, srcY, result, rows, columns, matrix) {
  while (srcX < rows && srcY >= 0) {
    result.push(matrix[srcX][srcY]);
    srcX++;
    srcY--;
  }
  // 处理边界
  if (srcX >= rows) {
    srcX--;
    srcY += 2;
  } else if (srcY < 0) {
    srcY++;
  }
  return [srcX, srcY];
}

// 测试矩阵
const matrix2 = [
  [1, 2, 3],
  [4, 5, 6],
  [7, 8, 9],
  [11, 12, 13]
];

console.log(matrixSnakeTraversal2(matrix2));
// #endregion code2correct

// #region code3
class PriorityPromiseQueue {
  add() {}
  start() {}
  pause() {}
  resume() {}
  getAllResults() {}
}
// #endregion code3

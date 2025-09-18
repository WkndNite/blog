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
  [11, 12, 13],
];

console.log(matrixSnakeTraversal2(matrix2));

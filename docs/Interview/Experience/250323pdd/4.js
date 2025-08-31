function matrixSnakeTraversal(matrix) {
  const srcX = 0;
  const srcY = 0;

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
  [11, 12, 13],
];

console.log(matrixSnakeTraversal(matrix));

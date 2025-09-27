function getPath(node) {
  if (!node) return [];
  if (!node.left && !node.right) return [node.val]; // [!code ++] 面试少了这一行了
  const paths = [];
  if (node.left) {
    const leftPaths = getPath(node.left);
    for (const subPath of leftPaths) {
      paths.push(`${node.val}${subPath}`);
    }
  }
  if (node.right) {
    const rightPaths = getPath(node.right);
    for (const subPath of rightPaths) {
      paths.push(`${node.val}${subPath}`);
    }
  }
  return paths;
}

function sumNumbers(root) {
  const paths = getPath(root);
  const result = paths.reduce((sum, path) => +path + sum, 0);
  return result;
}

class TreeNode {
  constructor(val) {
    this.val = val;
    this.left = this.right = null;
  }
}

const root = new TreeNode(1);
const node2 = new TreeNode(2);
const node3 = new TreeNode(3);
const node4 = new TreeNode(4);
const node5 = new TreeNode(5);
const node6 = new TreeNode(6);

root.left = node2;
root.right = node3;
node2.left = node4;
node2.right = node5;
node3.left = node6;

console.log(sumNumbers(root));

const inputs = [];
while ((line = read_line()) !== "") {
  inputs.push(line);
}

const nodesCount = +inputs[0];
const colorInfo = inputs[1].split(" ").map(Number);
const parentInfo = inputs[2].split(" ").map(Number);

class TreeNode {
  constructor(color, id) {
    this.color = color;
    this.id = id;
    this.children = [];
  }

  addChild(childIndex) {
    this.children.push(childIndex);
  }

  output() {
    console.log(this.color, this.children.length, this.id);
  }
}

const tree = [];

for (let i = 0; i < nodesCount; i++) {
  const color = colorInfo[i] ? "red" : "blue";
  const id = i + 1;
  const currentNode = new TreeNode(color, id);
  tree.push(currentNode);
}

for (let i = 0; i < nodesCount; i++) {
  const currentParentId = parentInfo[i];
  if (currentParentId) {
    const parentNode = tree.find((node) => node.id === currentParentId);
    parentNode.addChild(i + 1);
  }
}

let redCount = 0;
let blueCount = 0;
tree.forEach((node) => {
  if (node.color === "red") {
    const flag =
      node.children.length === 0 ||
      node.children.every((child) => tree[child - 1].color === "blue");
    if (flag) redCount++;
  } else {
    const flag =
      node.children.length === 0 ||
      node.children.some((child) => tree[child - 1].color === "red");
    if (flag) blueCount++;
  }
});

console.log(blueCount, redCount);

const rl = require("readline").createInterface({
  input: process.stdin,
  output: process.stdout,
});
rl.on("line", (line) => deal(line));

class Walk {
  constructor() {
    // 0 1 2 3 分别代表 上 左 下 右
    this.direction = 0;
    this.x = 0;
    this.y = 0;
    // this.choices = [
    //   function () { this.y++; },
    //   function () { this.x--; },
    //   function () { this.y--; },
    //   function () { this.x++; },
    // ];
    this.choices = [
      () => this.y++,
      () => this.x--,
      () => this.y--,
      () => this.x++,
    ];
  }

  do() {
    this.choices[this.direction]();
  }
  left() {
    this.direction = (this.direction + 1) % 4;
  }
  right() {
    this.direction = (this.direction + 3) % 4;
  }
  out() {
    console.log(`${this.x} ${this.y}`);
  }
}

function deal(str) {
  const main = new Walk();
  str.split("").forEach((s) => {
    if (s === "W") main.do();
    else if (s === "A") main.left();
    else if (s === "D") main.right();
  });
  main.out();
}

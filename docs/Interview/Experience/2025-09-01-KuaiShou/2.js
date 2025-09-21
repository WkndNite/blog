const red = () => console.log("red");
const green = () => console.log("green");
const yellow = () => console.log("yellow");

function light(type) {
  const map = {
    red: [red, 2],
    green: [green, 3],
    yellow: [yellow, 1],
  };
  const fn = map[type][0];
  const wait = map[type][1] * 1000;
  return new Promise((resolve) => {
    setTimeout(() => {
      fn();
      resolve();
    }, wait);
  });
}

async function start() {
  Promise.resolve()
    .then(() => light("red"))
    .then(() => light("green"))
    .then(() => light("yellow"))
    .finally(() => start());
}

console.log("light starting...");
start();

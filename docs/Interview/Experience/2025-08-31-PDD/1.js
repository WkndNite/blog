console.log("v");
setTimeout(() => {
  console.log("z");
}, 0);
async function run() {
  console.log("x");
  await Promise.resolve();
  console.log("y");
}
run();
console.log("w");

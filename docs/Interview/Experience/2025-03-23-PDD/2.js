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

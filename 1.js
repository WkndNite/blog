// const rl = require('readline').createInterface({
//     input:process.stdin,
//     output:process.stdout
// })
// const inputs = []
// rl.on('line',line=>inputs.push(line))
// rl.on('close',()=>{
//     const groupCounts = +inputs[0];
//     for(let i = 1; i < 2 * groupCounts;i+=2){
//         const n = +inputs[i];
//         const arr = inputs[i+1].split(' ').map(Number);
//         const result = deal(n,arr);
//         console.log(result);
//     }
// })
function isEven(num) {
  return num % 2 === 0;
}

function deal(n, arr) {
  let res = 0;
  let posCnt = 0;
  let negCnt = 0;
  let zeroCnt = 0;
  let minAbsValue = Infinity;
  for (const num of arr) {
    if (num === 0) zeroCnt++;
    else if (num > 0) posCnt++;
    else negCnt++;

    const curValue = Math.abs(num);
    if (curValue < minAbsValue) {
      minAbsValue = curValue;
    }
  }

  res += zeroCnt;
  if (!isEven(negCnt)) {
    res = res + (minAbsValue + 1);
  }

  return res;
}

// 2
// 2
// -3 3
// 3
// -5 -33 -8

console.log(deal(2, [-3, 3]));
console.log(deal(3, [-5, -33, -8]));
console.log(deal(2, [0, 0, 0, 0]));

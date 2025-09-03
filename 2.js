// const rl = require('readline').createInterface({
//     input:process.stdin,
//     output:process.stdout
// })
// const inputs = []
// rl.on('line',line=>inputs.push(line))
// rl.on('close',()=>{
//     const groupTimes = +inputs[0];
//     for(let i = 1; i < groupTimes*2;i+=2){
//         const n = +inputs[i];
//         const str = inputs[i+1];
//         const result = deal(n,str);
//         console.log(result);
//     }
// })

function deal(n, str) {
  const len = Math.floor(n / 2);
  const dp = Array.from({ length: len }, () => 0);
  for (let i = len - 1; i >= 0; i--) {
    const cur = str[i];
    const pair = str[n - 1 - i];
    dp[i] = cur === pair;
  }
  let res = dp[0] === true ? 0 : 1;
  for (let i = 1; i < len; i++) {
    if (dp[i] !== dp[i + 1]) res++;
  }
  return res;
}

console.log(deal(9, "011001011"));

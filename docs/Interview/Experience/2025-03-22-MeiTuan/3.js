var a = 1;
function fn1(b) {
  var a = 2;
  return fn2(b);
}
function fn2(b) {
  return a + b;
}
const res = fn1(3);
console.log(res);

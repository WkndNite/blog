// #region choose1
var name = 117;
const obj = {
  name: 'John',
  func: function () {
    console.log(this.name);
  }
};

(obj.name === 'John' ? obj.func : '')();
// #endregion choose1

// #region choose2
// document.body.style.["background-color"] = '#fff';
// document.body.style.setProperty('background-color', '#fff');
// document.body.style = 'background-color': '#fff';
// document.body.style.fontSize = '30px'
// #endregion choose2

// #region choose3
var name = 'tom';
function getMethod() {
  var result = function () {
    return name;
  };
  var name = 'Jerry';
  return result;
}
var getName = getMethod();
var name1 = getName();
console.log(name1);
// #endregion choose3

// #region code
function getSum(str) {
  let result = '';
  for (const s of str) {
    if (/[a-z]$/.test(s)) {
      result += s.toUpperCase();
    } else {
      result += s.toLowerCase();
    }
  }
  return result
    .split('')
    .reduce(
      (acc, cur, index) => (index % 2 === 0 ? acc + cur.charCodeAt() : acc),
      0
    );
}
console.log(getSum('HeLlo'));
// #endregion code

var name = "tom";
function getMethod() {
  var result = () => name;
  var name = "Jerry";
  return result;
}
var getName = getMethod();
var name1 = getName();
console.log(name1);

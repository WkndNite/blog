var name = "global";
var obj = {
  name: "local",
  foo: function () {
    this.name = "foo";
    console.log(this.name); //foo
  }.bind(window),
};
var bar = new obj.foo();
setTimeout(function () {
  console.log(window.name); //global
}, 0);
console.log(bar.name); // foo

var bar3 = (bar2 = bar);
bar2.name = "foo2";
console.log(bar3.name); // foo2

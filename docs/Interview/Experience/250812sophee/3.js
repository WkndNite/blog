name = "Sophee";
obj = {
  name: "SopheePay",
  getName: () => {
    console.log(this.name);
  },
  getName2: function () {
    console.log(this.name);
  },
};
const fn1 = obj.getName;
const fn2 = obj.getName2;
console.log(obj.getName(), fn1(), obj.getName2(), fn2());

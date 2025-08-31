var name = 117;
const obj = {
  name: "John",
  func: function () {
    console.log(this.name);
  },
};

(obj.name === "John" ? obj.func : "")();

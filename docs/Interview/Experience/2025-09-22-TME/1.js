function Person(name, sex) {
  this.name = name;
  this.sex = sex;
  var evil = "我是私有属性";
  var pickNose = function () {
    console.log("我是私有方法");
  };
  this.drawing = function () {
    console.log("我是公有方法");
  };
}
Person.fight = function () {
  console.log("我是静态方法");
};
Person.prototype.protoMethod = function () {
  console.log("构造函数的原型对象方法");
};
var p1 = new Person("xiaomao", "cat");

// 面试回答
console.log(p1.name); // xiaomao
console.log(p1.evil); // 我是私有属性
p1.drawing(); // 我是公有方法
p1.pickNose(); // 我是私有方法
p1.fight(); // 静态方法
p1.protoMethod(); // 原型
Person.fight(); // 静态方法
Person.protoMethod(); // 原型
console.log(Person.sex); // undefined

/* ------------------------------ DIVIDER ----------------------------- */

// 正确理解
console.log(p1.name); // ✅ "xiaomao"
console.log(p1.evil); // ❌ undefined (evil 是私有变量)
p1.drawing(); // ✅ "我是公有方法"

// ❌ TypeError: p1.pickNose is not a function
p1.pickNose();

// ❌ TypeError: p1.fight is not a function (这是静态方法, 不能实例调)
p1.fight();
p1.protoMethod(); // ✅ "构造函数的原型对象方法"
Person.fight(); // ✅ "我是静态方法"

// ❌ TypeError: Person.protoMethod is not a function 在原型链不在本身
Person.protoMethod();

// ❌ undefined (sex 是实例属性, 不是构造函数属性)
console.log(Person.sex);

let foo = {};
let obj = {};
let obj2 = { a: 1 };
foo[obj] = "hello";
foo[obj2] = "hello2";

console.log(foo[obj], foo[obj2]);

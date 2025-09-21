class Parent {
  constructor(name) {
    this.name = name;
  }
  logName() {
    console.log(this.name);
  }
}
class Child extends Parent {
  constructor(name) {
    super(name + "_P");
    this.name = name + "_C";
  }
  logName = () => {
    super.logName();
    console.log(this.name);
  };
  log() {
    this.logName();
    console.log(this.name);
  }
}

const child = new Child("A");
const obj = {
  name: "object",
  log: child.log,
  logName: child.logName,
};
obj.log();

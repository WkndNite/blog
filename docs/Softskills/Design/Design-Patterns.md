---
date: 2024-12-27
tags:
  - 开发范式
  - 设计模式
---

# 设计模式

首先，大家可以了解一下什么叫 `软件模式`。软件模式是将模式的一般概念应用于软件开发领域，即软件开发的总体指导思路或参照样板。软件模式不仅包括本文要提到的 `设计模式`，还包括架构模式、分析模式和过程模式等。实际上，在软件生存期的每一个阶段都存在着一些被认同的模式。

设计模式主要分为三类：`创建型模式`、`结构型模式` 和 `行为型模式`。而每一种类别之下又包含若干种具体的模式。软件模式的存在，很好地增强了代码的可复用性、可维护性和可扩展性，你的代码能更容易地被他人理解。

## 创建型模式

创建型模式关注于对象的创建机制，试图在创建对象的过程中加入某种新的机制，以使得程序在创建对象方面更加灵活。

### 简单工厂/静态工厂

简单工厂模式是一种创建型设计模式，它提供了一种创建对象的方式，而不需要暴露对象的创建逻辑。简单工厂模式通过一个工厂类来创建对象，这个工厂类根据传入的参数来决定创建哪种对象。

```JavaScript
class Car {
  drive() {
    console.log('Driving a car');
  }
}

class Bike {
  ride() {
    console.log('Riding a bike');
  }
}

class VehicleFactory {
  static createVehicle(type) {
    if (type === 'car') {
      return new Car();
    } else if (type === 'bike') {
      return new Bike();
    } else {
      throw new Error('Invalid vehicle type');
    }
  }
}

const vehicle1 = VehicleFactory.createVehicle('car');
vehicle1.drive(); // Driving a car

const vehicle2 = VehicleFactory.createVehicle('bike');
vehicle2.ride(); // Riding a bike
```

### 工厂方法

工厂方法模式定义了一个创建对象的接口，但由子类决定要实例化的类是哪一个。工厂方法让类的实例化推迟到子类。

```JavaScript
class Car {
  drive() {
    console.log('Driving a car');
  }
}

class Bike {
  ride() {
    console.log('Riding a bike');
  }
}

class VehicleFactory {
  createVehicle() {
    throw new Error('This method must be overridden');
  }
}

class CarFactory extends VehicleFactory {
  createVehicle() {
    return new Car();
  }
}

class BikeFactory extends VehicleFactory {
  createVehicle() {
    return new Bike();
  }
}

const carFactory = new CarFactory();
const car = carFactory.createVehicle();
car.drive(); // Driving a car

const bikeFactory = new BikeFactory();
const bike = bikeFactory.createVehicle();
bike.ride(); // Riding a bike
```

### 抽象工厂

抽象工厂模式提供一个创建一系列相关或相互依赖对象的接口，而无需指定它们具体的类。

```JavaScript
class ProductA {
  constructor(name) {
    this.name = name;
  }
}

class ProductB {
  constructor(name) {
    this.name = name;
  }
}

class AbstractFactory {
  createProductA(name) {
    return new ProductA(name);
  }

  createProductB(name) {
    return new ProductB(name);
  }
}
```

### 单例

单例模式请转到 [详解单例模式](./Design-Patterns-Singleton.md)

### 原型

原型模式通过复制现有的实例来创建新的对象，而不是通过实例化类。

```JavaScript
class Prototype {
  constructor(name) {
    this.name = name;
  }

  clone() {
    return new Prototype(this.name);
  }
}
```

### 建造者

建造者模式将一个复杂对象的构建与它的表示分离，使得同样的构建过程可以创建不同的表示。

```JavaScript
class Product {
  constructor() {
    this.parts = [];
  }

  addPart(part) {
    this.parts.push(part);
  }
}

class Builder {
  constructor() {
    this.product = new Product();
  }

  buildPart(part) {
    this.product.addPart(part);
  }

  getResult() {
    return this.product;
  }
}
```

## 结构型模式

结构型模式关注于对象的组合，继而形成更大的结构。

### 适配器

适配器模式将一个类的接口转换成客户希望的另一个接口，使得原本由于接口不兼容而不能一起工作的类可以一起工作。

```JavaScript
class OldInterface {
  specificRequest() {
    return 'Old Interface';
  }
}

class Adapter {
  constructor(oldInterface) {
    this.oldInterface = oldInterface;
  }

  request() {
    return this.oldInterface.specificRequest();
  }
}
```

### 桥接

桥接模式将抽象部分与它的实现部分分离，使它们都可以独立地变化。

```JavaScript
class Abstraction {
  constructor(implementor) {
    this.implementor = implementor;
  }

  operation() {
    this.implementor.operationImpl();
  }
}

class ConcreteImplementor {
  operationImpl() {
    console.log('Concrete Implementor Operation');
  }
}
```

### 组合

组合模式将对象组合成树形结构以表示“部分-整体”的层次结构，使得用户对单个对象和组合对象的使用具有一致性。

```JavaScript
class Component {
  operation() {}
}

class Leaf extends Component {
  operation() {
    console.log('Leaf operation');
  }
}

class Composite extends Component {
  constructor() {
    super();
    this.children = [];
  }

  add(component) {
    this.children.push(component);
  }

  operation() {
    this.children.forEach((child) => child.operation());
  }
}
```

### 装饰

装饰模式动态地给对象添加一些额外的职责，就增加功能来说，装饰模式相比生成子类更为灵活。

```JavaScript
class Component {
  operation() {
    return 'Component';
  }
}

class Decorator extends Component {
  constructor(component) {
    super();
    this.component = component;
  }

  operation() {
    return `Decorator(${this.component.operation()})`;
  }
}
```

### 外观

外观模式为子系统中的一组接口提供一个一致的界面，此模式定义了一个高层接口，这个接口使得这一子系统更加容易使用。

```JavaScript
class SubsystemA {
  operation() {
    return 'SubsystemA';
  }
}

class SubsystemB {
  operation() {
    return 'SubsystemB';
  }
}

class Facade {
  constructor() {
    this.subsystemA = new SubsystemA();
    this.subsystemB = new SubsystemB();
  }

  operation() {
    return `${this.subsystemA.operation()} + ${this.subsystemB.operation()}`;
  }
}
```

### 享元

享元模式通过共享技术来有效地支持大量细粒度的对象。

```JavaScript
class Flyweight {
  constructor(sharedState) {
    this.sharedState = sharedState;
  }
}

class FlyweightFactory {
  constructor() {
    this.flyweights = {};
  }

  getFlyweight(sharedState) {
    if (!this.flyweights[sharedState]) {
      this.flyweights[sharedState] = new Flyweight(sharedState);
    }
    return this.flyweights[sharedState];
  }
}
```

### 代理

代理模式为其他对象提供一种代理以控制对这个对象的访问。

```JavaScript
class RealSubject {
  request() {
    return 'RealSubject';
  }
}

class Proxy {
  constructor(realSubject) {
    this.realSubject = realSubject;
  }

  request() {
    return this.realSubject.request();
  }
}
```

## 行为型模式

行为型模式关注对象之间的通信和职责分配。

### 责任链

责任链模式为请求创建了一个接收者对象的链，这些接收者依次处理请求，直到有一个接收者处理它为止。

```JavaScript
class Handler {
  setNext(handler) {
    this.nextHandler = handler;
    return handler;
  }

  handle(request) {
    if (this.nextHandler) {
      return this.nextHandler.handle(request);
    }
    return null;
  }
}
```

### 命令

命令模式将一个请求封装为一个对象，从而使您可以用不同的请求对客户进行参数化。

```JavaScript
class Command {
  execute() {}
}

class ConcreteCommand extends Command {
  constructor(receiver) {
    super();
    this.receiver = receiver;
  }

  execute() {
    this.receiver.action();
  }
}

class Receiver {
  action() {
    console.log('Receiver action');
  }
}
```

### 解释器

解释器模式为语言创建解释器，通常由语言的语法和语法分析来定义。

```JavaScript
class Context {
  constructor(input) {
    this.input = input;
    this.output = 0;
  }
}

class Expression {
  interpret(context) {}
}

class TerminalExpression extends Expression {
  interpret(context) {
    context.output += parseInt(context.input);
  }
}
```

### 迭代器

迭代器模式提供一种方法顺序访问一个聚合对象中的各个元素，而又不需要暴露该对象的内部表示。

```JavaScript
class Iterator {
  constructor(collection) {
    this.collection = collection;
    this.index = 0;
  }

  next() {
    return this.collection[this.index++];
  }

  hasNext() {
    return this.index < this.collection.length;
  }
}
```

### 中介者

中介者模式定义一个对象，该对象封装了一组对象如何交互。

```JavaScript
class Mediator {
  notify(sender, event) {}
}

class ConcreteMediator extends Mediator {
  constructor() {
    super();
    this.colleague1 = new Colleague1(this);
    this.colleague2 = new Colleague2(this);
  }

  notify(sender, event) {
    if (event === 'A') {
      this.colleague2.doC();
    } else if (event === 'B') {
      this.colleague1.doD();
    }
  }
}

class Colleague {
  constructor(mediator) {
    this.mediator = mediator;
  }
}

class Colleague1 extends Colleague {
  doA() {
    this.mediator.notify(this, 'A');
  }

  doD() {
    console.log('Colleague1 does D');
  }
}

class Colleague2 extends Colleague {
  doB() {
    this.mediator.notify(this, 'B');
  }

  doC() {
    console.log('Colleague2 does C');
  }
}
```

### 备忘录

备忘录模式在不破坏封装性的前提下，捕获一个对象的内部状态，并在该对象之外保存这个状态。

```JavaScript
class Memento {
  constructor(state) {
    this.state = state;
  }
}

class Originator {
  constructor() {
    this.state = '';
  }

  setState(state) {
    this.state = state;
  }

  saveStateToMemento() {
    return new Memento(this.state);
  }

  getStateFromMemento(memento) {
    this.state = memento.state;
  }
}

class Caretaker {
  constructor() {
    this.mementoList = [];
  }

  add(memento) {
    this.mementoList.push(memento);
  }

  get(index) {
    return this.mementoList[index];
  }
}
```

### 观察者

观察者模式定义了一种一对多的依赖关系，让多个观察者对象同时监听某一个主题对象。

```JavaScript
class Subject {
  constructor() {
    this.observers = [];
  }

  attach(observer) {
    this.observers.push(observer);
  }

  notify() {
    this.observers.forEach((observer) => observer.update());
  }
}

class Observer {
  update() {}
}
```

### 状态

状态模式允许对象在内部状态改变时改变它的行为，对象看起来好像修改了它的类。

```JavaScript
class Context {
  constructor(state) {
    this.state = state;
  }

  setState(state) {
    this.state = state;
  }

  request() {
    this.state.handle(this);
  }
}

class State {
  handle(context) {}
}

class ConcreteStateA extends State {
  handle(context) {
    console.log('State A handling request.');
    context.setState(new ConcreteStateB());
  }
}

class ConcreteStateB extends State {
  handle(context) {
    console.log('State B handling request.');
    context.setState(new ConcreteStateA());
  }
}
```

### 策略

策略模式定义了一系列算法，并将每一个算法封装起来，而且使它们还可以相互替换。

```JavaScript
class Context {
  constructor(strategy) {
    this.strategy = strategy;
  }

  setStrategy(strategy) {
    this.strategy = strategy;
  }

  executeStrategy() {
    this.strategy.execute();
  }
}

class Strategy {
  execute() {}
}

class ConcreteStrategyA extends Strategy {
  execute() {
    console.log('Strategy A executed.');
  }
}

class ConcreteStrategyB extends Strategy {
  execute() {
    console.log('Strategy B executed.');
  }
}
```

### 模板方法

模板方法模式定义了一个操作中的算法的骨架，而将一些步骤延迟到子类中。

```JavaScript
class AbstractClass {
  templateMethod() {
    this.primitiveOperation1();
    this.primitiveOperation2();
  }

  primitiveOperation1() {}
  primitiveOperation2() {}
}

class ConcreteClass extends AbstractClass {
  primitiveOperation1() {
    console.log('Primitive Operation 1');
  }

  primitiveOperation2() {
    console.log('Primitive Operation 2');
  }
}
```

### 访问者

访问者模式表示一个作用于某对象结构中的各元素的操作，它使你可以在不改变各元素的类的前提下定义作用于这些元素的新操作。

```JavaScript
class Visitor {
  visit(element) {}
}

class ConcreteVisitor extends Visitor {
  visit(element) {
    console.log('Visiting element');
  }
}

class Element {
  accept(visitor) {
    visitor.visit(this);
  }
}
```

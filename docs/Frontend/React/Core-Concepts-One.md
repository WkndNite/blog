---
date: 2025-01-17
tags:
  - React
  - 前端
descriptionHTML: '
<span style="color:var(--description-font-color);">开始构建你的 React 应用</span>
<pre style="background-color: #292b30; padding: 15px; border-radius: 10px;" class="shiki material-theme-palenight"><code>
    <span class="line"><span style="color:#FFCB6B;">npx</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">create-react-app</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">your-react-app-name</span></span>
</code>
</pre>'
cover: https://cdn-icons-png.flaticon.com/512/10303/10303238.png
---

# React 核心概念 （一）

## 项目搭建

```Bash
npx create-react-app my-app
cd my-app
npm start
```

## JSX

### 基础语法

JSX 是一种 JavaScript 的语法扩展。在 React 中，我们使用 JSX 来描述 UI 界面。

```JSX
function App() {
  return (
    <div>
      <h1>Hello, world!</h1>
    </div>
  );
}
```

也可以把 JSX 单独提取出来：

```JSX
function App() {
  const element = <h1>Hello, world!</h1>;
  return element;
}
```

官方建议用 `( )` 包裹 JSX：

```JSX
function App() {
  const list = (
    <ul>
      <li>Item 1</li>
      <li>Item 2</li>
    </ul>
  );
  return list;
}
```

:::info
JSX 看起来可能比较像模板语言，但事实上它完全是在 JavaScript 内部实现的。
:::

在使用 JSX 来描述页面的时候，有如下的一些规则：

- 根元素只能有一个，也就是说元素需要被包含在一个闭合标签中。
  > 如果不希望有多余标签单独用来闭合，可以使用空标签 `<>` 和 `</>`。
- JSX 中的表达式要用 `{ }` 包裹起来。
  > 注意区分表达式和语句。
- 属性值指定为字符串字面量，或者在属性值里使用表达式。
  > 如果属性值是表达式，那么需要用 `{ }` 包裹起来。
- 在设置元素样式的时候，需要使用 `style={ }` 并传入一个对象。
  > 注意，样式名需要使用驼峰命名法，例如 `font-size` 需要写成 `fontSize`。
- JSX 中 `class` 属性需要写成 `className`，因为 `class` 是 JavaScript 的保留字。
- 注释需要用 `{/* */}` 包裹起来。
- JSX 中可以书写数组，数组会被自动展开。

### createElement

Babel 会把 JSX 转译为一个名为 `React.createElement( )` 函数调用。

```JavaScript :no-line-numbers
React.createElement(type, [props], [...children]);
```

参数说明：

- `type`：创建的 React 元素类型，其值可以是标签名字符串或 React 组件。
- `props`：可选，React 元素的属性。
- `children`：可选，React 元素的子元素。

例如，如下的两种代码作用完全相同：

```JSX
const element1 = <h1 className="greeting">Hello, world!</h1>;

const element2 = React.createElement(
  'h1',
  { className: 'greeting' },
  'Hello, world!'
);
```

看到这里，就能明白以下输出结果的原因了：

```JSX
const element1 = <h1 className="greeting">Hello, world!</h1>;
console.table(element1);
```

![React.createElement()](https://blog-1328542955.cos.ap-shanghai.myqcloud.com/React.createElement.png)

之所以输出的并不是我们希望看到的结果，是因为最终输出的其实是经过 Babel 调用 `React.createElement( )` 函数生成的对象。这些对象（虚拟 DOM）被称为 React 元素，它们描述了应该在屏幕上看到的内容。

:::tip
可以看出，JSX 的本质其实就是 React.createElement 方法的语法糖。
:::

## 组件与事件绑定

### 组件

在 React 中，组件是构建用户界面的基本单位。组件可以是一个函数，也可以是一个类。函数组件返回 JSX，类组件需要继承自 `React.Component`。

:::code-group

```JSX [类组件.jsx]
class SomeComponent extends React.Component {
  render() {
    return <div>Hello, world!</div>;
  }
}
```

```JSX [函数组件.jsx]
function SomeComponent() {
  return <div>Hello, world!</div>;
}
```

:::

早期的函数组件被称为无状态组件，只用来展示 UI，没有自身数据以及复杂的逻辑。但是自从 React v16.8 后 Hooks 的出现，函数组件也可以拥有自己的状态了。这不仅仅是语法的改变，也代表着整个 React 编程思想的一种转变。

### 为组件绑定事件

在 React 中，绑定事件的写法如下：

```JSX :no-line-numbers
<button onClick={handleClick}>Click me</button>
```

在 React 中无法像 Vue 通过 `return false` 来阻止默认行为，需要使用 `e.preventDefault( )` 来阻止。

```JSX
function handleClick(e) {
  e.preventDefault();
}
```

:::warning
此处的 `e` 不是原生事件对象，而是 React 封装的事件对象，是一个合成事件。要是想拿到原生的事件对象，可以使用 `e.nativeEvent`。
:::

如果是类组件，那么事件处理函数需要写作一个类方法：

```JSX
class SomeComponent extends React.Component {
  handleClick(e) {
    e.preventDefault();
  }

  render() {
    return <button onClick={this.handleClick}>Click me</button>;
  }
}
```

### this 的指向

必须谨慎对待 JSX 回调函数中的 `this`。在 JavaScript 中，class 的方法默认不会绑定 `this`。如果你忘记绑定 `this.handleClick` 并把它传给 `onClick`，当你调用这个函数的时候 `this` 的值会是 `undefined`。

- 将事件处理函数修改为箭头函数。
- 将事件绑定函数修改为箭头函数。
- 使用 `bind` 方法绑定 `this`。

:::code-group

```JSX [不调整this]
class SomeComponent extends React.Component {
  handleClick() {
    console.log(this); // undefined
  }

  render() {
    return <button onClick={this.handleClick}>Click me</button>;
  }
}
```

```JSX [修改函数定义]
class SomeComponent extends React.Component {
  handleClick = () => {
    console.log(this);
  };

  render() {
    return <button onClick={this.handleClick}>Click me</button>;
  }
}
```

```JSX [修改回调]
class SomeComponent extends React.Component {
  handleClick() {
    console.log(this);
  }

  render() {
    return <button onClick={() => this.handleClick()}>Click me</button>;
  }
}
```

```JSX [bind - 1]
class SomeComponent extends React.Component {
  constructor(props) {
    super(props);
    this.handleClick = this.handleClick.bind(this);
  }

  handleClick() {
    console.log(this);
  }

  render() {
    return <button onClick={this.handleClick}>Click me</button>;
  }
}
```

```JSX [bind - 2]
class SomeComponent extends React.Component {
  handleClick() {
    console.log(this);
  }

  render() {
    return <button onClick={this.handleClick.bind(this)}>Click me</button>;
  }
}
```

:::

:::warning
this 的修正只针对类组件！
:::

### 向事件处理程序传递参数

在循环中，通常我们会为事件处理函数传递额外的参数。例如，若 id 是你要删除的那一行的 ID，以下两种方式都可以向事件处理函数传递参数。

```JSX
<button onClick={(e) => this.deleteRow(id, e)}>Delete Row</button>
<button onClick={this.deleteRow.bind(this, id)}>Delete Row</button>
```

上述两种方式是等价的，分别通过 `箭头函数` 和 `Function.prototype.bind` 来实现。

当然，上面的方式仍然是面向类组件的写法，对于函数组件可以这样写：

```JSX
function App() {
  const content = (
    <button className="greeting" onClick={handleClick('Hello, world!')}>
      Hello, world!
    </button>
  );
  function handleClick(str) {
    console.log(str);
  }
  return content;
}
export default App;
```

但是如此，会发现页面会默认输出一次 `Hello, world!`，同时点击按钮不会触发 `handleClick` 函数。这是因为 `handleClick` 函数在组件渲染时就被调用了，而不是在按钮被点击时才调用。

<mark>个人实验发现只有传参有这个现象，不用箭头函数但不传参不会如此！</mark>

所以，我们需要将 `handleClick` 函数包裹在一个箭头函数中，这样箭头函数中的代码只有当按钮被点击时才会执行。

```JSX
function App() {
  const content = (
    <button className="greeting" onClick={() => handleClick('Hello, world!')}>
      Hello, world!
    </button>
  );
  function handleClick(str) {
    console.log(str);
  }
  return content;
}
export default App;
```

## 组件状态与数据传递

### 组件状态

早期类组件被称之为有状态组件，就是因为在类组件中能够维护组件数据。

```JSX
class SomeComponent extends React.Component {
  constructor(props) {
    super(props);
    this.state = { count: 0 };
  }

  // 或者
  // state = { count: 0 };

  render() {
    return <div>{this.state.count}</div>;
  }
}
```

不应该直接去修改 state 的值，而是通过 setState 方法来修改。

```JSX
import React from 'react';
class Counter extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      count: 0
    };
  }

  increment = () => {
    this.setState({ count: this.state.count + 1 });
  };

  decrement = () => {
    this.setState({ count: this.state.count - 1 });
  };

  render() {
    return (
      <div>
        <h1>Counter</h1>
        <p>{this.state.count}</p>
        <button onClick={this.increment}>Increment</button>
        <button onClick={this.decrement}>Decrement</button>
      </div>
    );
  }
}
export default Counter;
```

:::warning
出于性能考虑，React 可能会将多个 `setState` 调用合并成一个调用。因为 setState `可能` 会异步更新，所以不要依赖他们的值来更新状态。对于异步的 setState，React 会将多次状态更新后，统一对 state 进行修改，然后再触发组件的重新 render。

如果改变状态的操作在 HTML 元素事件中，状态更新就是异步的；否则是同步的，比如在 setTimeout 中。

:::

:::::tip 最佳实践

- 把所有的 setState 当作是异步的。
- 永远不要信任 setState 调用之后的状态。
- 如果要使用改变之后的状态，比如在事件处理函数的异步更新状态过程里，需要使用回调函数（setState 的第二个参数）,当然也可以提前用一个变量存储。
  > 注意：回调函数拿到的状态是批处理完后的状态，而不是中间状态。可以参考下面的代码注释理解这句话。
- 如果新的状态要根据之前的状态进行运算，使用函数的方式改变状态（setState 的第一个参数可以是一个函数）。

::::details
:::code-group

```JSX [回调地狱.jsx] {5}
class Counter extends React.Component {
  // ...
  increment = () => {
    this.setState({ count: this.state.count + 1 }, () => {
      console.log(this.state.count); // 只加了 1
      this.setState({ count: this.state.count + 1 }, () => {
        this.setState({ count: this.state.count + 1 });
      });
    });
  };
  // ...
}
```

```JSX [函数式更新.jsx] {7}
class Counter extends React.Component {
  // ...
  increment = () => {
    this.setState(
      (prevState) => ({ count: prevState.count + 1 }),
      () => {
        console.log(this.state.count); // 加了 3
      }
    );
    this.setState((prevState) => ({ count: prevState.count + 1 }));
    this.setState((prevState) => ({ count: prevState.count + 1 }));
  };
  // ...
}
```

:::
::::
:::::

### props

和 Vue 一样，在 React 中组件会存在层级关系，那么自然会涉及到组件之间进行数据的传递。
如果是父组件向子组件传递数据，则使用 props。
如果是函数组件，props 作为函数的一个参数传入。如果是类组件，则需要在 constructor 中将 props 通过 super 传递给父类，然后通过 this.props 的方式来获取传入的值。

:::code-group

```JSX [类组件.jsx]
class Welcome extends React.Component {
  // constructor(props) {
  //     super(props);
  // }
  render() {
    return <h1>Hello, {this.props.name}</h1>;
  }
}

function App() {
  return (
    <div>
      <Welcome name="Sara" />
      <Welcome name="Cahal" />
      <Welcome name="Edite" />
    </div>
  );
}
```

```JSX [函数组件.jsx]
function Welcome(props) {
  return <h1>Hello, {props.name}</h1>;
}

function App() {
  return (
    <div>
      <Welcome name="Sara" />
      <Welcome name="Cahal" />
      <Welcome name="Edite" />
    </div>
  );
}
```

:::

:::warning

- 在类组件的代码里，你可能会收到提示，提醒你不需要写这个构造函数。这是 ESlint 的规则，ES2015 会默认提供构造函数，因此不必提供空的构造函数或仅仅是委托到父类的构造函数（ES6 就是 ES2015）。
- 传递的数据如果是数字或布尔值等类型，需要用 `{ }` 包裹起来，否则会默认解析为字符串。

:::

通过 `props.children` 可以实现类似 Vue 中插槽的效果。

:::code-group

```JSX [props.key 实现]
function Button(props) {
  return <button>{props.text}</button>;
}

function App() {
  return (
    <div>
      <Button text="Click me"></Button>
    </div>
  );
}
```

```JSX [props.children 实现]
function Button(props) {
  return <button>{props.children}</button>;
}

function App() {
  return (
    <div>
      <Button>Click me</Button>
    </div>
  );
}
```

:::

### props 验证

在 Vue 中，可以对传入的 props 设置默认值，以及验证 props 的有效性。在 React 中，针对 props 也可以做这些事。

类组件可以通过 `defaultProps` 或者 `static defaultProps` 来设置默认值，函数组件则直接在函数参数中设置默认值，或者传入 props 之后，通过解构赋值的方式设置默认值。

:::code-group

```JSX [类组件.jsx]
import React from 'react';

class Welcome extends React.Component {
  // static defaultProps = {
  //     name: 'Stranger',
  // };
  render() {
    return <h1>Hello, {this.props.name}</h1>;
  }
}

Welcome.defaultProps = {
  name: 'Stranger'
};

export default Welcome;
```

```JSX [函数组件.jsx]
// Before
function Heading({text}) {
  return <h1>{text}</h1>;
}
Heading.defaultProps = {
  text: 'Hello, world!',
};

// After
function Heading_1({text = 'Hello, world!'}: Props) {
  return <h1>{text}</h1>;
}
function Heading_2(props){
  const { text = 'Hello, world!' } = props;
  return <h1>{text}</h1>;
}
```

:::

关于 props 的类型检查，从 React v15.5 开始，移入到了 prop-types 库中。但是从 React v19 开始，官方移除了 propType 检查，建议迁移到 TypeScript 或其他类型检查解决方案。

```JSX
// Before
import PropTypes from 'prop-types';

function Heading({text}) {
  return <h1>{text}</h1>;
}
Heading.propTypes = {
  text: PropTypes.string,
};
// After
interface Props {
  text?: string;
}
```

### 状态提升

在 Vue 中，父传子通过 props，子传父通过自定义事件。在 React 中，如果子组件需要向父组件传递数据，同样是通过触发父组件传递给子组件的事件来进行传递。这在官网中被称为 `状态提升`。

:::code-group

```JSX [Welcome.jsx]
function Welcome(props) {
  function subClick() {
    props.parentClick('params from child');
  }
  return (
    <div>
      <h1>Welcome to React</h1>
      <button onClick={subClick}>Click me</button>
    </div>
  );
}

export default Welcome;
```

```JavaScript [App.js]
import Welcome from './components/Welcome';

function parentClick(params) {
  console.log('parent clicked');
  console.log('params received by parent:', params);
}

function App() {
  return (
    <div>
      <Welcome parentClick={parentClick} />
    </div>
  );
}

export default App;
```

:::

如以上的代码在点击按钮后，会输出如下结果：

```text
parent clicked
params received by parent: params from child
```

下面是一个简单的示例，不包括复杂情况，比如数字类型验证等。
:::code-group

```JavaScript [App.js]
import { useState } from 'react';
import Money from './components/Money';

function App() {
  const [dollar, setDollar] = useState('');
  const [rmb, setRmb] = useState('');

  function transform(type, value) {
    if (type === '美元') {
      setDollar(value);
      setRmb(value * 6.5);
    } else {
      setRmb(value);
      setDollar(value / 6.5);
    }
  }

  return (
    <>
      <Money type="美元" value={dollar} transform={transform} />
      <Money type="人民币" value={rmb} transform={transform} />
    </>
  );
}

export default App;
```

```JSX [Money.jsx]
function Money(props) {
  function handleChange(e) {
    props.transform(props.type, e.target.value);
  }
  return (
    <fieldset>
      <legend>{props.type}</legend>
      <input value={props.value} onChange={handleChange} />
    </fieldset>
  );
}
export default Money;
```

:::

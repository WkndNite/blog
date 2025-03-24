---
date: 2025-01-19
tags:
  - React
  - 前端
cover: https://cdn-icons-png.flaticon.com/512/10303/10303238.png
---

# React 核心概念（二）

## 表单

### 受控组件

无论是学习 Vue 还是 React，最重要的就是转换思想。这一步非常重要，往往也比较困难。

在以前 jQuery 时代，开发人员需要获取到 DOM 节点，然后进行操作。而在现代前端开发中，采用的是 MVVM 的模式。将视图和视图模型进行绑定，视图模型的改变，自然会引起视图改变。开发人员需要专注在视图模型上面。

因此，这里所谓的受控组件，本质上就是将表单中的控件和视图模型（状态）进行绑定，之后就是针对状态进行操作。受控组件与非受控组件的区别也就在于内容是由用户决定还是由 state 决定。

受控与非受控的选择可以参考 [这篇文章](https://goshacmd.com/controlled-vs-uncontrolled-inputs-react/)

::::details
:::code-group

```JSX [基本的受控组件]
import React, { Component } from 'react';

export default class App extends Component {
  state = {
    value: 'test content'
  };

  handleChange = (event) => {
    this.setState({ value: event.target.value });
  };

  handleClick = () => {
    console.log(this.state.value);
  };

  render() {
    return (
      <div>
        <input
          type="text"
          value={this.state.value}
          onChange={this.handleChange}
        />
        <button onClick={this.handleClick}>提交</button>
      </div>
    );
  }
}
```

```JSX [对用户输入内容进行控制]
import React, { Component } from 'react';

export default class App extends Component {
  state = {
    value1: '',
    value2: ''
  };

  handleChange = (event) => {
    const name = event.target.name;
    switch (name) {
      case 'one':
        this.setState({
          value1: event.target.value.toUpperCase()
        });
        break;
      case 'two':
        this.setState({
          value2: event.target.value.replace(/\D/g, '')
        });
        break;
      default:
        break;
    }
  };

  render() {
    return (
      <div>
        <input
          type="text"
          name="one"
          value={this.state.value1}
          onChange={this.handleChange}
          placeholder="自动转为大写"
        />
        <input
          type="text"
          name="two"
          value={this.state.value2}
          onChange={this.handleChange}
          placeholder="只能输入数字"
        />
      </div>
    );
  }
}
```

```JSX [文本域]
import React, { Component } from 'react';

export default class App extends Component {
  state = {
    value: ''
  };

  handleChange = (event) => {
    this.setState({ value: event.target.value });
  };

  render() {
    return (
      <div>
        {/* 原生的 HTML 内容应该书写在 textarea 标签之间 */}
        {/* React 方便起见将内容统一交给 value 绑定 */}
        <textarea
          name=""
          id=""
          value={this.state.value}
          onChange={this.handleChange}
          placeholder="Text here"
        />
      </div>
    );
  }
}
```

```JSX [单选框]
import React, { Component } from 'react';

export default class App extends Component {
  state = {
    selectedOption: null
  };

  handleChange = (index) => {
    this.setState({ selectedOption: index });
  };

  render() {
    const options = ['HTML', 'CSS', 'JavaScript', 'React', 'Vue'];

    return (
      <div>
        {options.map((item, index) => {
          return (
            <div key={index}>
              <input
                type="radio"
                name="skills"
                value={item}
                checked={this.state.selectedOption === index}
                onChange={() => this.handleChange(index)}
              />
              <label>{item}</label>
            </div>
          );
        })}
      </div>
    );
  }
}
```

```JSX [多选框]
import React, { Component } from 'react';

export default class App extends Component {
  state = {
    checkBoxes: [
      { content: 'HTML', checked: false },
      { content: 'CSS', checked: false },
      { content: 'JavaScript', checked: false },
      { content: 'React', checked: false },
      { content: 'Vue', checked: false }
    ]
  };

  handleChange = (index) => {
    const checkBoxes = [...this.state.checkBoxes];
    checkBoxes[index].checked = !checkBoxes[index].checked;
    this.setState({ checkBoxes });
  };

  render() {
    return (
      <div>
        {this.state.checkBoxes.map((item, index) => {
          return (
            <div key={index}>
              <input
                type="checkbox"
                value={item.content}
                checked={item.checked}
                onChange={() => this.handleChange(index)}
              />
              <label>{item.content}</label>
            </div>
          );
        })}
      </div>
    );
  }
}
```

```JSX [下拉列表]
import React, { Component } from 'react';

export default class App extends Component {
  state = {
    value: 'balance'
  };

  handleChange = (e) => {
    this.setState({ value: e.target.value });
  };

  render() {
    return (
      <div>
        <select value={this.state.value} onChange={this.handleChange}>
          <option value="income">Income</option>
          <option value="outcome">Outcome</option>
          <option value="balance">Balance</option>
        </select>
      </div>
    );
  }
}
```

:::
::::

### 非受控组件

大多数情况下，在 React 中推荐使用受控组件来对表单进行操作，这样能对表单控件的数据进行统一管理。

但是在某些特殊情况下，需要使用以前传统的 DOM 方案进行处理，此时替代的方案就是非受控组件。

::::details
:::code-group

```JSX [基本的非受控组件]
import React, { Component } from 'react';

export default class App extends Component {
  constructor() {
    super();
    this.inputRef = React.createRef();
  }

  handleClick = () => {
    console.log(this.inputRef.current.value);
  };

  render() {
    return (
      <div>
        <input type="text" ref={this.inputRef} defaultValue="1" />
        <button onClick={this.handleClick}>Click</button>
      </div>
    );
  }
}
```

```JSX [上传文件]
import React, { Component } from 'react';

export default class App extends Component {
  constructor() {
    super();
    this.uploadRef = React.createRef();
  }

  handleClick = () => {
    console.log(this.uploadRef.current.files[0].name);
  };

  render() {
    return (
      <div>
        <h1>File Upload</h1>
        <input type="file" ref={this.uploadRef} />
        <button onClick={this.handleClick}>Upload</button>
      </div>
    );
  }
}
```

:::
::::

:::tip

- 在表单元素里使用 `value` 必须要有 `onChange` 事件来处理变化，否则会出现警告。
- 使用了 `value` 的元素会被 React 视为受控组件，在非受控组件里使用默认值需要通过 `defaultValue` 属性来设置。

:::

## 生命周期

### 什么是生命周期

所谓生命周期，指的是组件从诞生到销毁会经历一系列的过程，该过程就叫做生命周期。

React 在组件的生命周期中提供了一系列钩子函数（类似于事件），可以让开发者在函数中注入代码，这些代码会在适当的时机运行。

**生命周期钩子函数是独属于类组件的东西**，但是自从 React v16.8 以来，整体已经开始以函数式组件为主，因此此处仅介绍一些常用的生命周期钩子函数。

完整的生命周期图谱，可以参考官网：[React 组件的生命周期图谱](https://projects.wojtekmaj.pl/react-lifecycle-methods-diagram/)

### 常用的生命周期钩子函数

1. constructor
   - 同一个组件对象只会创建一次。
   - 不要在第一次挂载到页面之前调用 setState，为了避免问题，构造函数中严禁使用 setState。
2. render
   - render 是真个类组件中必须要书写的生命周期方法。
   - 返回一个虚拟 DOM，会被挂载到虚拟 DOM 树中，最终渲染到页面的真实 DOM 中。
   - render 可能不止运行一次，只要需要重新渲染，就会重新运行。
   - 严禁使用 setState，因为可能会导致无限递归渲染。
3. componentDidMount
   - 只会执行一次。
   - 可以使用 setState。
   - 通常情况下，会将网络请求、启动计时器等一开始需要的操作，书写到该函数中。
4. componentWillUnmount
   - 通常在该函数中销毁一些组件依赖的资源，比如计时器。

## Hooks

### Hooks 基本介绍

> Hook 是 React 16.8 引入的新特性，它可以让你在不编写 class 的情况下使用 state 以及其他的 React 特性。

Hooks 的出现，首先解决了以下问题：

- 告别令人疑惑的生命周期，相同的代码可能会在不同的生命周期出现。

```JSX [App.jsx]
import React, { Component } from 'react';

export default class App extends Component {
  state = {
    count: 0
  };

  increment = () => {
    this.setState({
      count: this.state.count + 1
    });
  };

  componentDidMount() {
    document.title = `Count: ${this.state.count}`;
  }

  componentDidUpdate() {
    document.title = `Count: ${this.state.count}`;
  }

  render() {
    return (
      <div>
        <h1>{this.state.count}</h1>
        <button onClick={this.increment}>+1</button>
      </div>
    );
  }
}
```

- 告别类组件中烦人的 `this`。在类组件中，会存在 `this` 指向的问题，不能直接通过 `this` 获取组件实例，需要修改 `this` 的指向。
- 告别繁重的类组件，回归前端程序员熟悉的函数编程。

另外，Hooks 的出现，还有一个更加重要的信号，那就是整个 React 思想上的转变。从 `面向对象` 到 `函数式编程`。这是编程范式上面的转变——从 `命令式` 到 `声明式`。

:::tip 编程范式

- 命令式编程，就是告诉计算机如何去做，需要给计算机指定每一个步骤，包括 `面向过程` 和 `面向对象`。
- 声明式编程，就是告诉计算机你想要做什么，剩下的步骤由计算机来完成，包括 `函数式编程` 和 HTML、CSS、SQL 等 `DSL（领域特定语言）`。
- 声明式编程是随着命令式编程同期出现的，只是早期的声明式编程不够强大，因此命令式编程大行其道，而现代的声明式编程已经非常强大，可以解决很多命令式编程无法解决的问题。
  :::

:::info
因此，当学习 Hooks 的时候，会发现突然多出了一些以前不熟悉的概念，比如 `纯函数`、`副作用`、`函数柯里化`、`高阶函数` 等。
:::

Hooks 就是 JavaScript 函数，但是使用它们会有两个额外的规则：

1. 只能在 `函数最外层` 调用 Hook。不要在循环、条件判断或者子函数中调用。
2. 只能在 React 的 `函数组件` 中调用 Hook。不要在其他 JavaScript 函数中调用。

### useState 和 useEffect

React 中内置了一些实用的 Hook，并且随着 React 版本的更新，Hook 的数量还在持续增加当中。入门阶段，我们掌握两个最常用的 Hook 就足够了。一个是为函数组件添加状态的 `useState`，另一个是处理函数副作用的 `useEffect`。

1. useState

   :::code-group

   ```JSX [基本使用]
   import React, { useState } from 'react';

   export default function App() {
     const [count, setCount] = useState(0);

     const handleClick = () => {
       setCount(count + 1);
     };

     return (
       <div>
         <h1>{count}</h1>
         <button onClick={handleClick}>+1</button>
       </div>
     );
   }
   ```

   ```JSX [声明多个状态]
   import React, { useState } from 'react';

   export default function App() {
     const [name, setName] = useState('John');
     const [age, setAge] = useState(30);
     const [email, setEmail] = useState('john@example.com');

     const handleClick = () => {
       setName('Doe');
       setAge(40);
       setEmail('doe@example.com');
     };

     return (
       <div>
         <h1>Hello {name}</h1>
         <p>Age: {age}</p>
         <p>Email: {email}</p>
         <button onClick={handleClick}>Click me</button>
       </div>
     );
   }
   ```

   :::

2. useEffect

   - 纯函数：纯函数是指在函数的执行过程中，不会对程序的状态进行任何改变，也不会对外部环境产生任何副作用，即只依赖于其输入参数，而不依赖于任何外部变量或状态的函数。比如 `const square = (x) => x * x`。
   - 副作用：副作用是指在函数执行过程中，除了返回值之外，还对外部环境产生了影响，这些影响是不可控、不可预测的。比如 `console.log`、`document.write`、`fetch` 等。

   > 函数式编程不是不需要副作用，而是需要将副作用控制在可控范围内，比如通过 `useEffect` 来处理副作用。

   :::code-group

   ```JSX [基本使用]
   import React, { useState, useEffect } from 'react';

   export default function App() {
     const [count, setCount] = useState(0);

     useEffect(() => {
       document.title = `Count: ${count}`;
     });

     return (
       <div>
         <h1>Counter:{count}</h1>
         <button onClick={() => setCount(count + 1)}>Increment</button>
       </div>
     );
   }
   ```

   ```JSX [执行清理工作] {13,14}
   import React, { useState, useEffect } from 'react';

   export default function App() {
     const [count, setCount] = useState(0);

     // 每次执行都会产生新的定时器 所以点击按钮会加速
     // useEffect(() => {
     //     setInterval(() => {
     //         console.log('hello');
     //     }, 1000);
     // });

     // Solution: useEffect 会返回一个清理函数
     // 该函数会在下一次渲染之后但是执行 useEffect 之前执行
     useEffect(() => {
       const timer = setInterval(() => {
         console.log('hello');
       }, 1000);

       return () => {
         clearInterval(timer);
       };
     });

     return (
       <div>
         <h1>Counter:{count}</h1>
         <button onClick={() => setCount(count + 1)}>Increment</button>
       </div>
     );
   }
   ```

   ```JSX [无依赖-数据请求]
   import React, { useState, useEffect } from 'react';

   function mockApi() {
     return new Promise((resolve) => {
       setTimeout(() => {
         resolve();
       }, 500);
     });
   }

   export default function App() {
     const [count, setCount] = useState(0);

     useEffect(() => {
       mockApi().then(() => {
         setCount(count + 1);
         console.log('API call done');
       });
     });

     return (
       <div>
         <h1>Counter:{count}</h1>
         <button onClick={() => setCount(count + 1)}>Increment</button>
       </div>
     );
   }
   ```

   ```JSX [无依赖-多状态]
   import React, { useState, useEffect } from 'react';

   export default function App() {
     const [count1, setCount1] = useState(0);
     const [count2, setCount2] = useState(0);
     const [count3, setCount3] = useState(0);

     useEffect(() => {
       console.log('useEffect');
     });

     return (
       <div>
         <button onClick={() => setCount1(count1 + 1)}>
           Count 1: {count1}
         </button>
         <button onClick={() => setCount2(count2 + 1)}>
           Count 2: {count2}
         </button>
         <button onClick={() => setCount3(count3 + 1)}>
           Count 3: {count3}
         </button>
       </div>
     );
   }
   ```

   ```JSX [依赖数组] {11,12}
   import React, { useState, useEffect } from 'react';

   export default function App() {
     const [count1, setCount1] = useState(0);
     const [count2, setCount2] = useState(0);
     const [count3, setCount3] = useState(0);

     useEffect(() => {
       console.log('useEffect');
     }, [count1]);
     // 上面这一行可以传入一个依赖数组，当依赖数组中的值发生变化时，useEffect 才会执行
     // 如果只想要开始默认执行一次，可以传入一个空数组

     return (
       <div>
         <button onClick={() => setCount1(count1 + 1)}>
           Count 1: {count1}
         </button>
         <button onClick={() => setCount2(count2 + 1)}>
           Count 2: {count2}
         </button>
         <button onClick={() => setCount3(count3 + 1)}>
           Count 3: {count3}
         </button>
       </div>
     );
   }
   ```

   :::

### 自定义 Hook

除了官方内置的 Hook，我们还可以自定义 Hook，自定义 Hook 的本质其实就是函数。但是和普通函数还是有一些区别，主要体现在以下两个点：

- 自定义 Hook 能够调用诸如 `useState`、`useEffect` 等内置 Hook，普通函数则不能。由此可以通过内置的 Hooks 获得 Fiber 的访问方式，可以实现在组件级别存储数据的方案等。
- 自定义 Hooks 需要以 use 开头，普通函数则没有这个限制。使用 use 开头并不是一个语法或者一个强制性的方案，更像是一个约定。

:::code-group

```JSX [useMyBook.jsx]
import React, { useState } from 'react';

export default function useMyBook() {
  const [bookName, setBookName] = useState('React learning');
  return { bookName, setBookName };
}
```

```JSX [App.jsx]
import useMyBook from './useMyBook';

export default function App() {
  const { bookName, setBookName } = useMyBook();

  return (
    <div>
      <h1>Book name: {bookName}</h1>
      <button onClick={() => setBookName('React in Action')}>
        Change book name
      </button>
    </div>
  );
}
```

:::

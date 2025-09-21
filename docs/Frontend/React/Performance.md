---
date: 2025-03-08 14:50:48
tags:
  - React
  - 前端
---

# 组件渲染时的性能优化

本文我们将会探讨，组件在渲染时如何优化渲染性能的问题。

涉及到的内容包括：

shouldComponentUpdate、PureComponent、React.memo、useMemo、use Callback 等。

## shouldComponentUpdate 与 PureComponent

shouldComponentUpdate 与 PureComponent 都与类组件相关，所以下面以类组件来示例。先来看如下示例：

```JSX
import React, { Component } from 'react';

export default class App extends Component {
  state = {
    counter: 1
  };

  render() {
    console.log('App render!');
    return (
      <div>
        App
        <button
          onClick={() => {
            this.setState({
              counter: 1
            });
          }}
        >
          +1
        </button>
        <div>counter : {this.state.counter}</div>
      </div>
    );
  }
}
```

如上，我们所依赖的数据状态一直都不会改变，然而在每次点击按钮之后，页面都会重新渲染——这是不必要的。

下面，我们先来看一下 shouldComponentUpdate 和 PureComponent 各自代码应该如何书写：

:::code-group

```JSX [shouldComponentUpdate]
import React, { Component } from 'react';

function ObjectEqual(obj1, obj2) {
  for (let prop in obj1) {
    if (!Object.is(obj1[prop], obj2[prop])) {
      return false;
    }
  }
  return true;
}

export default class App extends Component {
  state = {
    counter: 1
  };

  shouldComponentUpdate(nextProps, nextState) {
    if (
      ObjectEqual(this.props, nextProps) &&
      ObjectEqual(this.state, nextState)
    ) {
      return false;
    }
    return true;
  }

  render() {
    console.log('App render!');
    return (
      <div>
        App
        <button
          onClick={() => {
            this.setState({
              counter: this.state.counter + 1
            });
          }}
        >
          +1
        </button>
        <button
          onClick={() => {
            this.setState({
              counter: 1
            });
          }}
        >
          forever 1
        </button>
        <div>counter : {this.state.counter}</div>
      </div>
    );
  }
}
```

```JSX [PureComponent]
import React, { PureComponent } from 'react';

export default class App extends PureComponent {
  state = {
    counter: 1
  };

  render() {
    console.log('App render!');
    return (
      <div>
        App
        <button
          onClick={() => {
            this.setState({
              counter: this.state.counter + 1
            });
          }}
        >
          +1
        </button>
        <button
          onClick={() => {
            this.setState({
              counter: 1
            });
          }}
        >
          forever 1
        </button>
        <div>counter : {this.state.counter}</div>
      </div>
    );
  }
}
```

:::

效果如下:
<VideoPlayer platform="local" src="https://blog-1328542955.cos.ap-shanghai.myqcloud.com/React%20App%20-%20Google%20Chrome%202025-03-08%2015-14-35.mp4" />

:::warning
React.PureComponent 中的 shouldComponentUpdate 方法是浅比较，如果对象中包含复杂的数据结构，可能会出现无法正确判断的情况，产生错误的比对结果。

仅在你的 props 和 state 较为简单时，才应该使用 React.PureComponent。或者在深层数据结构发生变化时调用 `forceUpdate` 强制更新。你也可以考虑使用 `immutable` 对象加速嵌套数据的比较。
:::

下面展示了一个深层数据结构发生变化的例子：

```JSX
import React, { PureComponent } from 'react';

export default class App extends PureComponent {
  state = {
    list: [1, 2, 3]
  };

  render() {
    console.log('App render!');
    return (
      <div>
        App
        <button
          onClick={() => {
            this.state.list.push(this.state.list.length + 1);
            this.setState({ list: this.state.list });
          }}
        >
          push
        </button>
        <ul>
          {this.state.list.map((item) => (
            <li key={item}>{item}</li>
          ))}
        </ul>
      </div>
    );
  }
}
```

效果如下：

<VideoPlayer platform="local" src="https://blog-1328542955.cos.ap-shanghai.myqcloud.com/React%20App%20-%20Google%20Chrome%202025-03-08%2015-38-15.mp4" />

修改以上代码也可以达到你期望的效果：
:::code-group

```JSX [Solution 1]
import React, { PureComponent } from 'react';

export default class App extends PureComponent {
  state = {
    list: [1, 2, 3]
  };

  render() {
    console.log('App render!');
    return (
      <div>
        App
        <button
          onClick={() => {
            this.setState({
              list: [...this.state.list, this.state.list.length + 1]
            });
          }}
        >
          push
        </button>
        <ul>
          {this.state.list.map((item) => (
            <li key={item}>{item}</li>
          ))}
        </ul>
      </div>
    );
  }
}
```

```JSX [Solution 2]
import React, { Component } from 'react';

export default class App extends Component {
  state = {
    list: [1, 2, 3]
  };

  render() {
    console.log('App render!');
    return (
      <div>
        App
        <button
          onClick={() => {
            this.state.list.push(this.state.list.length + 1);
            this.setState({ list: this.state.list });
          }}
        >
          push
        </button>
        <ul>
          {this.state.list.map((item) => (
            <li key={item}>{item}</li>
          ))}
        </ul>
      </div>
    );
  }
}
```

:::

如上，我们可以得出结论——可以通过不修改原有状态，而是返回新状态或者使用 React.Component 解决该问题。

效果如下：

<VideoPlayer platform="local" src="https://blog-1328542955.cos.ap-shanghai.myqcloud.com/React%20App%20-%20Google%20Chrome%202025-03-08%2015-43-32.mp4" />

## React.memo

shouldComponentUpdate 和 PureComponent 主要是优化类组件的渲染性能，但如果是函数组件该怎么办呢？

在 React 中，为我们提供了 React.memo 来优化函数组件的渲染性能。

```JSX
import React, { useState } from 'react';

function App() {
  const [counter, setCounter] = useState(1);
  console.log('App render');
  return (
    <div>
      <button onClick={() => setCounter(1)}>Click me</button>
      <h1>{counter}</h1>
    </div>
  );
}

export default App;
```

我们还是从上面的例子入手，如果改成函数组件的话，可以得到以下效果：

<VideoPlayer platform="local" src="https://blog-1328542955.cos.ap-shanghai.myqcloud.com/React%20App%20-%20Google%20Chrome%202025-03-08%2015-53-41.mp4" />

由此，我们可以得出结论，函数组件的状态不变不会像类组件一样触发重新渲染。而这，和 Fiber 的钩子执行时机有关，此处不做讨论。

然而，如果我们在 App 组件中添加一个子组件，props 不改变的话，也会像上面这样保持原状而不是重新渲染吗？

:::code-group

```JSX [App.jsx]
import React, { useState } from 'react';
import ChildCom from './ChildCom';

function App() {
  const [counter1, setCounter1] = useState(1);
  const [counter2, setCounter2] = useState(1);
  console.log('App render');
  return (
    <div>
      <button onClick={() => setCounter1(counter1 + 1)}>Click me</button>
      <h1>self counter: {counter1}</h1>
      <ChildCom counter={counter2} setCounter={setCounter2} />
    </div>
  );
}

export default App;
```

```JSX [ChildCom.jsx]
import React from 'react';

function ChildCom(props) {
  console.log('ChildCom render');
  return (
    <div>
      <button
        onClick={() => {
          props.setCounter(props.counter + 1);
        }}
      >
        Click me
      </button>
      <h1>child counter: {props.counter}</h1>
    </div>
  );
}

export default ChildCom;
```

:::

运行代码，我们可以发现即使只改动父组件状态，子组件也会重新渲染：

<VideoPlayer platform="local" src="https://blog-1328542955.cos.ap-shanghai.myqcloud.com/React%20App%20-%20Google%20Chrome%202025-03-08%2016-02-12.mp4" />

React.memo 是一个高阶组件，可以在 props 不变的情况下阻止组件重新渲染。

```JSX
import React from 'react';

function ChildCom(props) {
  console.log('ChildCom render');
  return (
    <div>
      <button
        onClick={() => {
          props.setCounter(props.counter + 1);
        }}
      >
        Click me
      </button>
      <h1>child counter: {props.counter}</h1>
    </div>
  );
}

export default React.memo(ChildCom);
```

终于，我们看到了期望的结果：

<VideoPlayer platform="local" src="https://blog-1328542955.cos.ap-shanghai.myqcloud.com/React%20App%20-%20Google%20Chrome%202025-03-08%2016-06-06.mp4" />

:::warning
React.memo 仅对 props 进行浅比较，如果 props 中有复杂对象，那么浅比较可能无法正确判断 props 是否改变。此处不在举例，情况与上文提及类组件浅比较类似。

可以通过上文提及到的解决方案做相应处理。
:::

:::info
实际上，React.memo 的源码就是返回一个 `PureComponent` 组件：

```JSX
function memo(FuncComp) {
  return class Memo extends PureComponent {
    render() {
      return <>{FuncComp(this.props)}</>;
    }
  };
}
```

:::

此外，在使用 React.memo 时，我们还可以传入第二个参数，用于自定义比较函数：

```JSX
function MyComponent(props) {
  /* 使用 props 渲染 */
}
function areEqual(prevProps, nextProps) {
  /*
  如果把 nextProps 传入 render 方法的返回结果与
  将 prevProps 传入 render 方法的返回结果一致则返回 true，
  否则返回 false
  */
}
export default React.memo(MyComponent, areEqual);
```

## useCallback

正常情况下，如果组件各自内部维护自己的数据，那么组件更新的时候相互并不会影响，例如：

:::code-group

```CSS [App.module.css]
.container {
  width: 500px;
  height: 200px;
  border: 1px solid;
  margin: 0 auto;
}

.btnContainer {
  text-align: center;
}

.childComContainer {
  display: flex;
  justify-content: space-between;
}
```

```JSX [ChildCom1.jsx]
import { useState } from 'react';
function ChildCom1() {
  const [counter, setCounter] = useState(0);
  console.log('ChildCom1 渲染了');
  return (
    <div
      style={{
        width: '200px',
        height: '100px',
        border: '1px solid'
      }}
    >
      ChildCom1
      <div>{counter}</div>
      <button onClick={() => setCounter(counter + 1)}>+1</button>
    </div>
  );
}

export default ChildCom1;
```

```JSX [ChildCom2.jsx]
import { useState } from 'react';
function ChildCom2() {
  const [counter, setCounter] = useState(0);
  console.log('ChildCom2 渲染了');
  return (
    <div
      style={{
        width: '200px',
        height: '100px',
        border: '1px solid'
      }}
    >
      ChildCom2
      <div>{counter}</div>
      <button onClick={() => setCounter(counter + 1)}>+1</button>
    </div>
  );
}

export default ChildCom2;
```

```JSX [App.jsx]
import { useState } from 'react';
import ChildCom1 from './ChildCom1';
import ChildCom2 from './ChildCom2';

import styles from './App.module.css';

function App() {
  const [counter, setCounter] = useState(0);
  console.log('App渲染了');
  return (
    <div className={styles.container}>
      <div className={styles.btnContainer}>
        <div>{counter}</div>
        <button onClick={() => setCounter(counter + 1)}>+1</button>
      </div>

      <div className={styles.childComContainer}>
        <ChildCom1 />
        <ChildCom2 />
      </div>
    </div>
  );
}

export default App;
```

:::

此时在我们的应用中，**各个组件内部维护了自身的数据，组件内部数据的更新并不会影响到同级组件和祖级组件**。效果如下：

![效果图](https://blog-1328542955.cos.ap-shanghai.myqcloud.com/PixPin_2025-03-08_16-46-25.png)

接着，我们做出如下修改：

:::code-group

```JSX [App.jsx]
import { useState } from 'react';
import ChildCom1 from './ChildCom1';
import ChildCom2 from './ChildCom2';

import styles from './App.module.css';
function App() {
  const [counter, setCounter] = useState(0);
  const [counter1, setCounter1] = useState(0);
  const [counter2, setCounter2] = useState(0);
  console.log('App渲染了');
  return (
    <div className={styles.container}>
      <div className={styles.btnContainer}>
        <div>{counter}</div>
        <button onClick={() => setCounter(counter + 1)}>+1</button>
      </div>

      <div className={styles.childComContainer}>
        <ChildCom1 counter={counter1} setCounter={setCounter1} />
        <ChildCom2 counter={counter2} setCounter={setCounter2} />
      </div>
    </div>
  );
}

export default App;
```

```JSX [ChildCom1.jsx]
function ChildCom1(props) {
  console.log('ChildCom1 渲染了');
  return (
    <div
      style={{
        width: '200px',
        height: '100px',
        border: '1px solid'
      }}
    >
      ChildCom1
      <div>{props.counter}</div>
      <button onClick={() => props.setCounter(props.counter + 1)}>+1</button>
    </div>
  );
}

export default ChildCom1;
```

```JSX [ChildCom2.jsx]
function ChildCom2(props) {
  console.log('ChildCom2 渲染了');
  return (
    <div
      style={{
        width: '200px',
        height: '100px',
        border: '1px solid'
      }}
    >
      ChildCom2
      <div>{props.counter}</div>
      <button onClick={() => props.setCounter(props.counter + 1)}>+1</button>
    </div>
  );
}

export default ChildCom2;
```

:::

此时，我们会发现无论点击哪一个按钮都会触发三个组件的重新渲染。简单来说，尽管子组件状态不变，我们仅仅修改父组件，也会引起子组件重新渲染。

首先，我们就会想到 React.memo 来阻止一些重新渲染，代码如下：

```JSX
import React from 'react';
function ChildCom1(props) {
  console.log('ChildCom1 渲染了');
  return (
    <div
      style={{
        width: '200px',
        height: '100px',
        border: '1px solid'
      }}
    >
      ChildCom1
      <div>{props.counter}</div>
      <button onClick={() => props.setCounter(props.counter + 1)}>+1</button>
    </div>
  );
}

export default React.memo(ChildCom1);
```

但是假设此时 App 根组件还有一个单独的函数传入，那就不那么好使了。

:::code-group

```JSX [App.jsx]
import { useState } from 'react';
import ChildCom1 from './ChildCom1';
import ChildCom2 from './ChildCom2';

import styles from './App.module.css';
function App() {
  const [counter, setCounter] = useState(0);
  const [counter1, setCounter1] = useState(0);
  const [counter2, setCounter2] = useState(0);
  console.log('App渲染了');

  function test() {
    console.log('test');
  }

  return (
    <div className={styles.container}>
      <div className={styles.btnContainer}>
        <div>{counter}</div>
        <button onClick={() => setCounter(counter + 1)}>+1</button>
      </div>

      <div className={styles.childComContainer}>
        <ChildCom1 counter={counter1} setCounter={setCounter1} test={test} />
        <ChildCom2 counter={counter2} setCounter={setCounter2} test={test} />
      </div>
    </div>
  );
}

export default App;
```

```JSX [ChildCom1.jsx]
import React from 'react';
function ChildCom1(props) {
  console.log('ChildCom1 渲染了');
  return (
    <div
      style={{
        width: '200px',
        height: '100px',
        border: '1px solid'
      }}
    >
      ChildCom1
      <div>{props.counter}</div>
      <button onClick={() => props.setCounter(props.counter + 1)}>+1</button>
      <button onClick={() => props.test()}>test</button>
    </div>
  );
}

export default React.memo(ChildCom1);
```

:::

运行如上代码，我们会发现这样一个奇怪的效果：

![效果](https://blog-1328542955.cos.ap-shanghai.myqcloud.com/PixPin_2025-03-08_16-56-08.png)

原因是此时再去点击增加按钮，父组件会重新渲染，但是生成了的 test 函数并非之前的，进而导致传递的 props 也会发生改变。

此时，就需要用到 `useCallback` 来缓存函数，代码如下：

```JSX
import React, { useState, useCallback } from 'react';
import ChildCom1 from './ChildCom1';
import ChildCom2 from './ChildCom2';

import styles from './App.module.css';

function App() {
  const [counter, setCounter] = useState(1);
  const [counter1, setCounter1] = useState(1);
  const [counter2, setCounter2] = useState(1);

  console.log('App组件渲染了');

  const newTest = useCallback(function test() {
    console.log('test触发了');
  }, []);

  return (
    <div className={styles.container}>
      <div className={styles.btnContainer}>
        <div>counter:{counter}</div>
        <button onClick={() => setCounter(counter + 1)}>+1</button>
      </div>

      <div className={styles.childComContainer}>
        <ChildCom1 counter={counter1} setCounter={setCounter1} test={newTest} />
        <ChildCom2 counter={counter2} setCounter={setCounter2} test={newTest} />
      </div>
    </div>
  );
}

export default App;
```

此时，就达到了我们想要的结果——点击父组件的按钮，子组件不会重新渲染；点击某个子组件的按钮，另一个子组件不会重新渲染。

记住：**useCallback 主要就是对函数进行缓存**

## useMemo

```JSX :no-line-numbers
const memoizedValue = useMemo(() => computeExpensiveValue(a, b), [a, b]);
```

主要用于返回一个 memoized 值。

文档地址：<https://zh-hans.reactjs.org/docs/hooks-reference.html#usememo>

某些时候，组件中某些值需要根据状态进行一个二次计算（类似于 Vue 中的计算属性），由于函数组件一旦重新渲染，就会重新执行整个函数，这就导致之前的二次计算也会重新执行一次，例如：

```JSX
import React, { useState } from 'react';

function App() {
  const [count, setCount] = useState(1);
  const [val, setValue] = useState('');

  console.log('App 渲染了');

  function getNum() {
    console.log('调用了！！！');
    return count + 100;
  }

  return (
    <div>
      <h4>总和：{getNum()}</h4>
      <div>
        <button onClick={() => setCount(count + 1)}>+1</button>
        {/* 文本框的输入会导致整个组件重新渲染 */}
        <input value={val} onChange={(event) => setValue(event.target.value)} />
      </div>
    </div>
  );
}

export default App;
```

我们可以发现，尽管总和不变，只是输入文本框内容，也会引起页面的重新渲染（包括总和函数重新调用）。

![useMemo](https://blog-1328542955.cos.ap-shanghai.myqcloud.com/PixPin_2025-03-08_17-10-50.png)

此时，我们就可以使用 `useMemo` 来缓存这个值，代码如下：

```JSX
import React, { useState, useMemo } from 'react';

function App() {
  const [count, setCount] = useState(1);
  const [val, setValue] = useState('');

  console.log('App 渲染了');

  const getNum = useMemo(() => {
    console.log('调用了！！！！！');
    return count + 100;
  }, [count]);

  return (
    <div>
      <h4>总和：{getNum}</h4>
      <div>
        <button onClick={() => setCount(count + 1)}>+1</button>
        {/* 文本框的输入会导致整个组件重新渲染 */}
        <input value={val} onChange={(event) => setValue(event.target.value)} />
      </div>
    </div>
  );
}

export default App;
```

在上面的示例中，我们使用了 useMemo 来缓存二次计算的值，并设置了依赖项 count，只有在 count 发生改变时，才会重新执行二次计算。

> 面试题：useMemo 和 useCallback 的区别及使用场景?

:::tip 参考答案

useMemo 和 useCallback 接收的参数都是一样，第一个参数为回调，第二个参数为要依赖的数据。

**共同作用**：仅仅依赖数据发生变化，才会去更新缓存。

**两者区别**：

1. useMemo 计算结果是 return 回来的值, 主要用于缓存计算结果的值。应用场景如：需要进行二次计算的状态
2. useCallback 计算结果是函数, 主要用于缓存函数，应用场景如: 需要缓存的函数，因为函数式组件每次任何一个 state 的变化，整个组件都会被重新刷新，一些函数是没有必要被重新刷新的，此时就应该缓存起来，提高性能，和减少资源浪费。

:::

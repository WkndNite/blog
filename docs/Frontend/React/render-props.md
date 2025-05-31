---
date: 2025-03-07 11:53:55
tags:
  - React
  - 前端
---

# Render Props

在 React 中，代码复用的最基本单位就是组件，但是如果组件中也出现了重复的代码，该怎么做呢？

那么我们需要通过某种方式将代码中的公共部分抽取出来，这些公共的部分就被称之为 **横切关注点（Cross-Cutting Concerns）**。

在 React 中，常见有两种方式来进行横切关注点的抽离：高阶组件（HOC）和 Render Props。

Render Props 实际上本身并非什么新语法，而是指一种在 React 组件之间使用一个值为函数的 props 的共享代码的简单技术。

有关 Render Props 需要掌握以下两点：

- 如何使用？
- 什么时候使用？

## 如何使用 Render Props

我们先来看一个示例：

:::code-group

```JSX [ChildCom1.jsx]
import React, { useState } from 'react';

function ChildCom1() {
  const mouseMoveHandler = (e) => {
    setPoints({ x: e.clientX, y: e.clientY });
  };
  const [points, setPoints] = useState({ x: 0, y: 0 });

  return (
    <div
      style={{
        width: '400px',
        height: '400px',
        backgroundColor: 'lightblue'
      }}
      onMouseMove={mouseMoveHandler}
    >
      <h1>
        mouse : {points.x} - {points.y}{' '}
      </h1>
    </div>
  );
}

export default ChildCom1;
```

```JSX [ChildCom2.jsx]
import React, { useState } from 'react';

function ChildCom2() {
  const [points, setPoints] = useState({
    x: 0,
    y: 0
  });
  const mouseMoveHandler = (e) => {
    setPoints({
      x: e.clientX,
      y: e.clientY
    });
  };
  return (
    <div
      style={{
        width: '400px',
        height: '400px',
        backgroundColor: 'lightgreen',
        position: 'relative',
        overflow: 'hidden'
      }}
      onMouseMove={mouseMoveHandler}
    >
      <h1>ChildCom2</h1>
      <div
        style={{
          width: '15px',
          height: '15px',
          backgroundColor: 'red',
          position: 'absolute',
          left: points.x - 450 - 15,
          top: points.y - 15,
          borderRadius: '50%'
        }}
      ></div>
    </div>
  );
}

export default ChildCom2;
```

```JSX [App.jsx]
import React from 'react';
import ChildCom1 from './components/ChildCom1';
import ChildCom2 from './components/ChildCom2';

function App() {
  return (
    <div
      style={{
        width: '850px',
        display: 'flex',
        justifyContent: 'space-between'
      }}
    >
      <ChildCom1 />
      <ChildCom2 />
    </div>
  );
}

export default App;
```

:::

实现的效果如下所示：

<VideoPlayer platform="local" src="https://blog-1328542955.cos.ap-shanghai.myqcloud.com/React%20App%20-%20Google%20Chrome%202025-03-07%2012-51-00.mp4" />

但是仔细观察，你会发现两个组件的逻辑一模一样，只是渲染逻辑不同。

那么我们可以将公共逻辑抽取出来，然后通过 props 传递给子组件，子组件再通过 render props 将渲染逻辑传递回来。

:::code-group

```JSX [MouseMove.jsx]
import React, { useState } from 'react';

function MouseMove(props) {
  const [points, setPoints] = useState({
    x: 0,
    y: 0
  });
  const mouseMoveHandler = (e) => {
    setPoints({
      x: e.clientX,
      y: e.clientY
    });
  };
  return props.render
    ? props.render({
        points,
        mouseMoveHandler
      })
    : null;
}

export default MouseMove;
```

```JSX [ChildCom1.jsx]
import React, { useState } from 'react';

function ChildCom1(props) {
  return (
    <div
      style={{
        width: '400px',
        height: '400px',
        backgroundColor: 'lightblue'
      }}
      onMouseMove={props.mouseMoveHandler}
    >
      <h1>
        mouse : {props.points.x} - {props.points.y}
      </h1>
    </div>
  );
}

export default ChildCom1;
```

```JSX [ChildCom2.jsx]
import React, { useState } from 'react';

function ChildCom2(props) {
  return (
    <div
      style={{
        width: '400px',
        height: '400px',
        backgroundColor: 'lightgreen',
        position: 'relative',
        overflow: 'hidden'
      }}
      onMouseMove={props.mouseMoveHandler}
    >
      <h1>ChildCom2</h1>
      <div
        style={{
          width: '15px',
          height: '15px',
          backgroundColor: 'red',
          position: 'absolute',
          left: props.points.x - 450 - 15,
          top: props.points.y - 15,
          borderRadius: '50%'
        }}
      ></div>
    </div>
  );
}

export default ChildCom2;
```

```JSX [App.jsx]
import React from 'react';
import MouseMove from './components/MouseMove';
import ChildCom1 from './components/ChildCom1';
import ChildCom2 from './components/ChildCom2';

function App() {
  return (
    <div
      style={{
        width: '850px',
        display: 'flex',
        justifyContent: 'space-between'
      }}
    >
      <MouseMove render={(props) => <ChildCom1 {...props} />} />
      <MouseMove render={(props) => <ChildCom2 {...props} />} />
    </div>
  );
}

export default App;
```

:::

:::info
需要说明的是，虽然这个技巧的名字叫做 Render Props，但不是说必修要提供一个名为 render 的属性。事实上，封装公共逻辑的组件只要能够得到渲染视图即可，所以传递的方式有多种。
:::

下面是一个例子，通过 props.children 传递渲染逻辑，来说明提及到的并非一定要通过属性传递：

:::code-group

```JSX [MouseMove.jsx]
import React, { useState } from 'react';

function MouseMove(props) {
  const [points, setPoints] = useState({
    x: 0,
    y: 0
  });
  const mouseMoveHandler = (e) => {
    setPoints({
      x: e.clientX,
      y: e.clientY
    });
  };
  return props.children
    ? props.children({
        points,
        mouseMoveHandler
      })
    : null;
}

export default MouseMove;
```

```JSX [App.jsx]
import React from 'react';
import MouseMove from './components/MouseMove';
import ChildCom1 from './components/ChildCom1';
import ChildCom2 from './components/ChildCom2';

function App() {
  return (
    <div
      style={{
        width: '850px',
        display: 'flex',
        justifyContent: 'space-between'
      }}
    >
      <MouseMove>{(props) => <ChildCom1 {...props} />}</MouseMove>
      <MouseMove>{(props) => <ChildCom2 {...props} />}</MouseMove>
    </div>
  );
}

export default App;
```

:::

## 什么时候使用 Render Props

复习一下之前学习过的高阶组件，以下是相同的实现效果对应的代码：

:::code-group

```JavaScript [withMouseMove.js]

import { useState } from 'react';

function withMouseMove(Component) {
  return function EnhancedComponent() {
    const [points, setPoints] = useState({
      x: 0,
      y: 0
    });
    const mouseMoveHandler = (e) => {
      setPoints({
        x: e.clientX,
        y: e.clientY
      });
    };
    return <Component points={points} mouseMoveHandler={mouseMoveHandler} />;
  };
}

export default withMouseMove;
```

```JSX [App.jsx]
import React from 'react';

import withMouseMove from './HOC/withMouseMove';
import ChildCom1 from './components/ChildCom1';
import ChildCom2 from './components/ChildCom2';
const NewChildCom1 = withMouseMove(ChildCom1);
const NewChildCom2 = withMouseMove(ChildCom2);

function App() {
  return (
    <div
      style={{
        width: '850px',
        display: 'flex',
        justifyContent: 'space-between'
      }}
    >
      <NewChildCom1 />
      <NewChildCom2 />
    </div>
  );
}

export default App;
```

:::

那么自然而然疑问就来了，什么时候使用 Render Props？什么时候使用 HOC？

一般来讲，Render Props 应用于组件之间功能逻辑完全相同，仅仅是渲染视图不同。这个时候我们可以通过 Render Props 来指定要渲染的视图是什么。

而 HOC 一般是抽离部分公共逻辑，也就是说组件之间有一部分逻辑相同，但是各自也有自己独有的逻辑，那么这个时候使用 HOC 比较合适，可以在原有的组件的基础上做一个增强处理。

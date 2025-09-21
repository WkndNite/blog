---
date: 2025-03-07 13:42:38
tags:
  - React
  - 前端
---

# Portals

Portals 被翻译为传送门，它要做的事情实际上也确实和传送门类似，根据官方的解释：

> Portal 提供了一种将子节点渲染到存在于父组件以外的 DOM 节点的优秀的方案。

其语法为：

```JSX :no-line-numbers
ReactDOM.createPortal(child, container);
```

第一个参数（child）是任何可渲染的 React 子元素，第二个参数（container）是一个 DOM 元素。

## 什么场景下需要使用 Portals

首先我们来看一个场景，如下：

:::code-group

```JSX [App.jsx]
import React, { useState } from 'react';
import Modal from './components/Modal';

function App() {
  const [isShow, setIsShow] = useState(false);
  return (
    <>
      <button onClick={() => setIsShow(!isShow)}>Show Modal</button>
      {isShow && <Modal />}
    </>
  );
}

export default App;
```

```JSX [Modal.jsx]
import React from 'react';

function Modal() {
  return (
    <div
      style={{
        width: '450px',
        height: '250px',
        border: '1px solid black',
        position: 'absolute',
        left: 'calc(50% - 225px)',
        top: 'calc(50% - 125px)',
        textAlign: 'center',
        lineHeight: '250px'
      }}
    >
      Modal
    </div>
  );
}

export default Modal;
```

:::

运行代码，可以发现模态框渲染位置是在 App 组件内。然而，使用过组件库的经验告诉我们，模态框的元素位置一般会脱离父组件而存在。

![效果图](https://blog-1328542955.cos.ap-shanghai.myqcloud.com/PixPin_2025-03-07_14-20-32.png)

你可能觉得这无伤大雅，但是如果你在父组件加上了一些样式，如果这些样式也被应用到模态框上，那么可能会出现一些意想不到的问题，比如设置 App 组件定位为 relative，那么模态框的位置就会变得非常奇怪。

![效果图](https://blog-1328542955.cos.ap-shanghai.myqcloud.com/PixPin_2025-03-07_14-19-59.png)

## 使用 Portals

Portals 的使用方法也非常简单，只需要通过 `createPortal` 方法来指定渲染到哪个元素中即可。需要注意的是这是和 React 渲染相关的，所以 createPortal 方法来自于 react-dom 这个库。

:::code-group

```JSX [App.jsx]
import React, { useState } from 'react';
import Modal from './components/Modal';

function App() {
  const [isShow, setIsShow] = useState(false);
  return (
    <>
      <div
        style={{
          position: 'relative'
        }}
      >
        <button onClick={() => setIsShow(!isShow)}>Show Modal</button>
      </div>
      <div id="modal">{isShow && <Modal />}</div>
    </>
  );
}

export default App;
```

```JSX [Modal.jsx]
import React from 'react';
import { createPortal } from 'react-dom';

function Modal() {
  return createPortal(
    <div
      style={{
        width: '450px',
        height: '250px',
        border: '1px solid black',
        position: 'absolute',
        left: 'calc(50% - 225px)',
        top: 'calc(50% - 125px)',
        textAlign: 'center',
        lineHeight: '250px'
      }}
    >
      Modal
    </div>,
    document.getElementById('modal')
  );
}

export default Modal;
```

:::

在上面的代码中，我们要将渲染的视图作为 createPortal 方法的第一个参数，而第二个参数用于指定要渲染到哪个 DOM 元素中。

![效果图](https://blog-1328542955.cos.ap-shanghai.myqcloud.com/PixPin_2025-03-07_14-19-29.png)

其实，根据官方的介绍，Portals 的典型用例适当父组件有 overflow: hidden 或 z-index 样式，但是你需要子组件能够在视觉上“跳出”其容器。例如，对话框、悬浮卡以及提示框。

## 通过 Portal 进行事件冒泡

最后需要注意的是，使用 Portal 所渲染的元素在出发事件时的冒泡问题。

以上面的例子为例，我们可以看到即使模态框已经如此渲染，但在组件树中仍然处于根组件内部。

![效果图](https://blog-1328542955.cos.ap-shanghai.myqcloud.com/PixPin_2025-03-07_14-31-19.png)

但是在 React 中事件冒泡是按照组件结构来进行冒泡的，你会发现事件冒泡到了根组件，而不仅仅是模态框。

:::info
在我学习这一部分，进行代码测试的时候，并没有出现点击模态框也能触发 App 事件的理想情况。
:::

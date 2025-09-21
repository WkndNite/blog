---
date: 2025-03-05 12:23:58
tags:
  - React
  - 前端
---

# 属性默认值和类型验证

在 Vue 中，我们可以针对 props 属性进行类型验证，那么在 React 中同样也能对 props 进行验证。

> 官网文档地址：[https://zh-hans.reactjs.org/docs/typechecking-with-proptypes.html](https://zh-hans.reactjs.org/docs/typechecking-with-proptypes.html)

从 React v15.5 开始，React.PropTypes 被弃用，取而代之的是 prop-types 库。

> prop-types 库地址：[https://www.npmjs.com/package/prop-types](https://www.npmjs.com/package/prop-types)

有关 props 验证这一块，我们主要搞清楚以下几个知识点：

- 提供了哪些验证类型
- 如何设置默认值

## 验证类型

有关 props 能够验证的类型，官网实际上已经全部罗列出来了。

### 基本验证与自定义验证

:::code-group

```JSX [ChildCom.jsx]
import PropTypes from 'prop-types';
import React from 'react';

function ChildCom(props) {
  return (
    <div>
      这里是一个子组件
      <hr />
      <span>
        {props.name} - {props.age}
      </span>
    </div>
  );
}

ChildCom.propTypes = {
  name: function (props, propName, componentName) {
    if (!/stu/.test(props[propName])) {
      return new Error(
        'Invalid prop `' +
          propName +
          '` supplied to' +
          ' `' +
          componentName +
          '`. Validation failed.'
      );
    }
  },
  age: PropTypes.number
};

export default ChildCom;
```

```JavaScript [App.js]
import ChildCom from './components/ChildCom';

function App() {
  return (
    <div className="App">
      {/* 错误1：缺少必须的 age 属性 */}
      {/* Warning: Failed prop type: Invalid prop `name` supplied to `ChildCom`. Validation failed. */}
      <ChildCom name="tom" age={11} />

      {/* 错误2：错误类型 age 传了字符串 */}
      {/* Warning: Failed prop type: Invalid prop `age` of type `string` supplied to `ChildCom`, expected `number`. */}
      <ChildCom name="stu-test" age="12" />
    </div>
  );
}

export default App;
```

:::

### 数组类型验证

> 对于对象类型的验证，此处不做过多介绍，只介绍数组类型的验证。

:::code-group

```JSX [ChildCom.jsx]
import PropTypes from 'prop-types';
import React from 'react';

function ChildCom(props) {
  return (
    <>
      <h1>这里是一个子组件</h1>
    </>
  );
}

ChildCom.propTypes = {
  score: PropTypes.arrayOf(
    function (propValue, key, componentName, location, propFullName) {
      if (typeof propValue[key] !== 'number') {
        return new Error(
          'Invalid prop `' +
            propFullName +
            '` supplied to `' +
            componentName +
            '`. Expected `number`.'
        );
      }
    }
  )
};

export default ChildCom;
```

```JavaScript [App.js]
import ChildCom from './components/ChildCom';

function App() {
  return (
    <div className="App">
      {/* Warning: Failed prop type: Invalid prop `score[1]` supplied to `ChildCom`. Expected `number`. */}
      <ChildCom score={[98, '97', 100]} />
    </div>
  );
}

export default App;
```

:::

### 插槽效果验证

:::code-group

```JSX [ChildCom.jsx]
import PropTypes from 'prop-types';
import React from 'react';

function ChildCom(props) {
  return (
    <>
      <h1>这里是一个子组件</h1>
      <h2>{props.children}</h2>
    </>
  );
}

ChildCom.propTypes = {
  children: PropTypes.element.isRequired
};

export default ChildCom;
```

```JavaScript [App.js]
import ChildCom from './components/ChildCom';

function App() {
  return (
    <div className="App">
      {/* Warning: Failed prop type: Invalid prop `children` of type `array` supplied to `ChildCom`, expected a single ReactElement. */}
      <ChildCom>
        <span>插槽</span>
        <span>插槽</span>
      </ChildCom>
      {/* ✅ */}
      <ChildCom>
        <span>插槽</span>
      </ChildCom>
      {/* Warning: Failed prop type: Invalid prop `children` of type `string` supplied to `ChildCom`, expected a single ReactElement. */}
      <ChildCom>插槽</ChildCom>
    </div>
  );
}

export default App;
```

:::

### 书写默认值

:::code-group

```JSX [ChildCom.jsx]
import React from 'react';

function ChildCom(props) {
  return (
    <>
      <h1>这里是一个子组件</h1>
      <h2>{props.name}</h2>
    </>
  );
}

ChildCom.defaultProps = {
  name: '默认值'
};

export default ChildCom;
```

```JavaScript [App.js]
import ChildCom from './components/ChildCom';

function App() {
  return (
    <div className="App">
      <ChildCom />
      <ChildCom name="custom name" />
    </div>
  );
}

export default App;
```

:::

:::warning
现在官方提倡用 JavaScript 的默认值语法，而不是 `defaultProps`，这个用法将在不久之后废弃掉。
:::

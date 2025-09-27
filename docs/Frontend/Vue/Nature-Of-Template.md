---
tag:
  - Vue
  - 前端
date: 2025-01-17
---

# Vue3 模板的本质

为了透彻地了解模板的本质，需要从 `渲染函数` 、`模板编译` 和 `编译时机` 三个角度有一个较为清晰的认知。

## 渲染函数

渲染函数（h）调用后会返回虚拟节点。

实际上，Vue 里的单文件组件是会被一个 `模板编译器` 编译的，编译后的结果并不存在所谓的 `template`，而是被编译成了渲染函数的形式。

这意味着完全可以使用纯 JS 来书写组件，文件内部直接调用渲染函数来描述需要的视图。

:::code-group

```JavaScript [组合式 API]
// UserCard.js
import { defineComponent, h } from 'vue';
import styles from './UserCard.module.css';

export default defineComponent({
  name: 'UserCard',
  props: {
    name: String,
    email: String,
    avatarUrl: String
  },
  setup(props) {
    return () =>
      h('div', { class: styles.userCard }, [
        h('img', {
          class: styles.avatar,
          src: props.avatarUrl,
          alt: 'UserCard Avatar'
        }),
        h('div', { class: styles.userCardContent }, [
          h('h2', props.name),
          h('p', props.email)
        ])
      ]);
  }
});

// Layout.vue
import UserCard from './UserCard.js';
// ...
```

```JavaScript [选项式 API]
// UserCard.js
import { h } from 'vue';
import styles from './UserCard.module.css';

export default {
  name: 'UserCard',
  props: {
    name: String,
    email: String,
    avatarUrl: String
  },
  render() {
    return h('div', { class: styles.userCard }, [
      h('img', {
        class: styles.avatar,
        src: this.avatarUrl,
        alt: 'UserCard Avatar'
      }),
      h('div', { class: styles.userCardContent }, [
        h('h2', this.name),
        h('p', this.email)
      ])
    ]);
  }
};

// Layout.vue
import UserCard from './UserCard.js';
// ...
```

:::

> [!IMPORTANT] 总结
> 至此，我们就知道了，Vue 之所以提供模板的方式，是为了让开发者在描述视图的时候，能够更加轻松。Vue 在运行的时候本身是不需要模板的，它只需要渲染函数，调用这些渲染函数后所得到的虚拟 DOM。

> 作为一个框架开发者，你需要考虑的是：框架责任和用户心智负担的平衡。

## 模板编译

### 概述

```vue
<template>
  <div>
    <h1 :id="someId">Hello</h1>
  </div>
</template>
```

`单文件组件中所书写的模板，对于编译器来讲，就是普通的字符串。`

```text :no-line-numbers
<template><div><h1 :id="someId">Hello</h1></div></template>
```

实际上，模板编译其需要对上面的字符串进行操作，最终生成如下结果：

```JavaScript
function render() {
  return h('div', [h('h1', { id: someId }, 'Hello')]);
}
```

模板编译器在对字符串进行编译的时候，是一点一点转换而来的。
![模板编译](https://blog-1328542955.cos.ap-shanghai.myqcloud.com/template-compiler.excalidraw.png)

- 解析器：负责将模板字符串解析为对应的模板抽象语法树（AST）。
- 转换器：负责将模板的抽象语法树转换为 JS AST。
- 生成器：负责将 JS AST 转换为渲染函数。

> 每一个部件都依赖于上一个部件的执行结果。

模板编译器大致结构如此：

```JavaScript
function compiler(template) {
  const ast = parser(template);
  transform(ast);
  const code = generator(ast);
  return code;
}
```

### 举例阐释

1. 假设有如下一段模板：

   ```vue
   <div>
       <p>Vue</p>
       <p>React</p>
   </div>
   ```

2. 对于模板编译器来讲，就是一段字符串：

   ```text :no-line-numbers
   <div><p>Vue</p><p>React</p></div>
   ```

3. 首先是解析器，拿到这个字符串之后对字符串进行解析，得到一个一个的 token，大致如下：

   ```JavaScript
   [
     { type: 'tag', name: 'div' },
     { type: 'tag', name: 'p' },
     { type: 'text', content: 'Vue' },
     { type: 'tagEnd', name: 'p' },
     { type: 'tag', name: 'p' },
     { type: 'text', content: 'React' },
     { type: 'tagEnd', name: 'p' },
     { type: 'tagEnd', name: 'div' }
   ];
   ```

   :::info
   生成 token 的过程会涉及到编译原理的知识，如有限状态机。
   :::

4. 另外，解析器需要根据得到的 token 来生成模板 AST：

   ```JSON
   {
       "type": "Root",
       "children": [
           {
               "type": "Element",
               "tag": "div",
               "children": [
                   {
                       "type": "Element",
                       "tag": "p",
                       "children": [
                           {
                               "type": "Text",
                               "content": "Vue"
                           }
                       ]
                   },
                   {
                       "type": "Element",
                       "tag": "p",
                       "children": [
                           {
                               "type": "Text",
                               "content": "React"
                           }
                       ]
                   }
               ]
           }
       ]
   }
   ```

   :::info
   解析器、转换器、生成器的具体代码——如何得到树状结构此处不做赘述。
   :::

5. 接下来是转换器，将模板 AST 转换为 JS AST：

   ```JavaScript
   {
       "type": "FunctionDecl",
       "id": { "type": "Identifier", "name": "render" },
       "params": [],
       "body": {
           "type": "ReturnStatement",
           "return": {
               "type": "CallExpression",
               "callee": { "type": "Identifier", "name": "h" },
               "arguments": [
                   { "type": "StringLiteral", "value": "div" },
                   {
                       "type": "ArrayExpression",
                       "elements": [
                           {
                               "type": "CallExpression",
                               "callee": { "type": "Identifier", "name": "h" },
                               "arguments": [
                                   { "type": "StringLiteral", "value": "p" },
                                   { "type": "StringLiteral", "value": "Vue" }
                               ]
                           },
                           {
                               "type": "CallExpression",
                               "callee": { "type": "Identifier", "name": "h" },
                               "arguments": [
                                   { "type": "StringLiteral", "value": "p" },
                                   { "type": "StringLiteral", "value": "React" }
                               ]
                           }
                       ]
                   }
               ]
           }
       }
   }
   ```

6. 最后，生成器将 JS AST 转换为渲染函数：

   ```JavaScript
   function render() {
     return h('div', [h('p', 'Vue'), h('p', 'React')]);
   }
   ```

## 编译时机

整体来讲，会有 `运行时编译` 和 `预编译` 两种情况。

### 运行时编译

例如下面的代码是直接通过 CDN 的方式引入 Vue，也涉及到了模板代码以及模板编译，此时模板编译是在运行时进行的。

::::details 展开代码
:::code-group

```HTML [index.html]
<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>Document</title>
    <link rel="stylesheet" href="index.css" />
  </head>
  <body>
    <div id="app">
      <user-card :name :email :avatar-url></user-card>
    </div>

    <template id="user-card-template">
      <div class="user-card">
        <img :src="avatarUrl" alt="user avatar" class="avatar" />
        <div class="user-info">
          <h2>{{name}}</h2>
          <p>{{email}}</p>
        </div>
      </div>
    </template>

    <script src="https://unpkg.com/vue@3/dist/vue.global.js"></script>
    <script>
      const { createApp } = Vue;

      const UserCard = {
        name: 'UserCard',
        props: {
          name: String,
          email: String,
          avatarUrl: String
        },
        template: '#user-card-template'
      };

      createApp({
        components: {
          UserCard
        },
        data() {
          return {
            name: '周末晚',
            email: 'WkndNite@126.com',
            avatarUrl: 'https://blog.wkndnite-tech.cn/logo.png'
          };
        }
      }).mount('#app');
    </script>
  </body>
</html>
```

```CSS [index.css]
.user-card {
  display: flex;
  align-items: center;
  background-color: #f9f9f9;
  border: 1px solid #e0e0e0;
  border-radius: 10px;
  padding: 10px;
  margin: 10px 0;
}

.avatar {
  width: 60px;
  height: 60px;
  border-radius: 50%;
  margin-right: 15px;
}
.user-info h2 {
  margin: 0;
  font-size: 20px;
  color: #333;
}

.user-info p {
  margin: 5px 0 0;
  font-size: 16px;
  color: #666;
}
```

:::
::::

### 预编译

预编译是发生在工程化的环境中的。所谓预编译，是指工程打包过程中就完成了模板的编译工作，浏览器拿到的是打包以后的代码，完全没有任何模板的痕迹。

打包后的编译文件是很难阅读的，但是我们可以通过一些工具来查看编译后的代码，比如 [Vite Plugin Inspect](https://github.com/antfu/vite-plugin-inspect)。

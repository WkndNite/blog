---
tag:
  - Vue
  - 前端
  - 虚拟 DOM
date: 2025-01-16
---

# 谈一谈 Vue3 中的虚拟 DOM

## DOM 的工作原理

:::info
首先思考一个问题，我们写的代码是 JS 代码，然而浏览器引擎是用 C++写的，浏览器引擎拿到这个 JS 代码后是如何执行的？
:::

这里需要介绍一个定义：**WebIDL(Web Interface Definition Language)**，也叫**Web 接口定义语言**。用来定义浏览器和 JS 是如何通信的。换句话说，浏览器所提供的一些功能（本地功能）是如何能够被 JS 调用的。

通过 WebIDL，**浏览器开发者**可以描述哪些类和方法能够被 JS 访问，以及这些方法如何映射到 JS 中的对象和方法。

1. 假设现在有如下的 WebIDL 定义，用于创建 DOM 元素：

   ```c++
   interface Document{
       Element createElement(DOMString tagName);
   }
   ```

2. 其次，**浏览器开发者**实现这个接口：

   ```c++
   class Document{
       public:
       Element createElement(const std::string& tagName){
           return new Element(tagName)
       }
   }
   ```

3. 接下来，需要生成绑定代码（绑定层），用于将 WebIDL 描述的接口映射到 JS 中：

   ```c++
   // 这个绑定代码是由 WebIDL 编译器生成的
   // 这就是 JS 到 C++ 的桥梁
   // 决定了 JS 开发者可以调用哪些C++的类和方法
   void Document_createElement(const v8::FunctionCallbackInfo<v8::Value>& args){
       v8::Isolate* isolate = args.GetIsolate();
       v8:HandleScope scope(isolate);
       Document* document = Unwrap<Document>(args.Holder());

       v8::String::Utf8Value utf8_value(isolate, args[0]);
       std::string tagName(*utf8_value);

       Element* element = document->createElement(tagName);
       v8::Local<v8::Object> result = WrapElement(isolate, element);
       args.GetReturnValue().Set(result);
   }
   ```

4. 第四步，需要在 JS 引擎里注册：

   ```c++
   void RegisterDocument(v8::Local<v8::Object> global,v8::Isolate* isolate){
       v8::Local<v8::FunctionTemplate> constructor = v8::FunctionTemplate::New(isolate);
       constructor->InstanceTemplate()->Set(isolate, "createElement", Document_createElement);
       global->Set(v8::String::NewFromUtf8(isolate, "Document"), constructor->GetFunction());
   }
   ```

5. **Web 开发者**在进行开发的时候，就可以在 JS 文件中数额写如下代码：

   ```JavaScript
   const i = 1;
   document.createElement('div');
   ```

   首先，JS 引擎会执行 JS 代码，第一行 JS 引擎是完全可以搞定的，第二行 JS 引擎会将其识别为一个 API 调用，然后向浏览器底层（渲染引擎）发出请求，由浏览器底层（渲染引擎）来创建一个 div 元素。在创建元素结束之后，会给最初的调用端返回一个结果，所谓最初的调用端，也就是 JS 代码中调用 DOM API 的地方。

:::tip
平时我们所说的真实 DOM，指的就是浏览器底层已经调用过 C++对应的 API 了。
:::

假设在 JS 层面，我们写了一个如下代码：

```JavaScript :no-line-numbers
document.appendChild('div');
```

那么浏览器底层在调用 C++ 代码的时候，还会涉及到浏览器重新渲染，这又是一个很大的话题。

## 虚拟 DOM 的本质

虚拟 DOM 最早由 React 提出，它并不是一个框架，而是一种编程概念。在这个概念里，UI 以一种理想化的，或者说“虚拟的”表现形式被保存在内存中。

理论上来讲，无论你用什么样子的结构，只要你将文档结构能够展示出来，这种结果后就是一种虚拟 DOM。**然而，理论与现实总是有差距的，实际上也只有 JavaScript 对象适合做这个事情。**

在 Vue 中，可以通过一个 [h 函数](https://cn.vuejs.org/api/render-function.html#h) 来创建虚拟 DOM，如下：

```JavaScript
import { h } from 'vue';
const vnode = h('div', { class: 'red' }, [
  h('h1', 'hello world'),
  h('p', 'hello vue3')
]);
console.log(vnode);

// {
//  "type": "div",
//  "props": { "class": "red" },
//  "children": [
//   { "type": "h1", "children": "hello world" },
//   { "type": "p", "children": "hello vue3" }
//  ]
// }
```

> [!IMPORTANT]
> 虚拟 DOM 的本质就是一个普通的 JavaScript 对象。

## 为什么需要使用虚拟 DOM

1. 先来回顾早期的开发模式。在最早期的时候，前端开发人员需要手动操作 DOM，比如：

   ```JavaScript
   const newDiv = document.createElement('div');
   const newContent = document.createTextNode('hello world');
   newDiv.appendChild(newContent);
   document.body.appendChild(newDiv);

   const existingDiv = document.getElementById('existingDiv');
   existingDiv.textContent = 'hello vue3';
   existingDiv.style.color = 'red';

   const elementToRemove = document.getElementById('elementToRemove');
   const parent = elementToRemove.parentNode;
   parent.removeChild(elementToRemove);

   const newNode = document.createElement('div');
   newNode.textContent = 'new node';
   const referenceNode = document.getElementById('referenceNode');
   referenceNode.parentNode.insertBefore(newNode, referenceNode);
   ```

   上面的代码，如果从编程范式的角度来看，属于命令式编程。这意味着，没有任何一条语句的性能会比 `document.createElement` 更高，因为这条语句是浏览器底层提供的 API，性能已经是最高的了。

   > 编程范式包括：命令式编程、声明式编程、函数式编程、面向对象编程、逻辑编程、并发编程和事件驱动编程等。

2. 虽然上述的方式是性能最高的，但是在实际开发中，开发者往往更倾向于更加方便的方式。

   ```HTML :no-line-numbers
   <div id="app"></div>
   ```

   如果采用传统的操作节点的方式，那么需要如下代码：
   :::details

   ```JavaScript
   var app = document.getElementById('app');

   var messageDiv = document.createElement('div');
   messageDiv.className = 'message';

   var infoDiv = document.createElement('div');
   infoDiv.className = 'info';

   var namemark = document.createElement('mark');
   namemark.textContent = '张三';
   infoDiv.appendChild(namemark);

   var datamark = document.createElement('mark');
   datamark.textContent = '2022-01-01';
   infoDiv.appendChild(datamark);

   messageDiv.appendChild(infoDiv);

   var p = document.createElement('p');
   p.textContent = 'hello world';
   messageDiv.appendChild(p);

   var btnDiv = document.createElement('div');
   btnDiv.className = 'btn';

   var removeBtn = document.createElement('button');
   removeBtn.href = '#';
   removeBtn.textContent = '删除';
   removeBtn.setAttribute('id', 'removeBtn');
   removeBtn.textContent = '删除';
   btnDiv.appendChild(removeBtn);

   messageDiv.appendChild(btnDiv);

   app.appendChild(messageDiv);
   ```

   :::

   如果使用 innerHTML，那么只需要如下代码：

   ```JavaScript
   app.innerHTML = `
     <div class="message">
       <div class="info">
         <mark>张三</mark>
         <mark>2022-01-01</mark>
       </div>
       <p>hello world</p>
       <div class="btn">
         <a href="#" id="removeBtn">删除</a>
       </div>
   </div>`;
   ```

   :::warning 为什么第二种性能要差一些？
   原因很简单，第二种方式涉及到两个层面的计算：① JS 层面需要对字符串进行解析；② DOM 层面需要创建对应的 DOM 节点。

   实际上，使用虚拟 DOM 也涉及到两个层面的计算：① JS 层面需要创建对应的虚拟 DOM；② DOM 层面需要创建对应的 DOM 节点。
   :::

3. 接下来我们研究一下虚拟 DOM 真实的解决的问题是什么。

   实际上无论是使用虚拟 DOM 还是使用 innerHTML，在初始化的时候性能是相差无几的。虚拟 DOM 的长处，实际上是在 DOM 更新的时候。

   ```JavaScript
   document.addEventListener('DOMContentLoaded', () => {
     const contentDiv = document.getElementById('content');
     const updateBtn = document.getElementById('updateBtn');

     updateBtn.addEventListener('click', () => {
       contentDiv.innerHTML = `
               <div class="message">
                   <div class="info">
                       <mark>李四</mark>
                       <mark>2022-01-02</mark>
                   </div>
                   <p>hello vue3</p>
                   <div class="btn">
               </div>`;
     });
   });
   ```

   如上代码需要涉及的计算层面有：① 在 DOM 层面销毁所有旧的 DOM 节点；② JS 层面解析新的字符串；③ 在 DOM 层面创建新的 DOM 节点。

   如果使用虚拟 DOM，那么就只有两个层面的计算：① JS 层面使用 diff 算法计算出更新的节点；② 在 DOM 层面更新对应的节点。

   :::danger 在回答虚拟 DOM 更快的时候，是有前提的：

   - 如果是和原生 JS 操作 DOM 比较，虚拟 DOM 性能必然更低而非更高，因为虚拟 DOM 需要有计算。
   - 如果是和 innerHTML 比较，初始化渲染二者性能是差不多的，但是更新 DOM 的时候，虚拟 DOM 性能更高。
   - 总结：使用虚拟 DOM 是为了防止重渲染时候的性能恶化。
     :::

4. <mark>从更深层次思考，虚拟 DOM 还有哪些好处？</mark>

   - 跨平台性

     虚拟 DOM 实际上是增加了一层抽象层，和原本的直接底层操作 DOM 解耦，符合依赖倒置原则。加一层的好处是，底层模块是可以随时进行替换的。使用抽象层来描述 UI 的结构。回头可以通过不同的渲染引擎来进行渲染，而不局限于浏览器平台。

   - 使框架更加灵活

     React v15 升级到 React v16 的时候，从 React 15 的 Stack Reconciler 升级到 React 16 的 Fiber Reconciler。内部实际上发生了翻天覆地的变化，但对于开发者的入侵极小，开发者基本上感受不到变化，仍然可以使用以前的开发方式进行开发。

     因为 React 有虚拟 DOM，开发者的代码和框架内部的架构解耦了，架构的变化只是依赖于不同的虚拟的 DOM，开发者的代码会被编译为对应结构的虚拟 DOM。

## 一些对未来的展望

目前有一些新的框架：SolidJS、Svelte 等，它们提出了无虚拟 DOM 的概念。这一类框架直接将组件编译为命令式代码，而不是运行时通过比较虚拟 DOM 来更新真实 DOM ，因此这一类框架在**性能**方面一定是优于虚拟 DOM 类的框架的。

包括 Vue 目前也在积极推出无虚拟 DOM 版本，简称 [蒸汽模式](https://github.com/vuejs/core-vapor)。

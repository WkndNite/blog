---
tag:
  - Vue
  - 前端
cover: https://vuejs.org/images/logo.png
date: 2025-01-04
---

# Vue3 中的响应式

本文将介绍 Vue3 中两种可以实现响应式变量的方法：`ref` 和 `reactive`。此外，我们还将对 Vue3 中常用的响应式 API 进行简要介绍。

## ref

1. 通过 ref 创建的变量，会被自动包装成响应式对象。若想访问该变量的值，需要通过 `.value` 来访问。
2. ref 可以包装基本类型的数据，也可以包装对象。对于基本类型，会直接返回一个响应式对象；对于对象，会返回一个包装后的对象。对象内部还是会调用 reactive 进行包装。
3. ref 包装的对象是深层响应式的，即对象内部的嵌套对象也是可以被监听更新的。同时，可以通过 shallowRef 创建一个浅层响应式对象。
4. ref 对 DOM 的更新是异步的，可以通过 `nextTick` 来获取更新后的值。对于该方法的调用，可以在异步函数里，也可以传入回调函数。

## reactive

1. ref 是将对象包装成响应式对象，而 reactive 是使对象本身具有响应式。
2. 响应式对象的本质是一个 JS 代理，通过 reactive 生成的对象和原对象不是同一个对象，但通过 reactive 生成的对象再次通过 reactives 生成的对象是同一个对象。通俗的说，对于一个普通对象，reactive 会返回一个 proxy，但是对于 reactive 变量，再次调用 reactive 会返回它本身。
3. reactive 包装的对象是深层响应式的，即对象内部的嵌套对象也是可以被监听更新的。同时，可以通过 shallowReactive 创建一个浅层响应式对象。
4. reactive 的局限性
   - 有限类型：reactive 只能监听对象，不能监听基本类型数据。
   - 不能替换整个对象：reactive 如果替换掉整个对象，之前的响应式跟踪会被丢弃。
   - 对解构操作不友好：解构操作会丢失响应式跟踪。也就是说，解构以后的变量是一个普通的变量，不具有响应性。

## 额外的 ref 解包细节

1. 作为 reactive 对象的属性的时候，ref 对象会自动解包，不需要通过 `.value` 来访问。
2. 作为 shallowReactive 对象的属性的时候，ref 对象不会自动解包，需要通过 `.value` 来访问。
3. 在模板渲染上下文里，只有顶级的 ref 对象会被解包。非顶级 ref 对象的模板渲染需要通过手动解包或者解构进行访问。其中，特殊情况是如果渲染的最终结果就是 ref 对象本身，可以实现解包的效果。

## 响应式常用 API

响应式常用 API 可以分为以下四类：

- ref 相关：toRef、toRefs、unref
- 只读代理：readonly
- 判断相关：isRef、isReactive、isReadonly、isProxy
- 3.3 新增 API：toValue

### ref 相关

- toRef：将一个响应式对象的属性转换为 ref 对象，返回一个 ref 对象。
- toRefs：将一个响应式对象转换为普通对象，该对象的每个属性都是 ref 对象。
- unref：如果参数是 ref，返回内部值；如果不是 ref，返回参数本身。

### 只读代理

- 接受一个对象，无论是否是响应式对象，返回一个该对象的只读代理。
- 某些场景下，希望数据只能读取不能修改——config 配置等。

### 判断相关

- isRef：判断一个对象是否是 ref 对象。
- isReactive：判断一个对象是否是 reactive 对象。
- isReadonly：判断一个对象是否是 readonly 对象。
- isProxy：判断一个对象是否是由 reactive、shallowReactive、readonly、shallowReadonly 创建的代理对象。

### 3.3 新增 API

- toValue：将一个 ref 对象转换为普通对象，返回 ref 对象的内部值。
- 比 unref 更灵活，支持传入 getter 函数，并且返回函数的执行结果。

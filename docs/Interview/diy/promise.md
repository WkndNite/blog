---
date: 2025-03-14 15:46:44
tags:
  - 面试
  - 前端
  - Promise
  - JavaScript
  - 手撕代码
---

# 手搓 Promise 全系列

首先，我们要明确一件事——本文针对的手搓 Promise 全系列包括两个部分，一个是完成 Mini 版本的 Promise A+ 规范，另一个是一些关于 Promise 的静态方法的实现。

## 实现 Promise A+ 规范

### 实现状态流转

Promise A+ 规范中声明，Promise 应该有两个阶段和三个状态，同时会接受一个函数，该函数有两个参数。因此我们可以书写以下基本结构：

```JavaScript
class MyPromise {
  #state;
  #value;
  static PENDING = "pending";
  static FULFILLED = "fulfilled";
  static REJECTED = "rejected";

  #resolve(data) {
    this.#changeState(MyPromise.FULFILLED, data);
  }
  #reject(reason) {
    this.#changeState(MyPromise.REJECTED, reason);
  }

  #changeState(state, value) {
    this.#state = state;
    this.#value = value;
  }

  /**
   *
   * @param {function} executor
   */
  constructor(executor) {
    this.#state = MyPromise.PENDING;
    this.#value = undefined;
    executor(this.#resolve, this.#reject);
  }
}
```

这里应该不难理解。但是如果你亲自 coding，你会发现写到这里是会报错的。

错误发生在我们对状态流转的修改部分，ES6 的 class 中遵循严格模式，因此 this 在这里指向了 `undefined`。

知道了问题在哪里，那你也应该已经想到怎么解决这个问题了。

:::code-group

```JavaScript [Solution-1.js]
#resolve = (data) => {
  console.log(data);
  this.#state = MyPromise.FULFILLED;
  this.#value = data;
};
#reject = (reason) => {
  console.log(reason);
  this.#state = MyPromise.REJECTED;
  this.#value = reason;
};
```

```JavaScript [Solution-2.js]
constructor(executor) {
  this.#state = MyPromise.PENDING;
  this.#value = undefined;
  executor(this.#resolve, this.#reject); // [!code --]
  executor(this.#resolve.bind(this), this.#reject.bind(this)); // [!code ++]
}
```

:::

:::tip
在书写这一部分的代码时，一开始是直接更改状态的，并没有规定静态变量和 #changeState，后来才做了公共代码的抽离。当然，这应该是你在面试过程中提及的。
:::

写到这里，我们来做一些辅助工作，输出一下内部的私有变量，看看有没有达到我们期望的效果：

```JavaScript
class MyPromise {
  // ...
  getState() {
    return this.#state;
  }
  getValue() {
    return this.#value;
  }
  // ...
}

const p = new MyPromise((resolve, reject) => {
  resolve("hello");
  reject("error");
});

console.log(`💭 MyPromise state: ${p.getState()}`);
console.log(`📦 MyPromise value: ${p.getValue()}`);
// [!code warning]
// 💭 MyPromise state: rejected  [!code warning]
// 📦 MyPromise value: error
```

我们会发现，这样的输出违背了 Promise A+ 规范，因为 Promise 的状态一旦从未决状态变为已决状态，就不能再改变。

而这一部分的改动，也十分容易：

```JavaScript
#changeState(state, value) {
  if(this.#state !== MyPromise.PENDING) return; // [!code ++]
  this.#state = state;
  this.#value = value;
}
```

接下来，我们还要考虑一点。还有什么情况会影响 Promise 的状态流转？

如果传入构造函数的时候抛出了错误怎能么办呢？应该立即返回一个失败的 Promise，并且将错误作为 reason 传递出去：

```JavaScript
constructor(executor) {
  this.#state = MyPromise.PENDING;
  this.#value = undefined;
  executor(this.#resolve.bind(this), this.#reject.bind(this)); // [!code --]
  try{ // [!code ++]
    executor(this.#resolve.bind(this), this.#reject.bind(this)); // [!code ++]
  }catch(error){ // [!code ++]
    this.#reject(error); // [!code ++]
  } // [!code ++]
}
```

:::details 小结

```JavaScript
class MyPromise {
  #state;
  #value;
  static PENDING = "pending";
  static FULFILLED = "fulfilled";
  static REJECTED = "rejected";

  getState() {
    return this.#state;
  }
  getValue() {
    return this.#value;
  }

  #resolve(data) {
    this.#changeState(MyPromise.FULFILLED, data);
  }
  #reject(reason) {
    this.#changeState(MyPromise.REJECTED, reason);
  }

  #changeState(state, value) {
    if (this.#state !== MyPromise.PENDING) return;
    this.#state = state;
    this.#value = value;
  }

  /**
   *
   * @param {function} executor
   */
  constructor(executor) {
    this.#state = MyPromise.PENDING;
    this.#value = undefined;
    try {
      executor(this.#resolve.bind(this), this.#reject.bind(this));
    } catch (error) {
      this.#reject(error);
    }
  }
}

const p1 = new MyPromise((resolve, reject) => {
  resolve("hello");
  reject("error");
});

console.log(`💭 p1 state: ${p1.getState()}`);
console.log(`📦 p1 value: ${p1.getValue()}`);

const p2 = new MyPromise((resolve, reject) => {
  throw "self-defined-error";
});

console.log(`💭 p2 state: ${p2.getState()}`);
console.log(`📦 p2 value: ${p2.getValue()}`);

// 💭 p1 state: fulfilled
// 📦 p1 value: hello
// 💭 p2 state: rejected
// 📦 p2 value: self-defined-error
```

:::

### 实现 then 函数

我们首先来搭建一下 then 函数的基本结构。

:::tip

跳脱 then 函数的范围，在你书写任何一个函数的时候，需要考虑这么几点：

- 这个函数需要接受什么参数？
- 这个函数需要返回什么数据？
- 这个函数应该负责做什么？
- 这个函数有没有一些限制，比如上文的 this 指向？
- ……

:::

then 函数需要两个参数，分别是 `onFulfilled` 和 `onRejected`，我们在传入一个参数的时候，相当于第二个参数是 `undefined`，并且这两个参数应该是函数。

同时，会返回一个新的 `Promise`，这个 Promise 的状态和值取决于 onFulfilled 和 onRejected 的执行结果。

我们可以轻而易举实现这样的基本需求：

```JavaScript
then(onFulfilled, onRejected) {
  return new MyPromise((resolve, reject) => {});
}
```

至此，其实已经基本完成了我给的 Tip 中的前两点，接下来是时候思考一下函数体该负责做什么了——我们需要把传入的回调函数放在微队列中，等待一个合适的时机去执行。

看到这里，建议你先去后文阅读[关于微队列的实现](#关于微队列的实现)，然后再回来接着继续看。

实现微队列以后，我们接着来实现 then 函数的具体逻辑——将需要执行的任务放在队列里，等待执行。

我们先初始化一个队列：

```JavaScript
constructor(executor){
  // ...
  this.#handlers = []; // [!code ++]
}
```

接下来实现向队列里添加任务的函数：

```JavaScript
#pushHandlers(executor,state){
  this.#handlers.push({
    executor,
    state
  })
}

then(onFulfilled, onRejected) {
  this.#pushHandlers(onFulfilled, MyPromise.FULFILLED);
  this.#pushHandlers(onRejected, MyPromise.REJECTED);
  return new MyPromise((resolve, reject) => {});
}
```

我们现在只管往里放，至于错误传参我们放在函数执行部分进行判断。

`return` 的 MyPromise 状态应该调用 `resolve` 还是 `reject`，只有在队列里函数执行以后我们才能确定。另外，执行函数以后怎么拿到对应的 `resolve` 或者 `reject` 呢？

解决办法也很简单，我们直接在向队列添加的时候，把这两个函数也传入。

```JavaScript
#pushHandlers(executor, state, resolve, reject){
  this.#handlers.push({
    executor,
    state,
    resolve,
    reject
  });
}

then(onFulfilled, onRejected) {
  return new MyPromise((resolve, reject) => {
    this.#pushHandlers(onFulfilled, MyPromise.FULFILLED, resolve, reject);
    this.#pushHandlers(onRejected, MyPromise.REJECTED, resolve, reject);
  });
}
```

接下来，我们就可以[实现任务执行函数](#实现任务执行函数)了。

### 关于微队列的实现

在你面试的过程中，如果你觉得这一部分较为繁琐，可以直接如下写出一段“伪微队列”代码。

```JavaScript
function runMicroTask(callback) {
  setTimeout(callback, 0);
}
```

由于这并不是 Promise 实现的核心代码，所以不会减分。

「 如果你很强能在面试中能实现微队列的话……是不会加分的👻」

提醒你一句，Promise 是 ES6 的官方标准，node 环境与浏览器环境都支持。这就意味着，我们的微队列也应该考虑这一部分。

先来看一下 node 环境以下这样的代码：

```JavaScript
setTimeout(function () {
  console.log(1)
},0)
process.nextTick(function(){
  console.log(2)
})
console.log(3)

// 3 2 1
```

那么，浏览器如何实现一个微队列呢？浏览器里有一个 API 叫 `MutationObserver`，它能够监听 DOM 变化，当 DOM 变化时，会在微队列执行回调函数：

![alt](https://blog-1328542955.cos.ap-shanghai.myqcloud.com/PixPin_2025-03-21_16-14-16.png)

既然两种环境基本概念都搞定了，我们就可以实现这样的微队列代码：

```JavaScript
#runMicroTask(callback) {
  if (process && process.nextTick) {
    process.nextTick(callback);
  } else if (MutationObserver) {
    const observer = new MutationObserver(callback);
    const textNode = document.createTextNode("0");
    observer.observe(textNode, {
      characterData: true,
    });
    textNode.data = "1";
  } else {
    setTimeout(callback, 0);
  }
}
```

当然，如果还想继续深入，可以考虑一下单例模式，让每次调用 `runMicroTask` 都返回同一个 `MutationObserver` 实例。

### 实现任务执行函数

我们需要抽象出一个函数，来遍历执行之前队列里添加好的函数。

```JavaScript
#runHandlers(){
  if(this.#state === MyPromise.PENDING){
    return ;
  }
}
```

接下来，我们可以在改变状态之后运行队列里的函数了：

```JavaScript
#changeState(state, value){
  this.#state = state;
  this.#value = value;
  this.#runHandlers(); //[!code ++]
}
```

然后，我们考虑可能在你注册 then 函数的时候状态依然是已决的，所以我们在添加函数的时候也需要运行一下：

```JavaScript
then(onFulfilled, onRejected) {
  return new MyPromise((resolve, reject) => {
    this.#pushHandlers(onFulfilled, MyPromise.FULFILLED, resolve, reject);
    this.#pushHandlers(onRejected, MyPromise.REJECTED, resolve, reject);
    this.#runHandlers(); //[!code ++]
  });
}
```

我们来实现具体的函数运行的代码：

```JavaScript
#runHandlers() {
  // ...
  console.log(`tasks Count: ${this.#handlers.length}`);
  for(const handler of this.#handlers){
    this.#runOneHandler(handler);
  }
}

#runOneHandler(handler) {}
```

到这一步，你可以尝试运行一下如下代码：

```JavaScript
const p = new Promise((resolve,reject) => {
  setTimeout(() => {
    resolve("hello");
  }, 1000);
})
p.then(function a1(){});
setTimeout(() => {
  p.then(function a2(){});
}, 2000);
```

如果你尝试运行，会发现先后需要处理 2 和 4 个 handler，这也启发我们在运行完每一次 handler 之后应该删除相关函数。

```JavaScript
#runHandlers() {
  // ...
  console.log(`tasks Count: ${this.#handlers.length}`);
  for(const handler of this.#handlers){
    this.#runOneHandler(handler);
    this.#handlers.shift(); // [!code ++]
  }
}
```

这不就完成了吗？嗯，你错得没边了。

:::tip

这是一道比较经典的面试题：

```JavaScript
const arr = [1,2,3,4,5];
for(const item of arr){
  console.log(item);
  arr.shift();
}
console.log(arr);
// 1
// 3
// 5
// [4,5]
```

再看一下下面的代码，做一下对比：

```JavaScript
const arr = [1,2,3,4,5];
while(arr[0]){
  console.log(arr[0]);
  arr.shift();
}
console.log(arr);
// 1
// 2
// 3
// 4
// 5
// []
```

:::

因此，我们删除 handler 的部分也要改写：

```JavaScript
#runHandlers() {
  // ...
  console.log(`tasks Count: ${this.#handlers.length}`);
  for(const handler of this.#handlers){ // [!code --]
    this.#runOneHandler(handler); // [!code --]
    this.#handlers.shift(); // [!code --]
  } // [!code --]
  while(this.#handlers.length){ // [!code ++]
    this.#runOneHandler(this.#handlers.shift()); // [!code ++]
  } // [!code ++]
}
```

### 完成核心代码

到现在呢，一切都准备好了。这一部分实现的代码如果完成，Promise A+ 规范也就告一段落了。

在书写下面的代码时，你要考虑到 executor 可能是一个非法传参，那么这就涉及到了状态穿透：

```JavaScript
#runOneHandler({ executor, state, resolve, reject }) {
  const { executor, state, resolve, reject } = handler;
  this.#runMicroTask(() => {
    if (this.#state !== state) return;
    if (typeof executor !== "function") {
      this.#state === MyPromise.FULFILLED
        ? resolve(this.#value)
        : reject(this.#value);
      return ;
    }
  });
}
```

那么，剩下的情况就应该是状态一直下的 handler 执行部分：

```JavaScript
#runOneHandler({ executor, state, resolve, reject }) {
  // ...
  try {
    const result = executor(this.#value);
    resolve(result);
  }catch (error) {
    reject(error);
  }
}
```

至此，基本代码已经搭建好，可以尝试运行一下如下代码：

:::details

```JavaScript
class MyPromise {
  #state;
  #value;
  #handlers;
  static PENDING = "pending";
  static FULFILLED = "fulfilled";
  static REJECTED = "rejected";

  getState() {
    return this.#state;
  }

  getValue() {
    return this.#value;
  }

  #resolve(data) {
    this.#changeState(MyPromise.FULFILLED, data);
  }

  #reject(reason) {
    this.#changeState(MyPromise.REJECTED, reason);
  }

  #changeState(state, value) {
    if (this.#state !== MyPromise.PENDING) return;
    this.#state = state;
    this.#value = value;
    this.#runHandlers();
  }

  /**
   *
   * @param {function} executor
   */
  constructor(executor) {
    this.#state = MyPromise.PENDING;
    this.#value = undefined;
    this.#handlers = [];
    try {
      executor(this.#resolve.bind(this), this.#reject.bind(this));
    } catch (error) {
      this.#reject(error);
    }
  }

  #runMicroTask(callback) {
    if (process && process.nextTick) {
      process.nextTick(callback);
    } else if (MutationObserver) {
      const observer = new MutationObserver(callback);
      const textNode = document.createTextNode("0");
      observer.observe(textNode, {
        characterData: true,
      });
      textNode.data = "1";
    } else {
      setTimeout(callback, 0);
    }
  }

  /**
   *
   * @param {function} onFulfilled
   * @param {function} onRejected
   * @returns {Promise}
   */
  then(onFulfilled, onRejected) {
    return new MyPromise((resolve, reject) => {
      this.#pushHandlers(onFulfilled, MyPromise.FULFILLED, resolve, reject);
      this.#pushHandlers(onRejected, MyPromise.REJECTED, resolve, reject);
      this.#runHandlers();
    });
  }

  #pushHandlers(executor, state, resolve, reject) {
    this.#handlers.push({
      executor,
      state,
      resolve,
      reject,
    });
  }

  #runHandlers() {
    if (this.#state === MyPromise.PENDING) {
      return;
    }
    while (this.#handlers.length) {
      this.#runOneHandler(this.#handlers.shift());
    }
  }

  #runOneHandler({ executor, state, resolve, reject }) {
    this.#runMicroTask(() => {
      if (this.#state !== state) return;
      if (typeof executor !== "function") {
        this.#state === MyPromise.FULFILLED
          ? resolve(this.#value)
          : reject(this.#value);
      }
      try {
        const result = executor(this.#value);
        resolve(result);
      } catch (error) {
        reject(error);
      }
    });
  }
}

const p = new MyPromise((resolve, reject) => {
  setTimeout(() => {
    resolve(1);
  });
});

const p2 = p.then((data) => {
  console.log(data);
  return 123;
});

setTimeout(() => {
  console.log(p.getState(), p.getValue());
  console.log(p2.getState(), p2.getValue());
}, 50);

// 1
// fulfilled 1
// fulfilled 123
```

:::

那如果我们在 `return 123` 这一部分返回的是一个 thenable 对象，就要作出修改了：

```JavaScript
try {
  const result = executor(this.#value);
  resolve(result); // [!code --]
  if (this.#isPromise(result)) { // [!code ++]
    result.then(resolve, reject); // [!code ++]
  } else { // [!code ++]
    resolve(result); // [!code ++]
  } // [!code ++]
} catch (error) {
  reject(error);
}
```

至此，我们就完成了完整的 Promise A+ 规范的实现。接下来验证一下互操作：

```JavaScript
const p = new MyPromise((resolve, reject) => {
  resolve(1);
});

p.then((data) => {
  console.log(data);
  return new Promise((resolve) => {
    resolve(2);
  });
}).then((data) => {
  console.log(data);
});

const p2 = new Promise((resolve, reject) => {
  resolve(3);
});
p2.then((data) => {
  console.log(data);
  return new MyPromise((resolve) => {
    resolve(4);
  });
}).then((data) => {
  console.log(data);
});

function delay(duration) {
  return new MyPromise((resolve, reject) => {
    setTimeout(() => {
      resolve(duration);
    }, duration);
  });
}

(async function () {
  const result = await delay(1000);
  console.log(result);
})();
```

> 后面的静态方法可不属于 Promise A+ 规范！

## 相关静态方法实现

### catch 和 finally

```JavaScript
catch(onRejected) {
  return this.then(null, onRejected);
}

finally(onSettled) {
  return this.then(
    (data) => {
      onSettled();
      return data;
    },
    (reason) => {
      onSettled();
      throw reason;
    }
  );
}

// OR
Promise.prototype.catch = (onRejected) => {
  return this.then(null, onRejected);
}
```

### resolve 和 reject

```JavaScript
static resolve(data) {
  if (data instanceof MyPromise) {
    return data;
  }
  return new MyPromise((resolve, reject) => {
    if (isPromise(data)) {
      data.then(resolve, reject);
    } else {
      resolve(data);
    }
  });
}

static reject(reason) {
  return new MyPromise((resolve, reject) => {
    reject(reason);
  });
}
```

### Promise.all

```JavaScript
static all(promises) {
  return new MyPromise((resolve, reject) => {
    try {
      const results = [];
      let count = 0;
      let fulfilledCount = 0;
      for (const promise of promises) {
        let index = count;
        count++;
        MyPromise.resolve(promise).then((data) => {
          fulfilledCount++;
          results[index] = data;
          if (count === fulfilledCount) {
            resolve(results);
          }
        }, reject);
      }
      if (count === 0) {
        resolve([]);
      }
    } catch (e) {
      reject(e);
      console.error(e);
    }
  });
}
```

### Promise.race

```JavaScript
static race(promises) {
  return new MyPromise((resolve, reject) => {
    for (const promise of promises) {
      MyPromise.resolve(promise).then(resolve, reject);
    }
  });
}
```

### Promise.allSettled

```JavaScript
static allSettled(promises) {
  const ps = [];
  for (const promise of promises) {
    ps.push(
      MyPromise.resolve(promise).then(
        (value) => ({
          status: FULFILLED,
          value,
        }),
        (reason) => ({
          status: REJECTED,
          reason,
        })
      )
    );
  }
  return MyPromise.all(ps);
}
```

## 总结

下面附上一版完整的代码，当然这也只是一个简易的版本，Promise 的状态吸收以及 any 等静态方法仍未实现。

```JavaScript
const PENDING = "pending";
const FULFILLED = "fulfilled";
const REJECTED = "rejected";

function runMicroTask(callback) {
  if (process && process.nextTick) {
    process.nextTick(callback);
  } else if (MutationObserver) {
    const observer = new MutationObserver(callback);
    const textNode = document.createTextNode("0");
    observer.observe(textNode, {
      characterData: true,
    });
    textNode.data = "1";
  } else {
    setTimeout(callback, 0);
  }
}

function isPromise(obj) {
  return !!(obj && typeof obj === "object" && typeof obj.then === "function");
}

class MyPromise {
  constructor(executor) {
    this._state = PENDING;
    this._value = undefined;
    this._handlers = [];
    try {
      executor(this._resolve.bind(this), this._reject.bind(this));
    } catch (e) {
      this._changeState(REJECTED, e);
      console.error(e);
    }
  }

  _pushHandlers(executor, state, resolve, reject) {
    this._handlers.push({
      executor,
      state,
      resolve,
      reject,
    });
  }

  _runHandlers() {
    if (this._state === PENDING) {
      return;
    }
    while (this._handlers[0]) {
      this._runOneHandler(this._handlers.shift());
    }
  }

  _runOneHandler({ executor, state, resolve, reject }) {
    runMicroTask(() => {
      if (this._state !== state) {
        return;
      }
      if (typeof executor !== "function") {
        this._state === FULFILLED ? resolve(this._value) : reject(this._value);
      }
      try {
        const result = executor(this._value);
        if (isPromise(result)) {
          result.then(resolve, reject);
        } else {
          resolve(result);
        }
      } catch (e) {
        reject(e);
        console.error(e);
      }
    });
  }

  then(onFulfilled, onRejected) {
    return new MyPromise((resolve, reject) => {
      this._pushHandlers(onFulfilled, FULFILLED, resolve, reject);
      this._pushHandlers(onRejected, REJECTED, resolve, reject);
      this._runHandlers();
    });
  }

  catch(onRejected) {
    return this.then(null, onRejected);
  }

  finally(onSettled) {
    return this.then(
      (data) => {
        onSettled();
        return data;
      },
      (reason) => {
        onSettled();
        throw reason;
      }
    );
  }

  _changeState(newState, value) {
    if (this._state !== PENDING) {
      return;
    }
    this._state = newState;
    this._value = value;
    this._runHandlers();
  }

  _resolve(data) {
    this._changeState(FULFILLED, data);
  }

  _reject(reason) {
    this._changeState(REJECTED, reason);
  }

  static resolve(data) {
    if (data instanceof MyPromise) {
      return data;
    }
    return new MyPromise((resolve, reject) => {
      if (isPromise(data)) {
        data.then(resolve, reject);
      } else {
        resolve(data);
      }
    });
  }
  static reject(reason) {
    return new MyPromise((resolve, reject) => {
      reject(reason);
    });
  }
  static all(promises) {
    return new MyPromise((resolve, reject) => {
      try {
        const results = [];
        let count = 0;
        let fulfilledCount = 0;
        for (const promise of promises) {
          let index = count;
          count++;
          MyPromise.resolve(promise).then((data) => {
            fulfilledCount++;
            results[index] = data;
            if (count === fulfilledCount) {
              resolve(results);
            }
          }, reject);
        }
        if (count === 0) {
          resolve([]);
        }
      } catch (e) {
        reject(e);
        console.error(e);
      }
    });
  }
  static allSettled(promises) {
    const ps = [];
    for (const promise of promises) {
      ps.push(
        MyPromise.resolve(promise).then(
          (value) => ({
            status: FULFILLED,
            value,
          }),
          (reason) => ({
            status: REJECTED,
            reason,
          })
        )
      );
    }
    return MyPromise.all(ps);
  }
  static race(promises) {
    return new MyPromise((resolve, reject) => {
      for (const promise of promises) {
        MyPromise.resolve(promise).then(resolve, reject);
      }
    });
  }
}
```

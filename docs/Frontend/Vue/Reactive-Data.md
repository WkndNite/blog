---
date: 2025-01-26
tags:
  - Vue
  - 前端
---

# 响应式数据的本质

什么是响应式数据？其实就是 **被拦截的对象**。

当对象被拦截之后，针对对象的各种操作也就能够被拦截下来，从而让我们有机会做一些额外的事情。因此只要是被拦截了的对象，就可以看作是一个响应式数据。

在 Vue3 中，创建响应式数据的方式有 `ref` 和 `reactive` 两种。这两个 API 的背后，就是针对对象添加拦截。

::::details ref 以及 reactive 源码
:::code-group

```ts [RefImpl]
class RefImpl<T> {
  private _value: T;
  private _rawValue: T;

  public dep?: Dep = undefined;
  public readonly __v_isRef = true;

  constructor(
    value: T,
    public readonly __v_isRef: boolean
  ) {
    this._rawValue = __v_isShallow ? value : toRaw(value);
    this._value = __v_isShallow ? value : toReactive(value);
  }

  get value() {
    // 依赖收集
    // ...
    return this._value;
  }

  set value(newVal) {
    // ...
  }
}

export const toReactive = <T extends unknown>(value: T): T =>
  isObject(value) ? reactive(value) : value;
```

```ts [createReactiveObject]
function createReactiveObject(
  target: Target,
  isReadonly: boolean,
  baseHandlers: ProxyHandler<any>,
  collectionHandlers: ProxyHandler<any>,
  proxyMap: WeakMap<Target, any>
) {
  // ...
  const proxy = new Proxy(
    target,
    targetType === TargetType.COLLECTION ? collectionHandlers : baseHandlers
  );
  proxyMap.set(target, proxy);
  return proxy;
}

export function reactive(target: Object) {
  // ...
  return createReactiveObject(
    target,
    false,
    mutableHandlers,
    mutableCollectionHandlers,
    reactiveMap
  );
}
```

:::
::::

从源码中我们就可以看出， `ref` 和 `reactive` 在实现响应式上面的策略是有所不同的——前者是通过 `Object.defineProperty` 和 `Proxy`，后者是通过使用 `Proxy`。

理解响应式数据本质，还要学会 **判断某个操作是否会产生数据拦截**。只有产生数据拦截，才会触发后续的依赖收集和派发更新。

:::details 判断哪些操作会被拦截

```JavaScript
class RefImpl {
  #value;
  constructor(value) {
    this.#value = isObject(value) ? reactive(value) : value;
  }

  get value() {
    console.log('get value');
    return this.#value;
  }

  set value(newValue) {
    console.log('set value');
    this.#value = isObject(newValue) ? reactive(newValue) : newValue;
  }
}

function isObject(value) {
  return value !== null && typeof value === 'object';
}
function deepProxy(obj) {
  return new Proxy(obj, {
    get(target, key) {
      console.log('get', key);
      const value = target[key];
      return isObject(value) ? deepProxy(value) : value;
    },
    set(target, key, value) {
      console.log('set', key);
      target[key] = isObject(value) ? deepProxy(value) : value;
      return true;
    },
    deleteProperty(target, key) {
      console.log('delete', key);
      delete target[key];
      return true;
    }
  });
}

const ref = (value) => new RefImpl(value);
const reactive = (obj) => deepProxy(obj);

state = ref(1);
state; // 不会拦截
console.log(state); // 不会拦截
console.log(state.value); // get value ---> 1
console.log(state.a); // 不会拦截
state.a = 2; // 不会拦截
state.value = 3; // set value
delete state.value; // 不会拦截
state = 3; // 不会拦截

state = ref({ a: 1 });
state; // 不会拦截
console.log(state); // 不会拦截 ---> { value: { a: 1 } }
console.log(state.value); // get value ---> { a: 1 }
console.log(state.a); // 不会拦截
console.log(state.value.a); // get value ---> get a ---> 1
state.a = 2; // 不会拦截
state.value.a = 3; // get value ---> set a
delete state.value.a; // delete a
state.value = 3; // set value
state = 3; // 不会拦截

state = reactive({});
state; // 不会拦截
console.log(state); // 不会拦截
console.log(state.a); // get a ---> undefined
state.a = 1; // set a
state.a = {
  b: {
    c: 100
  }
}; // set a
console.log('====================');
console.log(state.a.b.c); // get a ---> get b ---> get c ---> 100
delete state.a.b; // get a ---> delete b

state = ref({ a: 1 });
const temp = state.value; // get value
console.log(temp); // { a: 1 }
temp.a = 2; // set a
const temp2 = temp.a; // get a
console.log(temp2); // 2

arr = reactive([1, 2, 3]);
arr; // 不会拦截
arr[0]; // get 0
arr.length; // get length
arr[0] = 100; // set 0
arr.push(4); // get push ---> get length ---> set 3 ---> set length
```

:::

:::tip
两段代码各自输出的原因，可以参考 [Vue 中数据拦截的本质](https://blog.wkndnite-tech.cn/Frontend/Vue/data-interception)。
:::

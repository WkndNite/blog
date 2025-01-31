---
date: 2025-01-26
tags:
  - Vue
  - 前端
sticky: 8
---

# 响应式数据的本质

什么是响应式数据？其实就是 **被拦截的对象**。

当对象被拦截之后，针对对象的各种操作也就能够被拦截下来，从而让我们有机会做一些额外的事情。因此只要是被拦截了的对象，就可以看作是一个响应式数据。

在 Vue3 中，创建响应式数据的方式有 `ref` 和 `reactive` 两种。这两个 API 的背后，就是针对对象添加拦截。

ref 以及 reactive 源码如下：

:::code-group

```ts [ref]
class RefImpl<T> {
  private _value: T;
  private _rawValue: T;

  public dep?: Dep = undefined;
  public readonly __v_isRef = true;

  constructor(
    value: T,
    public readonly __v_isRef: boolean,
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

```ts [reactive]
function createReactiveObject(
  target: Target,
  isReadonly: boolean,
  baseHandlers: ProxyHandler<any>,
  collectionHandlers: ProxyHandler<any>,
  proxyMap: WeakMap<Target, any>,
) {
  // ...
  const proxy = new Proxy(
    target,
    targetType === TargetType.COLLECTION ? collectionHandlers : baseHandlers,
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
    reactiveMap,
  );
}
```

:::

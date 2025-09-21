:::details 🔍 Pick

```TypeScript
type MyPick<T, K extends keyof T> = Omit<T, Exclude<keyof T, K>>;

type MyPick<T, K extends keyof T> = {
  [P in K]: T[P];
};
```

:::

:::details 🔍 Readonly

```TypeScript
type MyReadonly<T> = {
  readonly [K in keyof T]: T[K];
};
```

:::

:::details 🔍 Tuple to Object

```TypeScript
type TupleToObject<T extends readonly PropertyKey[]> = {
  [K in T[number]]: K;
};
```

:::

:::details 🔍 First of Array

```TypeScript
type First<T extends readonly unknown[]> = T extends [infer F, ...unknown[]]
  ? F
  : never;
```

:::

:::details 🔍 Length of Tuple

```TypeScript :no-line-numbers
type Length<T extends readonly unknown[]> = T["length"];
```

:::

:::details 🔍 Exclude

```TypeScript :no-line-numbers
type MyExclude<T, U> = T extends U ? never : T;
```

:::

:::details 🔍 Awaited

```TypeScript
type MyAwaited<T extends PromiseLike<any>> = T extends PromiseLike<infer U>
  ? U extends PromiseLike<any>
    ? MyAwaited<U>
    : U
  : never;
```

:::

:::details 🔍 If

```TypeScript :no-line-numbers
type If<C extends boolean, T, F> = C extends true ? T : F;
```

:::

:::details 🔍 Concat

```TypeScript
type Concat<T extends readonly unknown[], U extends readonly unknown[]> = [
  ...T,
  ...U
];
```

:::

:::details 🔍 Includes

```TypeScript
type Includes<T extends readonly unknown[], U> = T extends [
  infer First,
  ...infer Rest
]
  ? Equal<First, U> extends true
    ? true
    : Includes<Rest, U>
  : false;
```

:::

:::details 🔍 Push

```TypeScript :no-line-numbers
type Push<T extends unknown[], U> = [...T, U];
```

:::

:::details 🔍 Unshift

```TypeScript :no-line-numbers
type Unshift<T extends unknown[], U> = [U, ...T];
```

:::

:::details 🔍 Parameters

```TypeScript
type MyParameters<T extends (...args: readonly any[]) => unknown> = T extends (
  ...args: infer R
) => unknown
  ? [...R]
  : never;
```

:::

:::details 🔍 Get Return Type

```TypeScript :no-line-numbers
type MyReturnType<T> = T extends (...args: any[]) => infer R ? R : never;
```

:::

:::details 🔍 Omit

```TypeScript
type MyOmit<T, K extends keyof T> = Pick<T, Exclude<keyof T, K>>;

type MyOmit<T, K extends keyof T> = {
  [P in keyof T as P extends K ? never : P]: T[P];
};
```

:::

:::details 🔍 Readonly 2

```TypeScript
type MyReadonly2<T, K extends keyof T = keyof T> = Omit<T, K> & {
  readonly [P in K]: T[P];
};
```

:::

:::details 🔍 Deep Readonly

```TypeScript
type DeepReadonly<T> = {
  readonly [K in keyof T]: keyof T[K] extends never ? T[K] : DeepReadonly<T[K]>;
};
```

:::

:::details 🔍 Tuple to Union

```TypeScript
type TupleToUnion<T extends unknown[]> = T[number];
```

:::

:::details 🔍 Chainable Options

```TypeScript
type Chainable<T = {}> = {
  option: <K extends string, V>(
    key: K extends keyof T ? never : K,
    value: V
  ) => Chainable<Omit<T, K> & Record<K, V>>;
  get: () => T;
};
```

:::

:::details 🔍 Last of Array

```TypeScript
type Last<T extends readonly unknown[]> = T extends [...infer _, infer Last]
  ? Last
  : never;
```

:::

:::details 🔍 Pop

```TypeScript
type Pop<T extends unknown[]> = T extends []
  ? []
  : T extends [...infer Before, infer _]
  ? Before
  : never;
```

:::

:::details 🔍 Promise.all

```TypeScript
declare function PromiseAll<T extends unknown[]>(
  values: readonly [...T]
): Promise<{
  [K in keyof T]: Awaited<T[K]>;
}>;
```

:::

:::details 🔍 Type Lookup

```TypeScript :no-line-numbers
type LookUp<U, T extends string> = U extends { type: T } ? U : never;
```

:::

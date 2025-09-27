---
date: 2025-07-17 17:08:13
title: Type Challenges
tags:
  - TypeScript
  - Type Challenges
---

# [Type Challenges](https://github.com/type-challenges/type-challenges)

## Easy 13

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


## Medium 102

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

:::details 🔍 TrimLeft

```TypeScript
type Space = " " | "\n" | "\t";
type TrimLeft<S extends string> = S extends `${Space}${infer R}`
  ? TrimLeft<R>
  : S;
```

:::

:::details 🔍 Trim

```TypeScript
type Space = " " | "\n" | "\t";
type Trim<S extends string> = S extends
  | `${Space}${infer R}`
  | `${infer R}${Space}`
  ? Trim<R>
  : S;
```

:::

:::details 🔍 Capitalize

```TypeScript
type MyCapitalize<S extends string> = S extends `${infer head}${infer tail}`
  ? `${Uppercase<head>}${tail}`
  : S;
```

:::

:::details 🔍 Replace

```TypeScript
type Replace<
  S extends string,
  From extends string,
  To extends string
> = From extends ""
  ? S
  : S extends `${infer A}${From}${infer B}`
  ? `${A}${To}${B}`
  : S;
```

:::

:::details 🔍 ReplaceAll

```TypeScript
type ReplaceAll<
  S extends string,
  From extends string,
  To extends string
> = From extends ""
  ? S
  : S extends `${infer A}${From}${infer B}`
  ? `${A}${To}${ReplaceAll<B, From, To>}`
  : S;
```

:::

:::details 🔍 Append Argument

```TypeScript
type AppendArgument<Fn extends (...args: any[]) => any, A> = Fn extends (
  ...args: infer P
) => infer R
  ? (...args: [...P, A]) => R
  : never;
```

:::

:::details 🔍 Permutation

```TypeScript
type Permutation<T, K = T> = [T] extends [never]
  ? []
  : K extends T
  ? [K, ...Permutation<Exclude<T, K>>]
  : never;
```

:::

:::details 🔍 Length of String

```TypeScript
type StringToArray<S extends string> = S extends `${infer A}${infer B}`
  ? [A, ...StringToArray<B>]
  : [];
type LengthOfString<S extends string> = StringToArray<S>["length"];
```

:::

:::details 🔍 Flatten

```TypeScript
type Flatten<S extends any[]> = S extends [infer First, ...infer Rest]
  ? First extends any[]
    ? [...Flatten<First>, ...Flatten<Rest>]
    : [First, ...Flatten<Rest>]
  : [];

```

:::

:::details 🔍 Append To Object

```TypeScript
// ❌ 交叉类型不自动展开计算 KV
type AppendToObject<T, U extends string, V> = {
  [K in U]: V;
} & T;

// ✅ 强制重建对象
type AppendToObject<T, U extends string, V> = Omit<T & { [key in U]: V }, never>

// ✅ 手动创建新对象
type AppendToObject<T, U extends string, V> = {
  [K in keyof T | U]: K extends keyof T ? T[K] : V;
};
```

:::


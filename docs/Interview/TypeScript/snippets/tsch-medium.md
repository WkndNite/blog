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

type Person = {
  name: string;
  age: number;
  job: string;
};

type Child = Omit<Person, "job">;

// ❌ 面试写错了
// type MyOmit<T,key extends keyof T> = {
//     key in keyof T ? Exclusive<T,Partial<T,key>> : never;
// }
// type Exclusive<T,U> = {
//     [K in keyof T]: k in keyof U ? never: T[k];
// }

type MyOmit<T, key extends keyof T> = Pick<T, Exclude<keyof T, key>>;

type _MyOmit<T, key extends keyof T> = {
  [K in keyof T as K extends key ? never : K]: T[K];
};

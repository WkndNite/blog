type MyReturnType<T> = T extends (...args: any[]) => infer R ? R : any;

type MyPick<T, K extends keyof T> = {
  [P in K]: T[P];
};
// type MyPick<T, K extends keyof T> = Omit<T, Exclude<keyof T, K>>;

type MyOmit<T, K extends keyof T> = Pick<T, Exclude<keyof T, K>>;

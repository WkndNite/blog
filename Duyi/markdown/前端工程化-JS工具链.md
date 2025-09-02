# JS工具链

## 语言问题

- 兼容性 = API 兼容 + 语法兼容

```txt
解决API不兼容问题
1. 方法是Polyfill，工具是core-js，但是不能保证全部解决
2. pnpm i -D core-js，参与运行加-D反之不加
```

```txt
解决语法不兼容问题
1. syntax transformer (runtime)
2. 不同语法产生了不同的转换器，async/await ---> pnpm i regenerator
```

```txt
1. 各种安装的繁琐催生代码集成转换工具 ---> 常用Babel
2. pnpm i -D @babel/core @babel/cli
3. 取决于自身定位，开发岗足矣，架构岗很可能绕过cli去用原生JS调用core
4. babel把语法转换为AST(抽象语法树)在转换为对应代码，AST转换为代码过程中可操作，即Babel插件，比如 pnpm i -D @babel/plugin-transform-optional-chaining
5. 很多插件记不住 ---> 预设 ---> pnpm i -D @babel/preset-env
6. SWC（rust开发）转换速度快 但生态暂时不如 babel 稳定
```

- 语言增强

## 工程问题

## 流程问题 [ 架构 ]

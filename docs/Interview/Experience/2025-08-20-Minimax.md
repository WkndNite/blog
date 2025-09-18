---
publish: false
date: 2025-08-20 15:00:00
tags:
  - 秋招
  - 面试
  - Minimax
  - 前端
---

# Minimax 秋招一面

1. 自我介绍。
2. 介绍一下 Zustand 和 Redux 的区别，各自适用于什么样的项目？
3. React 组件之间的通信方式。
4. React 和 Vue 之间在性能方面各自在底层上的原理以及优劣势？
5. 介绍 Fiber 存在的必要性。
6. 二者都会启动 Server，为什么 Vite 开发过程会比 Webpack 快很多？
7. 实习期间组件的共享是如何实现的？跨项目还是 MonoRepo？不同平台对于图组件的编辑是不同的吗，为什么只抽离了渲染态？
8. 低代码平台为什么同时用了两个前端框架？
9. SSR 有考虑用什么框架吗？还是自己去手写？
10. CSR 和 SSR 之间的区别。
11. 括号匹配。
12. 深层对象的扁平化。

:::details 🔍 展开代码

```JavaScript
function flatten(obj,res,prefix=''){
    for(const key in obj){
        const _key = prefix ? `${prefix}.${key}` : key;
        const type = typeof obj[key];
        if(type !== 'object'){
            res[_key] = obj[key];
        }else{
            flatten(obj[key],res,_key)
        }
    }
    return res;
}

const obj = {
    a:1,
    b:{
        c:2,
        d:{
            e:3
        }
    }
}

const result = flatten(obj,{})
console.log(result)
```

:::

13. 不用 Map 实现 O(1) LRU。「有问题，应该是想说不单单依靠 Map。」
14. 「反问」目前公司在做的业务。
14. 「反问」团队规模。
14. 「反问」学习建议。

> 其实面到后面已经开水了……

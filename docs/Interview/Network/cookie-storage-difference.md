---
date: 2025-02-25 10:52:51
tags:
  - 网络
  - 面试
---

# cookie、sessionStorage、localStorage的区别

:::tip 参考答案
cookie、sessionStorage、localStorage 都是保存本地数据的方式。

其中，cookie 的兼容性比较高，所有浏览器均支持。浏览器针对 cookie 有一些默认行为，比如当响应头中出现 `Set-Cookie` 时，浏览器会自动保存 cookie 的值；再比如，浏览器发送请求时，会附带匹配的 `Cookie` 到请求头中。这些默认行为，使得 cookie 长期以来担任着维持登录状态的责任。与此同时，也正是因为浏览器的默认行为，给了恶意攻击者可乘之机，CSRF 攻击就是一个典型的利用 cookie 的攻击方式。虽然 cookie 不断地改进，但前端仍然需要另一种更加安全的保存数据的方式。

HTML 5 新增了 `sessionStorage` 和 `localStorage`。前者用于保存会话级别的数据，后者用于更持久地保存数据。浏览器针对它们没有任何默认行为，这样一来，就把保存数据和读取数据的工作交给了前端开发者，这就让恶意攻击者难以针对登陆状态进行攻击。

cookie 的大小是有限制的，一般浏览器会限制同一个域下的 cookie 总量为 4M，而 sessionStorage 和 localStorage 的大小则没有限制。

cookie 会与 domain、path 关联，而 sessionStorage 和 localStorage 只与 domain 关联。
:::

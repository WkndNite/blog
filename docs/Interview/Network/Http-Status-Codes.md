---
date: 2025-08-04 19:13:28
tags:
   - 状态码
   - 网络
   - 面试
---


# 常见 HTTP 状态码总结

HTTP 状态码用于表示服务器对客户端请求的响应结果。根据响应的类型，状态码大致可分为五类：

| 分类 | 描述 |
|------|------|
| 1xx  | 信息性，表示请求已被接收，继续处理 |
| 2xx  | 成功，请求已成功接收、理解并处理 |
| 3xx  | 重定向，需要进一步操作才能完成请求 |
| 4xx  | 客户端错误，请求有语法错误或无法完成 |
| 5xx  | 服务器错误，服务器处理请求时发生错误 |

## ✅ 1xx 信息性状态码

| 状态码 | 英文 | 含义 |
|--------|------|------|
| 100 | Continue | 继续。客户端应继续其请求 |
| 101 | Switching Protocols | 切换协议。服务器根据请求切换协议 |

## ✅ 2xx 成功状态码

| 状态码 | 英文 | 含义 |
|--------|------|------|
| 200 | OK | 请求成功，常用于 GET/POST 请求 |
| 201 | Created | 已创建，成功请求并创建了新资源 |
| 202 | Accepted | 已接受，尚未处理完成 |
| 203 | Non-Authoritative Information | 非授权信息，来自副本服务器 |
| 204 | No Content | 无内容，服务器处理成功但无返回内容 |
| 205 | Reset Content | 重置内容，浏览器应重置文档视图 |
| 206 | Partial Content | 部分内容，成功处理部分 GET 请求 |

## ✅ 3xx 重定向状态码

| 状态码 | 英文 | 含义 |
|--------|------|------|
| 300 | Multiple Choices | 多种选择，返回资源列表供选择 |
| 301 | Moved Permanently | 永久重定向，请求资源已移动至新 URI |
| 302 | Found | 临时重定向，请求资源暂时移动 |
| 303 | See Other | 查看其它地址，用于 GET/POST 重定向 |
| 304 | Not Modified | 资源未修改，使用缓存副本即可 |
| 305 | Use Proxy | 必须通过代理访问资源（已废弃） |
| 306 | Unused | 状态码已废弃 |
| 307 | Temporary Redirect | 临时重定向，要求重新请求但方法不变 |

## ✅ 4xx 客户端错误状态码

| 状态码 | 英文 | 含义 |
|--------|------|------|
| 400 | Bad Request | 请求语法错误，服务器无法解析 |
| 401 | Unauthorized | 需要身份认证 |
| 402 | Payment Required | 保留，将来使用 |
| 403 | Forbidden | 服务器拒绝执行请求 |
| 404 | Not Found | 请求资源不存在 |
| 405 | Method Not Allowed | 请求方法被禁止 |
| 406 | Not Acceptable | 无法满足请求的内容特性要求 |
| 407 | Proxy Authentication Required | 需要代理身份验证 |
| 408 | Request Timeout | 请求超时 |
| 409 | Conflict | 请求冲突（如资源状态冲突） |
| 410 | Gone | 资源永久删除，不再可用 |
| 411 | Length Required | 缺少 Content-Length 头 |
| 412 | Precondition Failed | 请求条件未满足 |
| 413 | Payload Too Large | 请求实体过大 |
| 414 | URI Too Long | URI 太长，无法处理 |
| 415 | Unsupported Media Type | 不支持的媒体类型 |
| 416 | Range Not Satisfiable | 请求范围不合法 |
| 417 | Expectation Failed | 无法满足 Expect 头信息要求 |

## ✅ 5xx 服务器错误状态码

| 状态码 | 英文 | 含义 |
|--------|------|------|
| 500 | Internal Server Error | 服务器内部错误 |
| 501 | Not Implemented | 请求方法未实现 |
| 502 | Bad Gateway | 网关错误，收到无效响应 |
| 503 | Service Unavailable | 服务不可用，可能过载或维护中 |
| 504 | Gateway Timeout | 网关超时，未及时响应 |
| 505 | HTTP Version Not Supported | 不支持的 HTTP 版本 |

## 🎯 常考状态码简记

- **200** - 请求成功
- **301** - 永久重定向
- **304** - 未修改，可使用缓存
- **403** - 拒绝访问
- **404** - 资源不存在
- **500** - 服务器内部错误
- **502** - 网关错误



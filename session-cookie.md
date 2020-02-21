<!--
 * @Descripttion: 
 * @Author: jiegiser
 * @Date: 2020-02-20 10:48:13
 * @LastEditors: jiegiser
 * @LastEditTime: 2020-02-21 14:40:41
 -->
# 什么是cookie
- 存储在浏览器的一段字符串（最大5kb）
- 跨域不共享
- 格式k1=v1;k2=v2；因此可以存储结构化数据
- 每次发送http请求，会将请求域的cookie一起发送给server
- server可以修改cookie并返回给浏览器
- 浏览器也可以通过JavaScript修改cookie（有限制）

客户端修改cookie：
```js
document.cookie = 'k1 = 100'
// 只会是追加到原本的cookie的后面
```
server 端 nodejs 操作 cookie
```js
// 获取
const cookiestr = req.headers.cookie
// 修改cookie
res.setHeader('Set-Cookie', `username=${username}; path=/; httpOnly`)
```

# session
如果单纯使用cookie，进行验证登录，会暴露一些用户信息，比如用户名或者邮箱等等。
对于登录，我们可以在cookie中存储userID，server端对应username。
存储会话信息。session，也就是server端存储用户信息。

我们在做登录的时候，首先在进入处理后台，判断cookie是否有userid,如果没有，就会按照我们的规则生成，在处理路由的过程中进行设置cookie返回给客户端useid，在登录的时候就进行设置session信息。
然后进入路由，路由判断是否有对应session信息，没有就跳转登录进行登录系统。

如果cookie有userId，然后检查是否有session信息，如果没有进行初始化session，一样按照上面的方法进行登录，设置session信息，
这样进行验证：
```js
// 解析session
  let needSetCookie = false
  let userId = req.cookie.userid
  if(!userId) {
    userId = `${Date.now()}_${Math.random()}`
    needSetCookie = true
  }
  req.sessionId = userId
  get(req.sessionId).then(val => {
    if(val === null) {
      set(req.sessionId, {})
      // 设置session
      req.session = {}
    } else {
      req.session = val
    }
  })
```
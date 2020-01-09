/*
 * @Descripttion: 
 * @Author: jiegiser
 * @Date: 2019-12-30 18:31:34
 * @LastEditors  : jiegiser
 * @LastEditTime : 2020-01-09 09:10:07
 */

const querystring = require('querystring')
const handleBlogRouter = require('./src/router/blog')
const handleUserRouter = require('./src/router/user')
const { get, set } = require('./src/db/redis')
// session 数据
const SESSION_DATA = {}

// 获取 cookie 的过期时间
const getCookieExpires = () => {
  const d = new Date()
  d.setTime(d.getTime() + (24 * 60 * 60 * 1000))
  return d.toGMTString()
}
// 处理postData
const getPostData = (req) => {
  const promise = new Promise((resolve, reject) => {
    if(req.method !== 'POST') {
      resolve({})
      return
    }
    if(req.headers['content-type'] !== 'application/json') {
      resolve({})
      return
    }
    let postData = ''
    req.on('data', chunk => {
      postData += chunk.toString()
    })
    req.on('end', () => {
      if(!postData) {
        resolve({})
        return
      }
      resolve(
        JSON.parse(postData)
      )
    })
  })
  return promise
}
const serverHandle = (req, res) => {
  // 设置返回格式 JSON
  res.setHeader('Content-type', 'application/json')

  // 获取path
  const url = req.url
  req.path = url.split('?')[0]

  // 获取参数
  req.query = querystring.parse(url.split('?')[1])
  
  // 解析 cookie
  req.cookie = {}
  const cookieStr = req.headers.cookie || ''
  cookieStr.split(';').forEach(item => {
    if(!item) {
      return
    }
    const arr = item.split('=')
    const key = arr[0].trim()
    const val = arr[1].trim()
    req.cookie[key] = val
  })
  // 解析session--处理redis
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
  // 处理post data
  getPostData(req).then(postData => {
    req.body = postData
    // 处理blog路由
    // const blogData = handleBlogRouter(req, res)
    // if(blogData) {
    //   res.end(
    //     JSON.stringify(blogData)
    //   )
    //   return
    // }
    const blogReault = handleBlogRouter(req, res)
    if(blogReault) {
      blogReault.then(blogData => {
        if(needSetCookie) {
          res.setHeader('Set-Cookie', `userid=${userId}; path=/; httpOnly; expires=${getCookieExpires()}`)
        }
        res.end(
          JSON.stringify(blogData)
        )
      })
      return
    }
    // 处理user路由
    // const userData = handleUserRouter(req, res)
    // if(userData) {
    //   res.end(
    //     JSON.stringify(userData)
    //   )
    //   return
    // }

    const userResult = handleUserRouter(req, res)
    if(userResult) {
      userResult.then(userData => {
        if(needSetCookie) {
          res.setHeader('Set-Cookie', `userid=${userId}; path=/; httpOnly; expires=${getCookieExpires()}`)
        }
        res.end(
          JSON.stringify(userData)
        )
      })
      return
    }

    // 404--text/plain纯文本
    res.writeHead(404, {'Content-type': 'text/plain'})
    res.write('404 Not Found\n')
    res.end()
  })
}
module.exports = serverHandle
// process.env.NODE_ENV
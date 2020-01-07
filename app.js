/*
 * @Descripttion: 
 * @Author: jiegiser
 * @Date: 2019-12-30 18:31:34
 * @LastEditors  : jiegiser
 * @LastEditTime : 2020-01-07 08:47:45
 */

const querystring = require('querystring')
const handleBlogRouter = require('./src/router/blog')
const handleUserRouter = require('./src/router/user')

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
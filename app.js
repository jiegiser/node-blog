/*
 * @Descripttion: 
 * @Author: jiegiser
 * @Date: 2019-12-30 18:31:34
 * @LastEditors  : jiegiser
 * @LastEditTime : 2019-12-31 08:45:15
 */

const querystring = require('querystring')
const handleBlogRouter = require('./src/router/blog')
const handleUserRouter = require('./src/router/user')
const serverHandle = (req, res) => {
  // 设置返回格式 JSON
  res.setHeader('Content-type', 'application/json')

  // 获取path
  const url = req.url
  req.path = url.split('?')[0]
  
  // 获取参数
  req.query = querystring.parse(url.split('?')[1])

  // 处理blog路由
  const blogData = handleBlogRouter(req, res)
  if(blogData) {
    res.end(
      JSON.stringify(blogData)
    )
    return
  }
  // 处理user路由
  const userData = handleUserRouter(req, res)
  if(userData) {
    res.end(
      JSON.stringify(userData)
    )
    return
  }

  // 404--text/plain纯文本
  res.writeHead(404, {'Content-type': 'text/plain'})
  res.write('404 Not Found\n')
  res.end()
}
module.exports = serverHandle
// process.env.NODE_ENV
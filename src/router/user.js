/*
 * @Descripttion: 
 * @Author: jiegiser
 * @Date: 2019-12-30 19:12:01
 * @LastEditors  : jiegiser
 * @LastEditTime : 2020-01-07 08:54:51
 */
const { SuccessModel, ErrorModel } = require('../model/resModel')
const { login } = require('../controller/user')

// 获取 cookie 的过期时间
const getCookieExpires = () => {
  const d = new Date()
  d.setTime(d.getTime() + (24 * 60 * 60 * 1000))
  return d.toGMTString()
}

const handleUserRouter = (req, res) => {
  const method = req.method

    //  登录
  if (method === 'GET' && req.path === '/api/user/login') {
    // const { username, password } = req.body
    const { username, password } = req.query
    const result = login(username, password)
    return result.then(data => {
      if(data.username) {
        // 操作cookie ;path=/是cookie应用于根目录。所有的网页都会生效;httpOnly只允许后台修改cookie
        res.setHeader('Set-Cookie', `username=${data.username}; path=/; httpOnly; expires=${getCookieExpires()}`)
        return new SuccessModel()
      }
      return new ErrorModel('登录失败')
    })
  }
  if(method === 'GET' && req.path === '/api/user/login-test') {
    if(req.cookie.username) {
      return Promise.resolve(new SuccessModel({
        username: req.cookie.username
      }))
    }
    return Promise.resolve(new ErrorModel('未登录'))
  }
}
module.exports = handleUserRouter
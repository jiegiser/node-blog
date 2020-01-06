/*
 * @Descripttion: 
 * @Author: jiegiser
 * @Date: 2019-12-30 19:12:01
 * @LastEditors  : jiegiser
 * @LastEditTime : 2020-01-06 09:20:24
 */
const { SuccessModel, ErrorModel } = require('../model/resModel')
const { loginCheck } = require('../controller/user')
const handleUserRouter = (req, res) => {
  const method = req.method

    //  登录
  if (method === 'POST' && req.path === '/api/user/login') {
    const { username, password } = req.body
    const result = loginCheck(username, password)
    return result.then(data => {
      if(data.username) {
        return new SuccessModel()
      }
      return new ErrorModel('登录失败')
    })
  }
}
module.exports = handleUserRouter
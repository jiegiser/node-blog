/*
 * @Descripttion: 
 * @Author: jiegiser
 * @Date: 2019-12-30 19:12:01
 * @LastEditors  : jiegiser
 * @LastEditTime : 2019-12-31 08:31:00
 */
const handleUserRouter = (req, res) => {
  const method = req.method

    //  登录
  if (method === 'POST' && req.path === '/api/user/login') {
    return {
      msg: '登录'
    }
  }
}
module.exports = handleUserRouter
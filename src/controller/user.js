/*
 * @Descripttion: 
 * @Author: jiegiser
 * @Date: 2020-01-03 08:12:01
 * @LastEditors  : jiegiser
 * @LastEditTime : 2020-01-03 08:15:20
 */
const loginCheck = (username, password) => {
  if(username === 'jiegiser' && password === '123') {
    return true
  }
  return false
}
module.exports = {
  loginCheck
}
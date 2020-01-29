/*
 * @Descripttion: 
 * @Author: jiegiser
 * @Date: 2020-01-29 14:08:18
 * @LastEditors  : jiegiser
 * @LastEditTime : 2020-01-29 14:33:38
 */
// node 的一个加密的库
const crypto = require('crypto')

// 密匙
const SECRET_KEY = 'jieC_787#*'

// md5 加密
function md5(content) {
  let md5 = crypto.createHash('md5')
  return md5.update(content).digest('hex')
}

// 加密函数
function genPassword(password) {
  const str = `password=${password}&key=${SECRET_KEY}`
  return md5(str)
}

module.exports = {
  genPassword
}
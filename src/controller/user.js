/*
 * @Descripttion: 
 * @Author: jiegiser
 * @Date: 2020-01-03 08:12:01
 * @LastEditors  : jiegiser
 * @LastEditTime : 2020-01-19 08:22:07
 */

const { exec, escape } = require('../db/mysql')
const login = (username, password) => {
  // 防止sql注入
  username = escape(username)
  password = escape(password)
  // 删除单引号
  const sql = `select username,realname from users where username =${username} and password =${password}`
  return exec(sql).then(rows => {
    return rows[0] || {}
  })
}
module.exports = {
  login
}
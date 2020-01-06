/*
 * @Descripttion: 
 * @Author: jiegiser
 * @Date: 2020-01-03 08:12:01
 * @LastEditors  : jiegiser
 * @LastEditTime : 2020-01-06 09:19:40
 */

const { exec } = require('../db/mysql')
const loginCheck = (username, password) => {
  const sql = `select username,realname from users where username = '${username}' and password = '${password}'`
  return exec(sql).then(rows => {
    return rows[0] || {}
  })
}
module.exports = {
  loginCheck
}
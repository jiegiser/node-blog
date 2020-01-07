/*
 * @Descripttion: 
 * @Author: jiegiser
 * @Date: 2020-01-03 08:12:01
 * @LastEditors  : jiegiser
 * @LastEditTime : 2020-01-07 08:16:45
 */

const { exec } = require('../db/mysql')
const login = (username, password) => {
  const sql = `select username,realname from users where username = '${username}' and password = '${password}'`
  return exec(sql).then(rows => {
    return rows[0] || {}
  })
}
module.exports = {
  login
}
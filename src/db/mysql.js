/*
 * @Descripttion: 
 * @Author: jiegiser
 * @Date: 2020-01-04 14:48:26
 * @LastEditors  : jiegiser
 * @LastEditTime : 2020-01-19 08:17:25
 */
const mysql = require('mysql')

const { MYSQL_CONF } =  require('../config/db')

// 创建连接对象
const con = mysql.createConnection(MYSQL_CONF)

// 开始连接
con.connect()

// 统一执行 sql 的函数
function exec(sql) {
  const promise = new Promise((resolve, reject) => {
    con.query(sql, (err, result) => {
      if(err) {
        reject(err)
        return
      }
      resolve(result)
    })
  })
  return promise
}

module.exports = {
  exec,
  escape: mysql.escape
}
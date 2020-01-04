/*
 * @Descripttion: 
 * @Author: jiegiser
 * @Date: 2020-01-04 14:31:23
 * @LastEditors  : jiegiser
 * @LastEditTime : 2020-01-04 14:36:45
 */
const mysql = require('mysql')

// 创建连接对象
const con = mysql.createConnection({
  host: 'localhost',
  user: 'root',
  password: '',
  port: '3306',
  database: 'myblog'
})
// 开始连接
con.connect()

// 执行sql语句
const sql = 'select * from users;'
con.query(sql, (err, result) => {
  if(err) {
    console.log(err)
    return
  }
  console.log(result)
})

// 关闭数据库连接
con.end()
/*
 * @Descripttion: 
 * @Author: jiegiser
 * @Date: 2020-01-04 14:43:20
 * @LastEditors  : jiegiser
 * @LastEditTime : 2020-01-04 14:47:59
 */
const env = process.env.NODE_ENV //环境变量

// 配置
let MYSQL_CONF

if(env === 'dev') {
  MYSQL_CONF = {
    host: 'localhost',
    user: 'root',
    password: '',
    port: '3306',
    database: 'myblog'
  }
}

if(env === 'production') {
  MYSQL_CONF = {
    host: 'localhost',
    user: 'root',
    password: '',
    port: '3306',
    database: 'myblog'
  }
}
module.exports = {
  MYSQL_CONF
}
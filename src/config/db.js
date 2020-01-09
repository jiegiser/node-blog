/*
 * @Descripttion: 
 * @Author: jiegiser
 * @Date: 2020-01-04 14:43:20
 * @LastEditors  : jiegiser
 * @LastEditTime : 2020-01-09 08:03:13
 */
const env = process.env.NODE_ENV //环境变量

// 配置
let MYSQL_CONF
let REDIS_CONF

if(env === 'dev') {
  MYSQL_CONF = {
    host: 'localhost',
    user: 'root',
    password: '',
    port: '3306',
    database: 'myblog'
  }

  // dedis
  REDIS_CONF = {
    port: 6379,
    host: '127.0.0.1'
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
  // dedis
  REDIS_CONF = {
    port: 6379,
    host: '127.0.0.1'
  }
}
module.exports = {
  MYSQL_CONF,
  REDIS_CONF
}
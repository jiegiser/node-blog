/*
 * @Descripttion: 
 * @Author: jiegiser
 * @Date: 2020-01-09 08:03:49
 * @LastEditors  : jiegiser
 * @LastEditTime : 2020-01-09 08:56:27
 */
const redis = require('redis')

const { REDIS_CONF } = require('../config/db')

// 创建客户端
const redisClient = redis.createClient(REDIS_CONF.port, REDIS_CONF.host)

redisClient.on('error', err => {
  console.error(err)
})

function set(key, val) {
  if(typeof val === 'object') {
    val = JSON.stringify(val)
  }
  console.log(key, val)
  redisClient.set(key, val, redis.print)
}
function get(key) {
  return new Promise((resolve, reject) => {
    redisClient.get(key, (err, val) => {
      if(err) {
        console.error(err)
        reject(err)
        return
      }
      if(val === null) {
        resolve(null)
        return
      }
      // 如果是json对象进行解析
      try{
        resolve(
          JSON.parse(val)
        )
      } catch(ex) {
        // 如果不是json对象，直接返回
        resolve(val)
      }
    })
  })
}

module.exports = {
  set,
  get
}
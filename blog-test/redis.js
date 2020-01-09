/*
 * @Descripttion: 
 * @Author: jiegiser
 * @Date: 2020-01-09 07:50:00
 * @LastEditors  : jiegiser
 * @LastEditTime : 2020-01-09 07:55:21
 */
const redis = require('redis')

// 创建redis客户端
const redisClient = redis.createClient(6379, '127.0.0.1')
redisClient.on('error', err => {
    console.error(err)
})

// 测试
// redis.print是设置完值之后打印是否设置正确---Reply: OK
redisClient.set('name', 'jieigiser', redis.print)
// get是一个异步的回调
redisClient.get('name', (err, val) => {
  if(err) {
    console.error(err)
    return
  }
  console.log('val', val)
  // 退出
  redisClient.quit()
})
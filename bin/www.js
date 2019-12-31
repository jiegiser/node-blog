/*
 * @Descripttion: 
 * @Author: jiegiser
 * @Date: 2019-12-31 07:57:30
 * @LastEditors  : jiegiser
 * @LastEditTime : 2019-12-31 08:17:39
 */
const http = require('http')
const PORT = 8000

const serverHandle = require('../app')

const server = http.createServer(serverHandle)

server.listen(PORT, () => {
  console.log('server listen on localhost:8000')
})
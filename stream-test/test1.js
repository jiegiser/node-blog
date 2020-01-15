/*
 * @Descripttion: 
 * @Author: jiegiser
 * @Date: 2020-01-15 07:49:41
 * @LastEditors  : jiegiser
 * @LastEditTime : 2020-01-15 08:08:14
 */
// 标准输入输出 linux****************************
// 管道流数据
// process.stdin.pipe(process.stdout)

// 管道接收数据*********************************
// const http = require('http')
// const server = http.createServer((req, res) => {
//   if(req.method === 'POST') {
//     req.pipe(res)
//   }
// })
// server.listen(8000)

// 复制文件***********************************
// const fs = require('fs')
// const path = require('path')

// const fileName1 = path.resolve(__dirname, 'data.txt')
// const fileName2 = path.resolve(__dirname, 'data-bak.txt')

// const readStream = fs.createReadStream(fileName1)
// const writeStream = fs.createWriteStream(fileName2)

// readStream.pipe(writeStream)
// // 监听每次读取的内容
// readStream.on('data', chunk => {
//   console.log(chunk.toString(), '***********')
// })
// // 读取完成
// readStream.on('end', () => {
//   console.log('copy done')
// })



// http请求返回文本数据  文件IO以及网络IO
const fs = require('fs')
const path = require('path')
const http = require('http')
const fileName1 = path.resolve(__dirname, 'data.txt')
const server = http.createServer((req, res) => {
  if(req.method === 'GET') {
    const readStream = fs.createReadStream(fileName1)
    readStream.pipe(res)
  }
})
server.listen(8000)
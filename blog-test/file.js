/*
 * @Descripttion: 
 * @Author: jiegiser
 * @Date: 2020-01-14 08:27:47
 * @LastEditors  : jiegiser
 * @LastEditTime : 2020-01-14 08:38:36
 */
const fs = require('fs')
const path = require('path')
const fileName = path.resolve(__dirname, 'data.txt')

// 读取文件内容
// fs.readFile(fileName, (err, data) => {
//   if(err) {
//     console.error(err)
//     return
//   }
//   // data是二进制类型，需要转换为字符串
//   console.log(data.toString())
// })

// 写入文件
// const content = '写入的内容\n'
// const opt = {
//   flag: 'a' //追加写入，覆盖用'w'
// }
// fs.writeFile(fileName, content, opt, (err) => {
//   if(err) {
//     console.error(err)
//   }
// })

// 判断文件是否存在
// fs.exists(fileName, (exist) => {
//   console.log('exist', exist)
// })
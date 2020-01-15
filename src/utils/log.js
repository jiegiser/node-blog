/*
 * @Descripttion: 
 * @Author: jiegiser
 * @Date: 2020-01-15 08:27:24
 * @LastEditors  : jiegiser
 * @LastEditTime : 2020-01-15 08:56:03
 */
const fs = require('fs')
const path = require('path')

// 写日志
function writeLog(writeStream, log) {
  writeStream.write(log + '\n')
}

// 生成 write Stream
function createWriteStream(fileName) {
  const fullFileName = path.join(__dirname, '../', '../', 'logs', fileName)
  const writeStream = fs.createWriteStream(fullFileName, {
    // 追加
    flags: 'a'
  })
  return writeStream
}

// 写访问日志
const accessWriteStream = createWriteStream('access.log')
function access(log) {
  writeLog(accessWriteStream, log)
}
// 写报错日志
const errorWriteStream = createWriteStream('error.log')
function errorLog(log) {
  writeLog(errorWriteStream, log)
}
// 写事件日志
const eventWriteStream = createWriteStream('event.log')
function eventLog(log) {
  writeLog(eventWriteStream, log)
}

module.exports = {
  access,
  errorLog,
  eventLog
}
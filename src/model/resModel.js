/*
 * @Descripttion: 格式化输出请求格式
 * @Author: jiegiser
 * @Date: 2019-12-31 08:31:46
 * @LastEditors  : jiegiser
 * @LastEditTime : 2019-12-31 08:41:29
 */
class BaseModel {
  constructor(data, message) {
    if(typeof data === 'string') {
      this.message = data
      data = null
      message = null
    }
    if(data) {
      this.data = data
    }
    if(message) {
      this.message = message
    }
  }
}

class SuccessModel extends BaseModel {
  constructor(data, message) {
    super(data, message)
    this.errno = 0
  }
}

class ErrorModel extends BaseModel {
  constructor(data, message) {
    super(data, message)
    this.errno = -1
  }
}
module.exports = {
  SuccessModel,
  ErrorModel
}
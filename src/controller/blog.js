/*
 * @Descripttion: 
 * @Author: jiegiser
 * @Date: 2019-12-31 08:45:44
 * @LastEditors  : jiegiser
 * @LastEditTime : 2020-01-02 07:59:35
 */
const getList = (auth, keyword) => {
  return [
    {
      id: 1,
      title: 'title',
      content: 'content',
      createTime: 1577753282485,
      author: 'jiegiser'
    },
    {
      id: 2,
      title: 'title',
      content: 'content',
      createTime: 1577753282485,
      author: 'jiegiser'
    }
  ]
}

const getDetail = (id) => {
  return {
    id: 1,
    title: 'title',
    content: 'content',
    createTime: 1577753282485,
    author: 'jiegiser'
  }
}
module.exports = { 
  getList,
  getDetail
}
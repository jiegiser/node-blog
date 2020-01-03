/*
 * @Descripttion: 
 * @Author: jiegiser
 * @Date: 2019-12-31 08:45:44
 * @LastEditors  : jiegiser
 * @LastEditTime : 2020-01-03 08:10:29
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
const newBlog = (blogData = {}) => {
  console.log(blogData)
  // blogData是一个博客对象
  return {
    id: 3
  }
}

const updateBlog = (id, blogData = {}) => {
  // id为要更新博客的id
  console.log('id', id)
  return true
}
const delBlog = (id) => {
  return true
}
module.exports = { 
  getList,
  getDetail,
  newBlog,
  updateBlog,
  delBlog
}
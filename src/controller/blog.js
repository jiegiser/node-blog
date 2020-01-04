/*
 * @Descripttion: 
 * @Author: jiegiser
 * @Date: 2019-12-31 08:45:44
 * @LastEditors  : jiegiser
 * @LastEditTime : 2020-01-04 14:59:17
 */

const { exec } = require('../db/mysql')
const getList = (auth, keyword) => {
  let sql = `select * from blogs where 1 = 1 `
  if(auth) {
    sql += `and author = '${auth}' `
  }
  if(keyword) {
    sql += `and title like '%${keyword}%' `
  }
  sql += `order by createtime desc;`
  // 返回promise对象
  return exec(sql)
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
/*
 * @Descripttion: 
 * @Author: jiegiser
 * @Date: 2019-12-31 08:45:44
 * @LastEditors  : jiegiser
 * @LastEditTime : 2020-01-28 11:10:41
 */
// 引入xss
const xss = require('xss')
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
  const sql = `select * from blogs where id = '${id}'`
  return exec(sql).then(rows => {
    return rows[0]
  })
}
const newBlog = (blogData = {}) => {
  // 防止xss攻击
  const title = xss(blogData.title)
  const content = xss(blogData.content)
  const author = blogData.author
  const createTime = Date.now()

  const sql = `
    insert into blogs (title, content, createtime, author)
    values ('${title}', '${content}', '${createTime}', '${author}');
  `
  return exec(sql).then(insertData => {
    return {
      id: insertData.insertId
    }
  })
}

const updateBlog = (id, blogData = {}) => {
  // id为要更新博客的id
  const title = blogData.title
  const content = blogData.content
  const sql = `
    update blogs set title = '${title}', content = '${content}' where id = ${id}
  `
  return exec(sql).then(updateData => {
    if(updateData.affectedRows > 0) {
      return true
    }
    return false
  })
}
const delBlog = (id, author) => {
  const sql = `delete from blogs where id = '${id}' and author='${author}'`
  return exec(sql).then(delData => {
    if(delData.affectedRows > 0) {
      return true
    }
    return false
  })
}
module.exports = { 
  getList,
  getDetail,
  newBlog,
  updateBlog,
  delBlog
}
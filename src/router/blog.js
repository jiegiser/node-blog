/*
 * @Descripttion: 
 * @Author: jiegiser
 * @Date: 2019-12-30 19:11:53
 * @LastEditors  : jiegiser
 * @LastEditTime : 2020-01-06 09:05:16
 */


const { getList, getDetail, newBlog, updateBlog, delBlog } = require('../controller/blog')
const { SuccessModel, ErrorModel } = require('../model/resModel')
const handleBlogROuter = (req, res) => {
  const method = req.method
  const id = req.query.id

  //  获取博客列表
  if (method === 'GET' && req.path === '/api/blog/list') {
    const author = req.query.author || ''
    const keyword = req.query.keyword || ''
    // const listData = getList(author, keyword)
    // return new SuccessModel(listData)
    const result = getList(author, keyword)
    return result.then(listData => {
      return new SuccessModel(listData)
    })
  }
  if (method === 'GET' && req.path === '/api/blog/detail') {
    // const data = getDetail(id)
    // return new SuccessModel(data)
    const result = getDetail(id)
    return result.then(data => {
      return new SuccessModel(data)
    })
  }
  
  // 新建博客
  if(method === 'POST' && req.path === '/api/blog/new') {
    // const blogData = req.body
    // const data = newBlog(blogData)
    // return new SuccessModel(data)
    const author = 'jiegiser'
    req.body.author = author
    const result = newBlog(req.body)
    return result.then(data => {
      return new SuccessModel(data)
    })
  }

  // 更新博客
  if(method === 'POST' && req.path === '/api/blog/update') {
    const result = updateBlog(id, req.body)
    return result.then(val => {
      if(val) {
        return new SuccessModel()
      } else {
        return new ErrorModel('更新博客失败')
      }
    })
  }

  // 删除博客
  if(method === 'POST' && req.path === '/api/blog/del') {
    const author = 'jiegiser'
    const result = delBlog(id, author)
    return result.then(val => {
      if(val) {
        return new SuccessModel()
      } else {
        return new ErrorModel('删除博客失败')
      }
    })
  }
}

module.exports = handleBlogROuter
/*
 * @Descripttion: 
 * @Author: jiegiser
 * @Date: 2019-12-30 19:11:53
 * @LastEditors  : jiegiser
 * @LastEditTime : 2019-12-31 08:54:07
 */


const { getList } = require('../controller/blog')
const { SuccessModel, ErrorModel } = require('../model/resModel')
const handleBlogROuter = (req, res) => {
  const method = req.method

  //  获取博客列表
  if (method === 'GET' && req.path === '/api/blog/list') {
    const author = req.query.author || ''
    const keyword = req.query.keyword || ''
    const listData = getList(author, keyword)

    return new SuccessModel(listData)
  }
  if (method === 'GET' && req.path === '/api/blog/detail') {
    return {
      msg: 'blog详情'
    }
  }
  
  // 新建博客
  if(method === 'POST' && req.path === '/api/blog/new') {
    return {
      msg: 'blog新建'
    }
  }

  // 更新博客
  if(method === 'POST' && req.path === '/api/blog/update') {
    return {
      msg: 'blog更新'
    }
  }

  // 更新博客
  if(method === 'POST' && req.path === '/api/blog/del') {
    return {
      msg: 'blog删除'
    }
  }
}

module.exports = handleBlogROuter
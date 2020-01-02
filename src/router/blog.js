/*
 * @Descripttion: 
 * @Author: jiegiser
 * @Date: 2019-12-30 19:11:53
 * @LastEditors  : jiegiser
 * @LastEditTime : 2020-01-02 08:00:55
 */


const { getList, getDetail } = require('../controller/blog')
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
    const id = req.query.id
    const data = getDetail(id)
    return new SuccessModel(data)
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
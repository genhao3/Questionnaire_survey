import request from '@/utils/request'

export default {
  // 登录
  login (data) {
    return request({
      url: '/login',
      method: 'post',
      data
    })
  },
  // 获取未删除的问卷
  queryAllPaper (params) {
    return request({
      url: '/queryAllPaper',
      method: 'get',
      params
    })
  }
}

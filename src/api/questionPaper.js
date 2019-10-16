import request from '@/utils/request'
import axios from 'axios'
import qs from 'qs'
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
  },
  addPaper(params){
      return request({
          url: '/addPaper',
          method: 'post',
          headers:{
              'Content-Type':'application/json'
          },
          data:params
      })
  }
}

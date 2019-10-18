import request from '@/utils/request'

export default {
    //查找某个问卷所有答卷
    queryPaperAnswer(params) {
        return request({
            url: '/queryPaperAnswer',
            method: 'get',
            params
          })
    },
    //新增答卷
    postAddAnswer(data) {
        return request({
            url: '/addAnswer',
            method: 'post',
            data
          })
    },
    
}
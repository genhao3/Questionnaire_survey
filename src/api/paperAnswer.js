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
    postAddAnswer(data) {
        return request({
            url: '/addAnswer',
            method: 'post',
            data
          })
    }
}
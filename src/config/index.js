// 一些全局的config配置
const modeUrlObj = {
  // 生产环境
  'production': {
    baseURL: 'http://182.61.26.241:8081/api',
    authBaseURL: ''
  },
  // 开发环境
  'development': {
    baseURL: '/api',
    authBaseURL: ''
  },
  // 测试环境
  'test': {
    baseURL: 'http://xxxxx:9091/test/',
    authBaseURL: ''
  }
}
export default modeUrlObj[process.env.NODE_ENV]

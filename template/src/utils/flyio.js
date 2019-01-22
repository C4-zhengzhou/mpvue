const apiBaseUrl = "https://www.code4ever.cn/api/v1"

const Fly = require('flyio/dist/npm/wx')
let fly = new Fly()

fly.config.baseURL = apiBaseUrl

fly.interceptors.request.use(req => {
  if (wx.getStorageSync('token')) {
    req.headers['x-code4ever-token'] = wx.getStorageSync('token')
  }
  return req
})

fly.interceptors.response.use(
  res => {
    if (res.data.err && res.data.err != 0) {
      console.log('出错了哦，' + res.data.msg)
      return Promise.reject(res.data)
    } else if (res.data.list) {
      console.log('response data:')
      console.log(res.data)
      return Promise.resolve(res.data)
    } else {
      console.log('response data:')
      console.log(res.data.data)
      return Promise.resolve(res.data.data)
    }
  },
  err => {
    console.log(err)
    return Promise.reject(err)
  }
)

export default fly

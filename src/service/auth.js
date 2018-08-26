import wepy from 'wepy'

export default class auth {
  constructor() {
    this.name = "kaso"
  }

  async checkLogin() {
    let that = this
    wepy.login()
      .then(res => {
        let code = res.code
        wepy.getUserInfo()
          .then(res => {
            that.getUserInfo(code, res)
          })
          .catch(err => {
            console.log(err)
          })
      })
  }

  // code:String res:Obj
  async getUserInfo(code, res) {
    return wepy.request({
        url: "https://wechat.tenqent.com/api/wxapp/user/login",
        data: {
          code: code,
          encrypted_data: res.encryptedData,
          iv: res.iv,
          raw_data: res.rawData,
          signature: res.signature
        },
        method: "POST"
      })
      .then(res => {
        wx.setStorage({
          key: "token",
          data: res.data.data.token
        })
        wx.setStorage({
          key: "userinfo",
          data: res.data.data.user
        })
        wx.setStorage({
          key: "openid",
          data: res.data.data.response
        })

        console.log('---------- 缓存查询结果 ----------')
        wepy.getStorage({
            key: 'userinfo'
          })
          .then(console.log)
        wepy.getStorage({
            key: 'token'
          })
          .then(console.log)
        wepy.getStorage({
            key: 'openid'
          })
          .then(console.log)
      })
  }
}

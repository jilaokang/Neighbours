import wepy from 'wepy'

export default class auth {
  constructor() {
    this.name = "kaso"
  }

  async checkLogin(url) {
    let that = this
    await wepy.login()
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
    if (url) {
      wepy.navigateTo({
        url: '/pages/login/' + url
      });
    }
  }

  // code:String res:Obj
  getUserInfo(code, res) {
    return wx.request({
      url: "https://wechat.tenqent.com/api/wxapp/user/login",
      data: {
        code: code,
        encrypted_data: res.encryptedData,
        iv: res.iv,
        raw_data: res.rawData,
        signature: res.signature
      },
      method: "POST",
      success: res => {
        console.log('infoinfoinfo')
        wx.setStorageSync(
          "token",
          res.data.data.token
        )
        wx.setStorageSync(
          "userinfo",
          res.data.data.user
        )
        wx.setStorageSync(
          "openid",
          res.data.data.response
        )

        console.log(res)

        console.log('---------- 缓存查询结果 ----------')
        wx.getStorage({
          key: 'userinfo'
        })
        wx.getStorage({
          key: 'token'
        })
        wx.getStorage({
          key: 'openid'
        })
      }
    })
  }
}

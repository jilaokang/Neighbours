import wepy from 'wepy'

export default class resource {
  constructor() {}

  getDistrictList() {
    return wepy.request({
      url: 'https://wechat.tenqent.com/api/wxapp/wechat/wen_qu'
    })
  }

  getStreetList(district) {
    return wepy.request({
      url: "https://wechat.tenqent.com/api/wxapp/wechat/wen_jie",
      data: {
        qu: district
      },
      method: "POST"
    })
  }

  getCommunityList(street) {
    return wepy.request({
      url: "https://wechat.tenqent.com/api/wxapp/wechat/wen_shequ",
      data: {
        jie: street
      },
      method: "POST"
    })
  }
  getGridList(community) {
    return wepy.request({
      url: "https://wechat.tenqent.com/api/wxapp/wechat/wen_wangge",
      data: {
        shequ: community
      },
      method: "POST"
    })
  }
  getGridAdminList(grid) {
    return wepy.request({
      url: "https://wechat.tenqent.com/api/wxapp/wechat/wen_wanggeyuan",
      data: {
        shequ: grid
      },
      method: "POST"
    })
  }
}

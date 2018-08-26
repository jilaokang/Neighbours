import wepy from 'wepy'

export default auth;

class auth {
  constructor() {
    this.name = "kaso"
  }
  getOpenId() {
    let userCode = wepy.login()
    console.log(userCode)
  }
}

let a = new auth()
console.log(a.name)
console.log('ddd')
a.getOpenId()

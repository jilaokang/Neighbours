export default class Picker {
  constructor() {}

  changePicker(e, list, value) {
    console.log(e, list, value)
    // this[value] = this[list][e.detail]
  }

  bindPickerChange(e) {

    // changePicker(e, 'districtList', 'districtValue')
    console.log(this.changePicker(e))
  }
}

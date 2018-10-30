Page({
  data: {
    array1: ['', '二年级', '三年级', '四年级'],
    array2: ['', '（1）班', '（2）班', '（3）班'],
    index1: 0,
    index2: 0,
  },
  bindPickerChange1: function (e) {
    console.log('picker1发送选择改变，携带值为', e.detail.value)
    this.setData({
      index1: e.detail.value
    })
  },
  bindPickerChange2: function (e) {
    console.log('picker2发送选择改变，携带值为', e.detail.value)
    this.setData({
      index2: e.detail.value
    })
  },
  resetChildren: function (e) {
    this.setData({
      index1: 0,
      index2: 0,
    });
  },
  login: function () {
    let index1 = this.data.index1;
    let index2 = this.data.index2;
    if (index1 == 0 || index2 == 0) {
      wx.showModal({
        title: '请确认信息',
        content: '请确认信息是否登记完毕',
        showCancel: false,
        success: function (res) {
          if (res.confirm) {
            return;
          }
        }
      })
    } else {
      wx.navigateTo({
        url: '../teacher/login?index1=' + this.data.array1[this.data.index1] + "&index2=" + this.data.array2[this.data.index2],
      })
    }
  },
});
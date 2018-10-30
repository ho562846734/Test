var sliderWidth = 96; // 需要设置slider的宽度，用于计算中间位置

Page({
  data: {
    tabs: ["公告", "作业", "打卡"],
    activeIndex: 1,
    sliderOffset: 0,
    sliderLeft: 0
  },

  information: function () {
    wx.reLaunch({
      url: '../public/information',
    })
  },

  add: function () {
    wx.navigateTo({
      url: '../public/new_announcement',
    })
  },
  onLoad: function () {
    var that = this;
    wx.getSystemInfo({
      success: function (res) {
        that.setData({
          sliderLeft: (res.windowWidth / that.data.tabs.length - sliderWidth) / 2,
          sliderOffset: res.windowWidth / that.data.tabs.length * that.data.activeIndex
        });
      }
    });
  },
  tabClick: function (e) {
    this.setData({
      sliderOffset: e.currentTarget.offsetLeft,
      activeIndex: e.currentTarget.id
    });
  }
});
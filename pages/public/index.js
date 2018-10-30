var sliderWidth = 96; // 需要设置slider的宽度，用于计算中间位置

Page({
  data: {
    tabs: ["公告", "作业", "打卡"],
    activeIndex: 1,
    sliderOffset: 0,
    sliderLeft: 0,
    child: null,
    relationship: null
  },

  information: function() {
    wx.reLaunch({
      url: '../public/information?child=' + this.data.child + "&relationship=" + this.data.relationship,
    })
  },
  onLoad: function(options) {
    this.setData({
      child: options.child,
      relationship: options.relationship
    })
    var that = this;
    wx.getSystemInfo({
      success: function(res) {
        that.setData({
          sliderLeft: (res.windowWidth / that.data.tabs.length - sliderWidth) / 2,
          sliderOffset: res.windowWidth / that.data.tabs.length * that.data.activeIndex
        });
      }
    });
  },
  tabClick: function(e) {
    this.setData({
      sliderOffset: e.currentTarget.offsetLeft,
      activeIndex: e.currentTarget.id
    });
  }
});
// pages/teacher/login.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    pwd: "",
    gradeno: null,
    classno: null,
  },



  formSubmit: function(e) {
    console.log("submit class passord", e)
    let pwd = e.detail.value.password;
    console.log("pwd--->", this.data.pwd);

    console.log(pwd);
    if (pwd == "" || pwd == null) {
      wx.showModal({
        title: '暗号',
        content: '暗号栏不允许为空，请重新输入',
        showCancel: false,
        success: function(res) {
          if (res.confirm) {
            return;
          }
        }
      })
    } else {
      wx.redirectTo({
        url: '../teacher/index',
      })
    }
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function(options) {
    this.setData({
      gradeno: options.index1,
      classno: options.index2
    })
  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function() {

  },

  /**
   * 生命周期函数--监听页面显示
   */
  onShow: function() {

  },

  /**
   * 生命周期函数--监听页面隐藏
   */
  onHide: function() {

  },

  /**
   * 生命周期函数--监听页面卸载
   */
  onUnload: function() {

  },

  /**
   * 页面相关事件处理函数--监听用户下拉动作
   */
  onPullDownRefresh: function() {

  },

  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom: function() {

  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function() {

  }
})
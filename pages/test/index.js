Page({

  /**
   * 页面的初始数据
   */
  data: {
    unread: 5,
    show: true,
    read: "已阅",
    color: null,
    time: null,
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
   









    var timestamp = Date.parse(new Date());
    timestamp = timestamp / 1000;
    console.log("当前时间戳为：" + timestamp);
    //获取当前时间    
    var n = timestamp * 1000;
    var date = new Date(n);
    //年    
    var Y = date.getFullYear();
    //月    
    var M = (date.getMonth() + 1 < 10 ? '0' + (date.getMonth() + 1) : date.getMonth() + 1);
    //日    
    var D = date.getDate() < 10 ? '0' + date.getDate() : date.getDate();
    //时    
    var h = date.getHours();
    //分    
    var m = date.getMinutes();
    //秒    
    var s = date.getSeconds();
    console.log("当前时间：" + Y + M + D + h + ":" + m + ":" + s);

    console.log(date.toDateString());

    console.log(date.toGMTString());
    console.log(date.toISOString());
    console.log(date.toJSON());
    console.log(date.toLocaleDateString());
    console.log(date.toLocaleString());
    console.log(date.toLocaleTimeString());
    console.log(date.toString());
    console.log(date.toTimeString());
    console.log(date.toUTCString());


    var time = Y + "年" + M + "月" + D + "日" + h + ":" + m + ":" + s;


    this.setData({
      time: time,
    })

  },



  refresh: function (e) {
    let that = this;
    var a=4;
    that.setData({
      unread: a,
    })
  },

  btnClick: function () {
    var isShow = this.data.show;
    var iscolor = 'white';
    this.setData({
      show: false,
      color: iscolor,
    })
  },



  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function () {

  },

  /**
   * 生命周期函数--监听页面显示
   */
  onShow: function () {

  },

  /**
   * 生命周期函数--监听页面隐藏
   */
  onHide: function () {

  },

  /**
   * 生命周期函数--监听页面卸载
   */
  onUnload: function () {

  },

  /**
   * 页面相关事件处理函数--监听用户下拉动作
   */
  onPullDownRefresh: function () {

  },

  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom: function () {

  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function () {

  }
})
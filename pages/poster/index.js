// pages/poster/index.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    showVideo:false
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {

  },
  //调用子组件的方法
  getSharePoster: function () {
    this.setData({ showVideo: false })
    this.selectComponent('#getPoster').getAvaterInfo()
  },

  myEventListener: function (e) {
    this.setData({ showVideo: true })
  },
  
})
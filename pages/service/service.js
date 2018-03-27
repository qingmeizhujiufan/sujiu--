// pages/service/service.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    qosList: []
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    let list = [{
      icon: '../../image/service/qianbao.png',
      title: '怎样抢红包'
    }, {
        icon: '../../image/service/qianbao.png',
        title: '红包提现及使用'
      }, {
        icon: '../../image/service/qianbao.png',
        title: '不能领红包的可能问题'
    }, {
        icon: '../../image/service/qianbao.png',
        title: '红包明细查询'
      }, {
        icon: '../../image/service/qianbao.png',
        title: '位置/手机号授权说明'
    }, {
      icon: '../../image/service/anti-fake.png',
      title: '二维码防伪'
      }, {
        icon: '../../image/service/anti-fake.png',
        title: '其他防伪'
    }, {
        icon: '../../image/me-active.png',
      title: '售前售后'
    }];
    this.setData({
      qosList: list
    });
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
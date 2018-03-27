// pages/comfirmorder/comfirmorder.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    address: {},
    hasChooseAddress: false,
    num: 1
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
  
  },
  chooseAddress: function(){
    var that = this;
    wx.chooseAddress({
      success: function(res){
        console.log('res == ', res);
        var address = {};
        address.userName = res.userName;
        address.telNumber = res.telNumber;
        address.area = res.provinceName + '' + res.cityName + '' + res.countyName + '' + res.detailInfo;
        that.setData({
          address: address,
          hasChooseAddress: true
        });
      }
    })
  },
  switchChange: function(){
    wx.showToast({
      title: '切换成功',
      duration: 2000
    });
  },
  wxPay: function(){
    wx.showToast({
      title: '请先选择收货地址',
      duration: 2000
    });
  },
  decrease: function(){
    var num = this.data.num;
    if(num > 1)
      num--;
    this.setData({
      num: num
    });
  },
  add: function(){
    var num = this.data.num;
    num++;
    this.setData({
      num: num
    });
  },
  formSubmit: function (e) {
    console.log('form发生了submit事件，携带数据为：', e.detail.value);
    console.log('hasChooseAddress == ', this.data.hasChooseAddress);
    if(!this.data.hasChooseAddress){
      this.setData(
        { popErrorMsg: "请先选择收货地址" }
      );
      this.ohShitfadeOut();
    }
  },
  //定时器提示框3秒消失  
  ohShitfadeOut() {
    var fadeOutTimeout = setTimeout(() => {
      this.setData({ popErrorMsg: '' });
      clearTimeout(fadeOutTimeout);
    }, 3000);
  }
})
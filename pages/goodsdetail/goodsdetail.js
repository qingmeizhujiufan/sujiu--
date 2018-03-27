// pages/goodsdetail/goodsdetail.js
const util = require('../../utils/util.js')

Page({
  data: {
    imgUrls: [
      '../../image/hai.jpg',
      '../../image/hai.jpg',
      '../../image/hai.jpg'
    ],
  },
  onLoad: function () {
  },
  toComfirmOrder: function(){
    wx.navigateTo({
      url: '../comfirmorder/comfirmorder',
    })
  }
})
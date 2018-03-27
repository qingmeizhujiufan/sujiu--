//index.js
//获取应用实例
const app = getApp()

Page({
  data: {
    imgUrls: [
      '../../image/home_slider_1.png',
      '../../image/home_slider_2.png',
      '../../image/home_slider_3.png'
    ],
    listInfo: [],
    hasUserInfo: false,
    canIUse: wx.canIUse('button.open-type.getUserInfo')
  },
  //事件处理函数
  bindViewTap: function() {
    wx.navigateTo({
      url: '../logs/logs'
    })
  },
  onLoad: function () {
    var that = this;
    that.setData({
      listInfo: [{
        imgUrl: '../../image/bear/13.png',
        name: '海之蓝42度480ml (限拍5箱)',
        price: '￥143.00'
      }, {
          imgUrl: '../../image/bear/13.png',
        name: '海之蓝52度480ml (限拍5箱)',
        price: '￥163.00'
        }, {
          imgUrl: '../../image/bear/14.png',
          name: '天之蓝42度480ml 绵柔型白酒',
          price: '￥318.00'
      }, {
          imgUrl: '../../image/bear/14.png',
        name: '天之蓝52度480ml 绵柔型白酒',
        price: '￥358.00'
        }, {
          imgUrl: '../../image/bear/15.png',
          name: '梦之蓝M3 40.8度500ml',
          price: '￥458.00'
      }, {
          imgUrl: '../../image/bear/15.png',
        name: '梦之蓝M3 52度500ml',
        price: '￥488.00'
        }, {
          imgUrl: '../../image/bear/16.png',
          name: '梦之蓝M6 40.8度500ml 绵柔型白酒',
          price: '￥663.00'
      }, {
          imgUrl: '../../image/bear/16.png',
        name: '梦之蓝M6 52度500ml 绵柔型白酒',
        price: '￥686.00'
        }, {
          imgUrl: '../../image/bear/11.png',
          name: '【限拍4瓶】 洋河梦之蓝手工班52度500ml 新版',
          price: '￥1688.00'
      }, {
          imgUrl: '../../image/bear/12.png',
        name: '梦之蓝M9 52度500ml 绵柔型白酒',
        price: '￥1999.00'
        }, {
          imgUrl: '../../image/bear/9.png',
          name: '双沟珍宝坊 军坊 41.8度480ml+20ml 浓香型',
          price: '￥108.00'
      }, {
          imgUrl: '../../image/bear/10.png',
        name: '洋河微分子酒 (小V) 500mlKGD40 绵柔型白酒',
        price: '￥428.00'
        }, {
          imgUrl: '../../image/bear/7.png',
          name: '洋河微分子·微客500mlKGD40 整箱5瓶装',
          price: '￥1640.00'
      }, {
          imgUrl: '../../image/bear/8.png',
        name: '洋河大曲42度375ml 6瓶装浓香型白酒',
        price: '￥209.00'
        }, {
          imgUrl: '../../image/bear/5.png',
          name: '洋河 邃之蓝大曲42度500ml 双瓶',
          price: '￥188.00'
      }, {
          imgUrl: '../../image/bear/6.png',
        name: '星得斯赤霞珠进口红酒爱未停',
        price: '￥89.00'
        }, {
          imgUrl: '../../image/bear/1.png',
          name: '天之蓝42度375ml 绵柔型白酒',
          price: '￥229.00'
      }, {
          imgUrl: '../../image/bear/2.png',
        name: '海之蓝42度375ml 限拍2箱',
        price: '￥99.00'
        }, {
          imgUrl: '../../image/bear/3.png',
          name: '洋河 高之蓝42度500ml 双瓶',
          price: '￥398.00'
      }, {
          imgUrl: '../../image/bear/4.png',
        name: '梦之蓝M1 45度500ml 绵柔型白酒',
        price: '￥328.00'
      }]
    });
    //获取当前位置
    wx.getLocation({
      type: 'wgs84',
      success: function (res) {
        var latitude = res.latitude
        var longitude = res.longitude
        var speed = res.speed
        var accuracy = res.accuracy
      }
    })
    // wx.request({
    //   url: 'http://47.94.194.250/Investment/user/userList',
    //   data: {},
    //   success: function(data){
    //     var list = JSON.parse(data.data.backData);
    //     console.log('list == ', list);
    //     for(let i = 0; i < 3; i++){
    //       list = list.concat(list);
    //     }
    //     that.setData({
    //       listInfo: list
    //     });
    //   }
    // });
  },
  getUserInfo: function(e) {
    console.log(e)
    app.globalData.userInfo = e.detail.userInfo
    this.setData({
      userInfo: e.detail.userInfo,
      hasUserInfo: true
    })
  },
  onPullDownRefresh: function(){
    wx.showLoading({
      title: '数据加载中',
    });
    wx.request({
      url: 'http://47.94.194.250/Investment/user/userList',
      data: {},
      success: function (data) {
        console.log('data == ', data);
        wx.stopPullDownRefresh();
        wx.hideLoading();
      }
    });
  },
  showScanCode: function(){
    // 只允许从相机扫码
    wx.scanCode({
      onlyFromCamera: true,
      success: (res) => {
        console.log(res)
      }
    })
  },
  toPocket: function(){
    wx.navigateTo({
      url: '../pocket/pocket'
    })
  }
})

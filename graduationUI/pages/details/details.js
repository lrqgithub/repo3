Page({
  data: {
    
    biaoti: "商品1",
    pice: "999",
    winHeight: 0,
    winWidth: 0,
    times: 1500,
    upStatus: false,
    buyStatus: false,
    num: 1,

  },

  onLoad: function () {
    this.setData({
      winHeight: wx.getSystemInfoSync().windowHeight,
      winWidth: wx.getSystemInfoSync().windowWidth
    })
  },
  calls(){
    var that = this.data;
    that.upStatus = !that.upStatus;
    this.setData({
      upStatus: that.upStatus
    })
  },
  adCart() {
    var that = this.data;
    if (that.buyStatus == false) {
      that.buyStatus = !that.buyStatus;
      this.setData({
        buyStatus: that.buyStatus
      })
    } else {
      var data = { pice: that.pice, num: that.num, baioti: that.biaoti };
      wx.setStorage({
        key: "sj",
        data: data
      }),
      wx.navigateTo({
        url: '../../pages/car/car'
      })
    }
    // that.over();
  },
  goBuy: function () {
    wx.navigateTo({
      url: '../../pages/dingdan/dingdan'
    })
  },
  close: function () {
    var that = this.data;
    that.buyStatus = false;
    this.setData({
      buyStatus: that.buyStatus
    })
  },
  countDown: function () {
    var that = this.data;
    if (that.num == 1) {
      return;
    }
    
    this.setData({
      num: that.num -= 1
    })

  },
  countAdd: function () {
    var that = this.data;

    
    this.setData({
      num: that.num += 1
    })
  },
  gocar(){
    wx.switchTab({
      url: '../../pages/dingdan/dingdan',
    })
  }
})

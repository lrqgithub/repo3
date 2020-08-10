Page({
  data: {

    list: [{
      shop:"商品2",
      price: 519,
      number: 1,
     
    },
    {
      shop: "商品2",
      price: 519,
      number: 1,
    }
    ],
    winHeight: 0,
    winWidth: 0,
  },

  onLoad: function () {
    this.setData({
      winHeight: wx.getSystemInfoSync().windowHeight,
      winWidth: wx.getSystemInfoSync().windowWidth
    })
  },
  tiaozhuan: function () {
    wx.navigateTo({
      url: '../../pages/details/details',
    })
  }
})

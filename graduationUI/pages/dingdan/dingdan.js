Page({
  data: {
    biaoti: 0,
    pice: 0,
    num: 0,
    winHeight: 0,
    winWidth: 0,
  },

  onLoad: function () {
    let that = this.data;
    var thiss=this;
    this.setData({
      winHeight: wx.getSystemInfoSync().windowHeight,
      winWidth: wx.getSystemInfoSync().windowWidth
    }),
      wx.getStorage({
        key: "sj",
        success(e) {
          thiss.setData({
            biaoti:e.data.baioti,
            pice:e.data.pice,
            num:e.data.num
          }),
         
            console.log(e)
        }
      })
  },
  tiaozhuan() {
    wx.navigateTo({
      url: '../../pages/classfllist_01/classfllist_01'
    })
  },
  tiaozhuan_car() {
    wx.switchTab({
      url: '../../pages/car/car'
    })
  }
})

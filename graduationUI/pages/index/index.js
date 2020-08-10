App({
  onLaunch: function () {
    wx.getSystemInfo({
      success: res => {
        this.globalData.navHeight = res.statusBarHeight;
      },
    })
  },
  globalData: {
    userInfo: null,
    navHeight: 0,
  }
})
const app = getApp()
Page({


  data: {
    shows: false,
    show: false,
    Hei: "" ,
    winHeight: 0,
    winWidth: 0,
    navHeight: app.globalData.navHeight,
  },

  onLoad: function () {

    this.setData({
      winHeight: wx.getSystemInfoSync().windowHeight,
      winWidth: wx.getSystemInfoSync().windowWidth
    })
  },
  imgH: function (e) {
    var winWid = wx.getSystemInfoSync().windowWidth;         //获取当前屏幕的宽度
    var imgh = e.detail.height;　　　　　　　　　　　　　　　　//图片高度
    var imgw = e.detail.width;
    var swiperH = winWid * imgh / imgw + "px"　　　　　　　　　　//等比设置swiper的高度。  即 屏幕宽度 
    this.setData({
      Hei: swiperH　　　　　　　　//设置高度
    })
  },
  showPopup() {
    this.setData({ show: true });
  },

  onClose() {
    this.setData({ show: false });
  },
  showPopups() {
    this.setData({ shows: true });
  },

  onCloses() {
    this.setData({ shows: false });
  },
  tzmy: function () {
    wx.reLaunch({
      url: '../my/my',
    })
  },
  tzcar: function () {
    wx.navigateTo({
      url: '../car/car',
    })
  },
  tzheylist: function () {
    wx.navigateTo({
      url: '../heylist/heylist',
    })
  },
  tzdanger: function () {
    wx.navigateTo({
      url: '../danger/danger',
    })
  },
  tzaddress: function () {
    wx.navigateTo({
      url: '../address/address',
    })
  },
  login: function (e) {
    console.log(e)
    this.setData({ show: false });
  },
  logins: function (e) {
    console.log(e)
    this.setData({ shows: false });
  },
  rk() {
   
  }
})

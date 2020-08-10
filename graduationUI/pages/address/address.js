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
var bmap = require('../../utils/bmap-wx.min.js');
const app = getApp()
Page({


  data: {
    markers: [], 
    longitude: null,
    collegeindex: [],
    latitude: [],
    placeData: {},
    winHeight: 0,
    winWidth: 0,
    navHeight: app.globalData.navHeight,
  },
  makertap: function (e) {
    // console.log(e);
    // var wxMarkerData = wxMarkerData;
    // console.log(wxMarkerData);
    var that = this;
    // console.log(that.data.markers);
    var id = e.markerId;
    that.showSearchInfo(that.data.markers, id);
    that.changeMarkerColor(that.data.markers, id);
  },
  onLoad: function () {
    this.setData({
      winHeight: wx.getSystemInfoSync().windowHeight,
      winWidth: wx.getSystemInfoSync().windowWidth
    });
    var that = this;
    that.dingw();
  },
  dingw: function () {
    var that = this;
    // 新建百度地图对象 
    var BMap = new bmap.BMapWX({
      ak: 'IWUWfLPI1zOYYWDjDvRWDhaZ5B6kF1Uq'
    });

    BMap.regeocoding({
      // address: "北京市海淀区上地十街10号",
      success: function (data) {
        // console.log(data)
        var res = that.bMapTransqqMap(data.wxMarkerData[0].longitude, data.wxMarkerData[0].latitude);
        // console.log(res.latitude);
        that.setData({
          latitude: res.latitude
        });
        that.setData({
          longitude: res.longitude
        });
      },
      fail: function (data) {
        console.log(data)
      },

    });


    var fail = function (data) {
      console.log(data)
    };
    var success = function (data) {
      var wxMarkerData = data.wxMarkerData;

      that.setData({
        markers: wxMarkerData
      });
      // console.log(data)
      var res = that.bMapTransqqMap(data.wxMarkerData[0].longitude, data.wxMarkerData[0].latitude);
      // console.log(res.latitude);
      that.setData({
        latitude: res.latitude
      });
      that.setData({
        longitude: res.longitude
      });
    };
    BMap.search({
      "query": '快递',
      fail: fail,
      success: success,
      // 此处需要在相应路径放置图片文件 
      iconPath: '../img/marker_red.png',
      // 此处需要在相应路径放置图片文件 
      iconTapPath: '../img/marker_red.png'
    });
  },
  bMapTransqqMap(lng, lat) {
    let x_pi = (3.14159265358979324 * 3000.0) / 180.0;
    let x = lng - 0.0065;
    let y = lat - 0.006;
    let z = Math.sqrt(x * x + y * y) - 0.00002 * Math.sin(y * x_pi);
    let theta = Math.atan2(y, x) - 0.000003 * Math.cos(x * x_pi);
    let lngs = z * Math.cos(theta);
    let lats = z * Math.sin(theta);
    return {
      longitude: lngs,
      latitude: lats
    };
  },
  ht: function () {
    wx.reLaunch({
      url: '../index/index',
    })
  },
  tzpeople: function () {
    wx.reLaunch({
      url: '../people/people',
    })
  },
  getcollege: function (e) {
    var that = this;
    that.setData({
      collegeindex: e.detail.value,

    })
  },
  getclass: function (e) {
    var that = this;
    that.setData({
      classindex: e.detail.value,

    })
  },
  fhone: function (e) {
    wx.navigateBack({
      delta: 1
    })
  },
  showSearchInfo: function (data, i) {
    console.log(i);
    var that = this;
    that.setData({
      placeData: {
        title: '名称：' + data[i].title + '\n',
        address: '地址：' + data[i].address + '\n',
        telephone: '电话：' + data[i].telephone
      }
    });
  },
  changeMarkerColor: function (data, i) {
    var that = this;
    var markers = that.data.markers;
    console.log(markers);
    for (var j = 0; j < data.length; j++) {
      if (j == i) {
        // 此处需要在相应路径放置图片文件 
        data[j].iconPath = "../img/marker_yellow.png";
      } else {
        // 此处需要在相应路径放置图片文件 
        data[j].iconPath = "../img/marker_red.png";
      }
      markers[j] = data[j];
    }
    that.setData({
      markers: markers
    });
  }
})
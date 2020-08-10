// pages/classfl/classfl.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    winHeight: 0,
    winWidth: 0,
    selected: 0,
    xunhuan: 10,
    idname: "红茶",
    id: 1,
    leftR: [{
      "name": "一号仓库",
      "id": '1'
    },
      {
        "name": "一号仓库",
        "id": '1'
      },
      {
        "name": "一号仓库",
        "id": '1'
      },
      {
        "name": "一号仓库",
        "id": '1'
      },
      {
        "name": "一号仓库",
        "id": '1'
      },
    ],
    leftT: [{
      "name": "一号仓库",
      "id": '1'
    },
    {
      "name": "一号仓库",
      "id": '1'
    },
    {
      "name": "一号仓库",
      "id": '1'
    },
    {
      "name": "一号仓库",
      "id": '1'
    },
    {
      "name": "一号仓库",
      "id": '1'
    },
    ],
    chat: [{
      "name": "祁门工夫茶",
      "id": '1'
    }, {
      "name": "绿茶",
      "id": '2'
    },
    {
      "name": "白茶",
      "id": '3'
    },
    {
      "name": "黑茶",
      "id": '4'
    },
    {
      "name": "洋酒",
      "id": '5'
    },
    {
      "name": "黄茶",
      "id": '6'
    },
    {
      "name": "乌龙茶",
      "id": '7'
    },
    ]
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function () {
    this.setData({
      winHeight: wx.getSystemInfoSync().windowHeight,
      winWidth: wx.getSystemInfoSync().windowWidth,
    })
  },
  select(e) {
    console.log(e)
    this.setData({
      selected: e.target.dataset.index,
      idname: e.target.dataset.name,
    })
  },
  tz: function () {
    wx.navigateTo({
      url: '../../pages/classfllist/classfllist',
    })
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
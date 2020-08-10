// pages/login/login.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    winHeight: 0,
    winWidth: 0,
    collegeIndex:'',
    college: [
      { id: "1", dname: "商家", status: "1", isdelete: "0" },
      { id: "2", dname: "用户", status: "1", isdelete: "0" }]
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    this.setData({
      winHeight: wx.getSystemInfoSync().windowHeight,
      winWidth: wx.getSystemInfoSync().windowWidth
    })
    var that=this;
    if(wx.getStorageSync('userinfo')){
      wx.reLaunch({
        url: '../index/index',
      })
      return;
    }
    //获取学院数据  ajax<==>wx.request({})
    // wx.request({
    //   url:'https://ssl.hebsoft.com/xlpj/public/api/depart',
    //   header:{"content-type":"application/json"},
    //   method:"POST",
    //   success:function(res){
    //     that.setData({
    //       college:res.data.data
    //     });
    //     // console.log(res.data.data);
    //   }
    // })
  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function () {

  },

  /**
   * 跳转注册
   */
  register: function () {
wx.navigateTo({
  url: '../register/register',
})
  },
  getCollege:function(e){
    this.setData({
      collegeIndex:e.detail.value
    });
  },
  login:function(e){
    console.log(e.detail.value)
    if(e.detail.value.college==""){
      wx.showToast({
        title: '请选择学院',
        icon:'none',
        mask:true
      })
      return;
    }else if(e.detail.value.userCode==""){
      wx.showToast({
        title: '请输入学号',
        icon:'none',
        mask:true
      })
      return;
    }else if(e.detail.value.pwd==""){
      wx.showToast({
        title: '请输入密码',
        icon:'none',
        mask:true
      })
      return;
    }else{
             wx.reLaunch({
              url: '../index/index',
            })
      // wx.request({
      //   url: 'https://ssl.hebsoft.com/xlpj/public/api/students/login',
      //   method:"POST",
      //   data:{
      //     did:e.detail.value.college,//学院id
      //     code:e.detail.value.userCode,//学号
      //     password:e.detail.value.pwd  //密码
      //   },
      //   success:function(res){
      //     if(res.data.code==200){
      //       wx.setStorageSync('userinfo', res.data.data)
      //       wx.reLaunch({
      //         url: '../index/index',
      //       })
      //     }else{
      //       wx.showToast({
      //         title: '账户或密码不正确',
      //         icon:"none",
      //         mask:true
      //       })
      //     }
      //   }
      // })
    }
  },
  getvalue(res){
    console.log(res);
  }
})
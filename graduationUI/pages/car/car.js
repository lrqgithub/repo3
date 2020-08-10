// pages/car/car.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    winHeight: 0,
    winWidth: 0,
    prices: 0,
    all: true,
    yanzheng: true,
    number: 0,
    scorellHeight: '',
    totalPrice: 0,
    list: [{
      selected: true,
      title: '中秋送礼信阳毛尖2019新茶散装绿茶高档礼盒装陶瓷罐高山云雾散茶嫩芽',
      price: 519,
      number: 1,
      checked: ''
    },
    {
      selected: true,
      title: '美景湾家族珍藏赤霞珠葡萄酒',
      price: 79,
      number: 1,
      checked: ''
    }
    ]

  
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    this.setData({
      winHeight: wx.getSystemInfoSync().windowHeight,
      winWidth: wx.getSystemInfoSync().windowWidth
    });
    var that=this.data;
    var thiss = this;
    wx.getStorage({
      key: "sj",
      success(e) {
        var lists = {
          selected: true,
          title: e.data.baioti,
          price: e.data.pice,
          number: e.data.num,
          checked: ''
        };
        that.list.push(lists);
        console.log(lists);
        console.log(that.list);
        thiss.setData({
          list: that.list
        });
      }
    })
  },
  hh: function () {
    var price = 0;
    var numb = 0;
    var list = this.data.list;
    for (var i = 0; i < list.length; i++) {
      if (!list[i].selected) {
        price += list[i].number * list[i].price;
        numb += list[i].number;
      }}
    this.setData({
      prices: price,
      number: numb
    });
    console.log(price);
    console.log(numb);
  },


  add(e) {
    

    this.data.list[e.target.dataset.index].number++ ,
    this.setData({
      list: this.data.list
    });
    
      this.hh();
  },
  jian(e) {
  
    if (this.data.list[e.target.dataset.index].number > 1) {
      this.data.list[e.target.dataset.index].number-- ,
      this.setData({
        list: this.data.list
      });
      
    }
    this.hh()
  },
  radios(e) {
    var list = this.data.list;
    list[e.target.dataset.index].selected = !list[e.target.dataset.index].selected;
    this.setData({
      list: list
    });
    this.hh()
  },
  radi() {
    this.data.yanzheng = !this.data.yanzheng;
    this.setData({
      yanzheng: this.data.yanzheng 
    });
    console.log(this.data.yanzheng);

  },
  chall() {

    this.all = !this.data.all;
    this.setData({
      all: this.all 
    });
    var list = this.data.list;

    for (var i = 0; i < list.length; i++) {
      if (this.all == list[i].selected) {
        this.hh()
      } else {
        list[i].selected = !list[i].selected,
          this.setData({
          list: list
          });
          this.hh()
      }
    }
  }
  })
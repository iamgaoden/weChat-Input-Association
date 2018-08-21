// pages/search/search.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    showPop:false,            // 是否显示弹出层
    array: [                  // 搜索结果假数据
      {
        id: 0,
        name: '数据1'
      },
      {
        id: 1,
        name: '数据2'
      },
      {
        id: 2,
        name: '数据3'
      },
      {
        id: 3,
        name: '数据4'
      }
    ],
  },
  // 输入监听
  inputListener:function(){
    console.log("用户输入事件触发！")
    this.setData({
      showPop:true
    })
  },
  // 选中监听
  clickListener: function (e) {
    console.log("用户选中事件触发！")
  },
  // 失焦监听
  blurListener: function () {
    console.log("input失焦事件触发！")
    var that =this
    setTimeout(function(){
      that.setData({
        showPop: false
      })
    },200)
  },
  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
  
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
  
  }
})
// components/search-connect.js
var app = getApp()
Component({
  /**
   * 组件的属性列表
   */
  properties: {
    isShow: {
      type: 'Boolean'
    },
    searchArray:{
      type:'array'  
    },
  },
  /**
   * 组件的初始数据
   */
  data: {

  },

  /**
   * 组件的方法列表
   */
  methods: {
    /**
     * 客户输入框--输入
     */
    searchInput: function(e) {
      this.triggerEvent('inputevent', {})
    },

    /**
     * 客户输入框--失去焦点
     */
    searchBlur: function() {
      this.triggerEvent('blurevent', {})
    },

    /**
     * 客户输入框--客户选择事件
     */
    dataClick: function(e) {
      this.setData({
        message: e.target.dataset.name
      })
      this.triggerEvent('clickevent', {})
    },

    /**
     * 生命周期函数--监听页面初次渲染完成
     */
    onReady: function() {

    },
  }
})
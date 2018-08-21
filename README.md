# weChat-Input-Association
微信小程序输入联想功能

1. 属性方法列表

  属性名 	          类型	           说明
  isShow            Boolean          弹出层状态
  searchArray       Array            搜索结果
  dataId            Number           搜索结果索引值
  bindinputevent    EventHandle      用户输入时触发
  bindblurevent     EventHandle      用户选择/点击搜索结果时触发
  bindclickevent    EventHandle      input失去焦点时触发
  
  
2.使用方法：

示例代码：
1.wxml页面引入组件search-connect
<search-connect bindinputevent="inputListener" bindblurevent="blurListener" bindclickevent="clickListener"  isShow="{{showPop}}" searchArray="{{array}}" dataId='{{item.id}}'></search-connect>

data: {
    showPop:false,            // 默认隐藏搜索弹出层
    array: [                  // 搜索结果设置假数据
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
  // 失去焦点监听
  blurListener: function () {
    console.log("input失焦事件触发！")
    var that =this
    setTimeout(function(){
      that.setData({
        showPop: false
      })
    },200)
  }
  
  3.demo数据为假数据，使用者可在自定义事件中发起request请求，获取真实搜索结果数据。
  

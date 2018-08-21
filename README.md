# weChat-Input-Association
微信小程序输入联想功能

Getting Started.使用手册
============
## 属性方法列表

 #### 属性名	说明
  * isShow      弹出层状态
  * search      搜索结果
  * dataId      搜索结果索引值
  * bindinputevent      用户输入时触发
  * bindblurevent	用户选择/点击搜索结果时触发
  * bindclickeventinput	失去焦点时触发
  
  
## 使用方法：

* 在开发者工具上运行代码包

* wxml页面引入search-connect组件
* search.js页面操作自定义事件
 	* 输入监听 inputListener
  	* 选中监听 clickListener
  	* 失去焦点监听blurListener
  
  ##### demo数据为假数据，使用者可在自定义事件中发起request请求，获取真实搜索结果数据。
  

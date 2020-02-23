// pages/my/my.js
Page({
  data: {
    value: ''
  },

  onLoad () {
    
  },
  onChange(event) {
    // event.detail 为当前输入的值
    console.log(event.detail);
  }
})
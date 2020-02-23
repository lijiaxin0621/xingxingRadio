//index.js
Page({
  data: {
    
  },
  onLoad: function(options){
  },
  handleToggle(){
    wx.switchTab({
        url:'/pages/admin/admin'
    })
}
})

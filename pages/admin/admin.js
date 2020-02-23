// pages/admin/admin.js
const http = require("../../models/http")
Page({
  data: {
    banners:[],
    hotDj:[], 
    recommend:[],
    toplist:[]
  },
  onLoad: async function () {
    var res = await http.getBanner();
    var banners = res.data.banners.slice(0,5);
    var res = await http.getHotDj();
    var hotDj = res.data.djRadios.slice(0,4);
    var res = await http.getRecommend();
    var recommend = res.data.programs.slice(0,4);
    var res = await http.getToplist();
    var toplist = res.data.toplist.slice(0,4);
    this.setData({
      banners,
      hotDj,
      recommend,
      toplist
    })
  }
}) 
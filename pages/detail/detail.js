// pages/detail/detail.js
const http = require("../../models/http")
Page({
  data: {
    detail:[]
  },
  onLoad: async function(options){
    console.log(options)
    var {id} = options;
    var res = await http.getDetail(id);
    var detail = [res.data.program];
    this.setData({
      detail
    })
  },
})
// pages/sort/sort.js
const http = require("../../models/http")
Page({
  data: {
    star: [],
    story:[],
    electron:[],
    create:[],
    emotion:[],
    book:[],
    active: 0
  },
  onLoad: async function () {
    var res = await http.getStar();
    var star = res.data.djRadios;
    var res = await http.getStory();
    var story = res.data.djRadios;
    var res = await http.getElectron();
    var electron = res.data.djRadios;
    var res = await http.getCreate();
    var create = res.data.djRadios;
    var res = await http.getEmotion();
    var emotion = res.data.djRadios;
    var res = await http.getBook();
    var book = res.data.djRadios;
    this.setData({
      star,
      story,
      electron,
      create,
      emotion,
      book
    })
  },
 
})

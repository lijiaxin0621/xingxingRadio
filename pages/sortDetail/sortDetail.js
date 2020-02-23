const http = require("../../models/http");
const audio = wx.getBackgroundAudioManager();
Page({
  data: {
    detail: [],
    list: [],
    isPlay: false,
    prevId:""
  },
  onLoad: async function (options) {
    var id = options.id;
    var res = await http.getSortDetail(id);
    var detail = [res.data.djRadio];
    var res = await http.getDjList(id);
    var list = res.data.programs;
    this.setData({
      detail,
      list
    })
  },
  handleClick(event) {
    var id = event.currentTarget.dataset.id;
    http.getPlay(id).then(res => {
      var url = res.data.data[0].url;
      if (this.data.isPlay) {
        audio.pause();
      } else {
        audio.src = url;
        audio.title = "lijiaxin"
      }
      this.setData({
        prevId:id,
        isPlay: !this.data.isPlay
      })
    })
  }
})
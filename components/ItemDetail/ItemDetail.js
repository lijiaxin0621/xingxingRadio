// components/DetailIndex/DetailIndex.js
const audio = wx.getBackgroundAudioManager();
const http = require('../../models/http')
Component({
  properties: {
    data:{
      type:Object,
      value:"",
    }
  },
  data: {
  },
  methods: {
    handleClick(){
      // var id = this.properties.data.id;
      var id = this.properties.data;
      console.log(id)
      console.log(this.properties.data)
      // http.getPlay(id).then(res=>{
      //    console.log(res.data)
      // })
      // var id = this.properties.data.mainSong.id;
      // console.log(this.properties.data)
      console.log(1)
      // DetailModel.getPlay(id).then(res => {
      //   var url= res.data.data[0].url;
      //   console.log(url)
      //  if(this.data.isPlay){
      //     audio.pause();
      //   }else{
      //     audio.src = url;
      //     audio.title = "lijiaxin"
      //   }
      //   this.setData({
      //     isPlay:!this.data.isPlay
      //   })
      // })
    }
  },
  options:{
    multipleSlots:true
  }
})

// components/ItemType/ItemType.js
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
      var id = this.properties.data.id;
      wx.navigateTo({
        url: '/pages/sortDetail/sortDetail?id='+id,
      });
    }
  }
})

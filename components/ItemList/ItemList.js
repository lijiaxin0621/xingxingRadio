// components/ItemList/ItemList.js
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
        url: '/pages/detail/detail?id='+id,
      });
    }
  },
  options:{
    multipleSlots:true
  }
})

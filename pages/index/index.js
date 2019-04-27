var startPoint;
var point = [];
Page({
  data: {
    animation:{},
    buttonTop: 0,
    buttonLeft: 0,
    seat:[]
  },
  onShow: function () {
    this.animation = wx.createAnimation({
      duration: 0,
      timingFunction: 'ease',
    })
  },
  canvasmove:function(e){
    var endPoint = e.touches[0];
    point.push({
      left: endPoint.clientX,
      top: endPoint.clientY
    });
    this.setData({
      seat:point
    })
  },
  // button拖动的三个方法
  buttonStart: function (e) {
    startPoint = e.touches[0]
  },
  buttonMove: function (e) {
    var that = this;
    setTimeout(function(){
      var endPoint = e.touches[0]
      that.animation.translate(endPoint.clientX, endPoint.clientY).step();
      that.setData({
        animationData: that.animation.export()
        // buttonTop: (endPoint.clientY - 20),
        // buttonLeft: (endPoint.clientX - 50)
      })
    },10);
   
  },
  buttonEnd: function (e) {
  //   console.log(e);
  //   var endPoint = e.changedTouches[0]
  //   this.setData({
  //     buttonTop: (endPoint.clientY - 20),
  //     buttonLeft: (endPoint.clientX - 50)
  //   })
  }
})
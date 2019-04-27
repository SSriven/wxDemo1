const obj = {
    people:function(name){
      return new obj.people.prototype.init(name);
    } 
}
obj.people.prototype = {
  constructor:obj.people,
  init: function (name) {
    this.name = name;
  },
  sayHello: function () {
    console.log(this.name + "hello");
  }
}
obj.people.prototype.init.prototype = obj.people.prototype;

export {obj}
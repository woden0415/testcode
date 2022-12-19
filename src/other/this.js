// call apply bind 

Function.prototype.myCall = function(_this, ..._args){
  _this = _this ? Object(_this) : window;
  _this['_newFunc'] = this;
  _this._newFunc(..._args)
  delete _this._newFunc; //删除fn
}

Function.prototype.myApply = function(_this, _args){
  _this = _this ? Object(_this) : window;
  _this['_newFunc'] = this;
  _this._newFunc(..._args)
  delete _this._newFunc; //删除fn
}
Function.prototype.myBind = function(_this, ..._args){
  _this = _this ? Object(_this) : window;
  _this['_newFunc'] = this;
  return function(){
    _this._newFunc(..._args)
  }
}

var obj1 = {
    name: "张三",
    age: 18,
    fn: function (city,love) {
        console.log(this.name,this.age,city,love);
    }
}
var obj2 = {
  name: "李四",
  age: 20
}
obj1.fn.myCall(obj2, '上海', 'lisiniang')
obj1.fn.myApply(obj2, ['上海', 'lisiniang'])
obj1.fn.myBind(obj2, '上海', 'lisiniang')()
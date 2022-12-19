
function deepClone (obj, cache = new WeakMap()){
  if(obj === null || typeof obj !== 'object') return obj;
  if(obj instanceof Date) return new Date(obj)
  if(obj instanceof RegExp) return new RegExp(obj)

  if(cache.get(obj)) return cache.get(obj) 
  let cloneObj = new obj.constructor()
  cache.set(obj, cloneObj)

  for(let key in obj) {
    if(obj.hasOwnProperty(key)) {
      cloneObj[key]  = deepClone(obj[key], cache)
    }
  }
  return cloneObj;
}

const obj = { name: 'Jack', address: { x: 100, y: 200 } }
obj.a = obj // 循环引用
const newObj = deepClone(obj)
console.log(newObj.address === obj.address)


class MyPromise {
  constructor(fn){
    this.status = 'pending'
    this.onFullfilledCallback = []
    this.onRejectCallback = null
    this.value = null;

    // 
    const resolve = (value)=>{
      if(this.status === 'pending') {
        this.status = 'fulfilled'
        this.value = value
        this.onFullfilledCallback.forEach((fn)=>{
          fn(value)
        })
      }
    }
    const reject = (reason)=>{
      if(this.status === 'pending') {
        this.status = 'reject'
        this.reason = reason;
        this.onRejectCallback(reason)
      }
    }

    try {
      fn(resolve, reject)
    } catch (err) {
      reject(err)
    }
  }

  then(fn1,fn2) {
    // 如果当前数据还没返回，就把回调先记录下来
    if(this.status === 'pending') {
      this.onFullfilledCallback.push(fn1)
      this.onRejectCallback = fn2
    }

    if(this.status === 'fulfilled') {
      // 此时已经拿到value了
      fn1(this.value)
    }

    if(this.status === 'reject') {
      fn2(this.reason)
    }
  }

}
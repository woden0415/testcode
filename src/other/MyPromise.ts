
enum enumPromiseStatus {
  PENDING = 'pending',
  FULFILLED = 'fulfilled',
  REJECTED = 'rejected'
}

class MyPromise {

  status: enumPromiseStatus = enumPromiseStatus.PENDING;
  resValue: any = null; // 返回结果
  error: Error = new Error(); // 错误结果
  resolveCallbacks: Array<Function> = []
  rejectCallback: Function = () => { }

  constructor(fn: Function) {

    const resolve = (result: any) => {
      if (this.status === enumPromiseStatus.PENDING) {
        this.status = enumPromiseStatus.FULFILLED
        this.resValue = result
        this.resolveCallbacks.forEach(func => {
          func(this.resValue)
        })
      }
    }
    const reject = function (_error: Error) {
      if (this.status === enumPromiseStatus.PENDING) {
        this.status = enumPromiseStatus.REJECTED
        this.error = _error
        this.rejectCallback(this.error)
      }
    }
    try {
      fn(resolve, reject)
    } catch (error) {
      this.rejectCallback(error)
    }
    
    return this;
  }

  then(fn1: Function, fn2: Function) {
    if (this.status === enumPromiseStatus.PENDING) {
      this.resolveCallbacks.push(fn1)
      this.rejectCallback = fn2
    }
    if (this.status === enumPromiseStatus.FULFILLED) {
      fn1(this.resValue)
    }
    if (this.status === enumPromiseStatus.REJECTED) {
      fn2&&fn2(this.error)
    }
  }

  catch(fn: Function) { 
    if (this.status === enumPromiseStatus.PENDING) { 
      this.rejectCallback = fn
    }
    if (this.status === enumPromiseStatus.REJECTED) { 
      fn(this.error)
    }
  }
}


/**
 * Promise 创建一个流程，执行异步/同步的流程
 * 需要使用者Promise执行的操作
 * 使用者注册异步成功和失败工具
 */

function test() {
  new MyPromise((resolve: Function, reject: Function) => {
    if (Math.random() - 0.5 > 0) {
      setTimeout(() => {
        if (Math.random() - 0.5 > 0) {
          resolve(`定时器，正确信息___${new Date()}`)
        } else {
          reject(new Error(`定时器，错误信息___${new Date()}`))
        }
      }, 1000);
    } else { 
      if (Math.random() - 0.5 > 0) {
        resolve(`正确信息___${new Date()}`)
      } else {
        reject(new Error(`错误信息___${new Date()}`))
      }
    }
    
  }).then((value: any) => {
    console.log('fulfilled__' + value)
  }, (error: Error) => {
    console.log('rejected__' + error.message)
  })
}


test()
test()
test()
test()
test()
test()
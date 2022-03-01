// 观察者模式

/**
 * 1. 定义事件源头 Source 
 * 2. 添加观察的人 Watcher
 * 3. 时间源头通知
 * 3. 执行观察人的方法
 */

// 事件类
class MyEvent {
  // 监听器存放在此处
  private watcherList: Set<MyWatcher>
  
  constructor() { 
    this.watcherList = new Set([]);
  }
  
  
  addWatcher(watcher: MyWatcher) { 
    this.watcherList.add(watcher)
  }

  delWatcher(watcher: MyWatcher) { 
    this.watcherList.delete(watcher)
  }

  // 广播消息
  broadcast(value: any) { 
    this.watcherList.forEach((watcher) => { 
      watcher.cb(value)
    })
  }
}


interface MyWatcher {
  cb: { (value: any): void; }
}

// 任何类都可以实现MyWatcher来获取监听Event

class MyWatcher1 implements MyWatcher {

  // 实现接口方法
  cb(value: any) {
    console.log(`MyWatcher1拿着---${value}----做MyWatcher1的事`)
  }
  func1() { 
    console.log('MyWatcher1自己的方法');
  }
}

class MyWatcher2 implements MyWatcher {

  // 实现接口方法
  cb(value: any) {
    console.log(`MyWatcher2拿着---${value}---做MyWatcher2的事`)
  }

  func2() {
    console.log('MyWatcher2自己的方法');
   }
}

function main() { 
  const myEvent = new MyEvent()
  const myWatcher1 = new MyWatcher1();
  const myWatcher2 = new MyWatcher2();

  myEvent.addWatcher(myWatcher1)
  myEvent.addWatcher(myWatcher2)

  setInterval(() => { 
    const num = Math.random() * 100;
    myEvent.broadcast(num.toFixed(3))
  }, 1000)

}

main()
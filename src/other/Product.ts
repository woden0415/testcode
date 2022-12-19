/* 
 * @description 定义生产消费者模型
 * @Author: wangdong 
 * @Date: 2022-10-18 18:44:15 
 * @Last Modified by: wangdong
 * @Last Modified time: 2022-10-18 19:01:34
 * 生产者->缓冲区->消费者
 */

export class CacheQueue<T> {
  private queue: Array<T> = [];

  /**
   * @description 添加数据
   * @param item 
   */
  public add(item: T): void {
    this.queue.push(item)
  }

  /**
   * @description 返回队列长度
   * @returns 
   */
  public get() {
    return this.queue || [];
  }

  /**
   * @description 获取数据并移出队列
   * @returns 
   */
  public shift(): T {
    return this.queue.shift();
  }
}


/**
 * @description 生产者
 */

export class Producer<T> {
  cacheQueue: CacheQueue<T> = null;
  constructor(cacheQueue: CacheQueue<T>) {
    this.cacheQueue = cacheQueue
  }

  add(item: T) {
    this.cacheQueue.add(item)
  }
}


/**
 * @description 消费数据
 */
export class Consumer<T> {
  cacheQueue: CacheQueue<T> = null;
  constructor(cacheQueue: CacheQueue<T>) {
    this.cacheQueue = cacheQueue
    this.run()
  }

  run() {
    setInterval(() => {
      if (this.cacheQueue.get().length > 0) {
        const _item = this.cacheQueue.shift();
        this.consumerMethod(_item)
      }
    }, 0)
  }

  // 消费方法
  consumerMethod(item: T) {
    console.log('消费数据' + item)
  }
}

const _queue = new CacheQueue()
const _producer = new Producer(_queue)
const _consumer = new Consumer(_queue)

setInterval(() => {
  if (Math.random() > 0.5) {
    let _num1 = Math.random() * 1000
    console.log('生产者' + _num1);
    _producer.add(_num1)
  }
}, 1000)


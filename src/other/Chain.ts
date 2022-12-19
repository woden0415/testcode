
// 为已有方法添加链式调用

class Person {
  private name: string
  private age: number
  private height: number
  private job: string
  constructor(name: string) {
    this.name = name;
    this.age = 0
    this.height = 0;
    this.job = '无'
  }

  setAge(age: number) {
    this.age = age
    return this;
  }
  setHeight(height: number) {
    this.height = height
    return this;
  }
  setJob(job: string) {
    this.job = job
    return this;
  }

  // 获取类属性信息
  getInfo() { 
    return {
      name: this.name,
      age: this.age,
      height: this.height,
      job: this.job,
    }
  }
}

const person = new Person('zhangsan')
person.setAge(18)
  .setHeight(180)
  .setJob('程序员')

console.log('person.getInfo() :>> ', person.getInfo());



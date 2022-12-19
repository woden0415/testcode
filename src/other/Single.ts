class SingleLazy {
  private static instance: SingleLazy = null;

  private constructor() { }

  public static getInstance() {
    if (this.instance) return this.instance
    this.instance = new SingleLazy()
    return this.instance
  }
}

const instance1 = SingleLazy.getInstance()
console.log('instance1 :>> ', instance1);


class SingleHungry {
  private static instance: SingleHungry = new SingleHungry()

  private constructor() { }

  public static getInstance() {
    return this.instance
  }
}

const instance2 = SingleHungry.getInstance()
console.log('instance2 :>>', instance2)


class Multi {
  private static maxInstance = 3; // 最多三个实例
  private static instanceList: Array<Multi> = ((): Array<Multi> => {
    let arr = []
    for (let i = 0; i < this.maxInstance; i++) {
      arr.push(new Multi())
    }
    return arr
  })();

  private static point = 0; // 指向某个实例的指针

  private constructor() { }

  // 实例指针从0开始，不断移动
  public static getInstance() {
    let _p = this.point
    this.point = (this.point + 1) % this.maxInstance;
    return this.instanceList[_p]
  }
}

const singleMulti1 = Multi.getInstance();
const singleMulti2 = Multi.getInstance();
const singleMulti3 = Multi.getInstance();
const singleMulti4 = Multi.getInstance();

console.log('singleMulti1===singleMulti2 :>> ', singleMulti1 === singleMulti2);
console.log('singleMulti2===singleMulti3 :>> ', singleMulti2 === singleMulti3);
console.log('singleMulti1===singleMulti4 :>> ', singleMulti1 === singleMulti4)

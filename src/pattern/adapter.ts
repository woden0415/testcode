/*
 * @Author: wangdong 
 * @Date: 2023-03-13 16:02:59 
 * @Last Modified by: wangdong
 * @Last Modified time: 2023-03-13 17:18:06
 */
// 适配器模式

/**
 * eg: 定义英雄接口，有方法attack。近战1和近战2可以近战攻击，远程1可以远程攻击。
 * 版本更新，当一个条件下，近战有了远程攻击能力，复用远程1的攻击特效
 * 
 */
// 近战接口
interface IHeroClose { 
  attackClose: Function
}

class HeroClose1 implements IHeroClose { 
  attackClose() { 
    console.log('近距离攻击1');
  }
}
// class HeroClose2 implements IHeroClose { 
//   attackClose() { 
//     console.log('近距离攻击2');
//   }
// }


// 远程接口
interface IHeroFar {
  attackFar: Function
}

class HeroFar1 implements IHeroFar {
  attackFar() {
    console.log('远距离攻击');
  }
}

// 以上是之前版本现状

/**
 * 版本升级，近战1,2有20%机率触发远程攻击
 * 
 * 添加适配器
 */

// 类方式
class AdapterFarClass extends HeroFar1 implements IHeroClose {
  attackClose() {

    super.attackFar()
  }
}

// 对象方法
class AdapterFarInstance implements IHeroClose {
  heroFar1: HeroFar1
  constructor() { 
    this.heroFar1 = new HeroFar1();
  }
  attackClose() {
    this.heroFar1.attackFar()
  }
}

// 修改 HeroClose1，HeroClose2的attack，下面是模拟效果

class HeroClose1Copy implements IHeroClose{

  adapterFarClass: AdapterFarClass
  adapterFarInstance: AdapterFarInstance

  attackClose() { 
    if (Math.floor(Math.random() * 100) > 80) { 
      this.adapterFarClass = new AdapterFarClass();
      this.adapterFarInstance = new AdapterFarInstance()
      this.adapterFarClass.attackClose()
      this.adapterFarInstance.attackClose()
    } else {
      console.log('近距离攻击1');
    }
  }
}

// const heroClose1 = new HeroClose1()
const heroClose1Copy = new HeroClose1Copy()


for (let index = 0; index < 20; index++) {
  // heroClose1.attackClose();
  heroClose1Copy.attackClose();
}

/**
 * @description 玩家接口
 */
interface IPlayer { 
  status: Function
}

/**
 * @description 玩家类
 */
class Player implements IPlayer { 
  status() { 
    console.log('基础状态');
  }
}

/**
 * @description 抽象装饰类
 */
abstract class DecoratorBase implements IPlayer {
  player: Player
  status() { }
}

/**
 * @description 具体装饰类
 */
class DecoratorBlood extends DecoratorBase {
  player: Player; 
  constructor(player: Player) { 
    super()
    this.player = player
  }

  status() { 
    this.player.status()
    console.log('血量+100');
  }
}

class DecoratorFight extends DecoratorBase {
  player: Player;
  constructor(player: Player) {
    super()
    this.player = player
  }

  status() {
    this.player.status()
    console.log('战力+100');
  }
}


let player = new Player()
player = new DecoratorFight(player)
player = new DecoratorBlood(player)

player.status()
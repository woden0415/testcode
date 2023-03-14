// 依赖倒转原则

interface CarColor { 
  addPrice: Function
}

class ColorRed implements CarColor {
  addPrice() { 
    console.log('红色加价2w');
  }; 
}

class ColorPink implements CarColor {
  addPrice() {
    console.log('粉色加价3w');
  };
}

abstract class AbstractModel { 
  protected color: CarColor
  constructor(color: CarColor) {
    this.color = color;
  }
  public abstract price();
}

class Model3 extends AbstractModel {
  constructor(color: CarColor) { 
    super(color)
  }
  public price() {
    console.log('model3基础价格10w');
    this.color.addPrice()
  }
}
class ModelY extends AbstractModel {
  constructor(color: CarColor) {
    super(color)
  }
  public price() {
    console.log('modelY基础价格20w');
    this.color.addPrice()
    console.log('------------');
  }
}

const colorRed = new ColorRed()
const colorPink = new ColorPink()
const model3Red = new Model3(colorRed);
const model3Pink = new Model3(colorPink);

const modelYRed = new ModelY(colorRed);
const modelYPink = new ModelY(colorPink);

model3Red.price()
model3Pink.price()
modelYRed.price()
modelYPink.price()



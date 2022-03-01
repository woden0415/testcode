/**
 * 原型链
 */

function Foo(){}

const f1 = new Foo()
const f2 = new Foo()

// console.log(f1.__proto__ === Foo.prototype) // 实例的 __proto__ 是构造函数的prototype
// console.log(Foo.prototype.constructor === Foo) // 构造函数prototype属性的contructor属性指向构造函数
// console.log(Foo.prototype.__proto__ === Object.prototype)
// console.log(Object.prototype__proto__ === null)


console.log(Foo.__proto__ === Function.prototype)

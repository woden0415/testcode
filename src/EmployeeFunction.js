function Employee() {
  this.name = "";
  this.dept = "general";
}

function Manager(){
  Employee.call(this)
  this.reports=[]
}
Manager.prototype = Object.create(Employee.prototype);

function WorkerBee() {
  Employee.call(this)
  this.projects = [];
}
WorkerBee.prototype = Object.create(Employee.prototype);

function SalesPerson(){
  WorkerBee.call(this)
  this.quota = 100
  this.dept = 'sale'
}
SalesPerson.prototype = Object.create(WorkerBee.prototype)

function Engineer(){
  WorkerBee.call(this)
  this.machine = ''
  this.dept = 'engineering'
}
Engineer.prototype = Object.create(WorkerBee.prototype)


const engineer = new Engineer()
// console.log(engineer)
// console.log(engineer.__proto__ === Engineer.prototype)
// console.log(Employee.prototype === new Employee)
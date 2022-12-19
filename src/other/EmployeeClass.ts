
class Employee { 
  name: string = ''
  dept: string = 'general'
  constructor(name:string, dept:string) { 
    this.name = name;
    this.dept = dept
  }
}

class Manage extends Employee {
  reports: Array<Employee> = []
  constructor(name: string, dept: string) { 
    super(name, dept)
  }
}
class WorkerBee extends Employee { 
  projects: Array<string> = []
  constructor(name: string, dept: string) { 
    super(name,dept)
  }
}
class SalesPerson extends WorkerBee { 
  quota: number = 100
  constructor(name: string) {
    super(name, 'sales')
  }
}
class Engineer extends WorkerBee { 
  machine = ''
  constructor(name: string) {
    super(name, 'engineering')
  }
}

const engineer = new Engineer('张三')
console.log('engineer :>> ', engineer);

//use of the concept of __proto__ in js
const employees = {
  calcTax() {
    console.log("Calculating tax for employees");
  },
};

const emp1 = {
  salary: 50000,
  calcTax() {
    console.log("Calculating tax for emp1");
    //call the parent method
    employees.calcTax.call(this);
  },
};

emp1.__proto__ = employees; //setting the prototype of emp1 to employees

class ToyotaCar {
  constructor() {
    console.log("Creating a new Toyota car");
  }

  start() {
    console.log("Starting the car");
  }
  stop() {
    console.log("Stopping the car");
  }
  setBrand(brand) {
    this.brand = brand;
  }
}

let fortuner = new ToyotaCar();
fortuner.setBrand("Fortuner");
let lexus = new ToyotaCar();
lexus.setBrand("Lexus");
console.log(fortuner);
console.log(lexus);

//use of construcotr in class and is automatically invoked when an object is created

//use of inheritance in js
class Car {
  constructor(brand, model) {
    this.brand = brand;
    this.model = model;
  }
}
class ElectricCar extends Car {
  constructor(brand, model, batteryCapacity) {
    super(brand, model); // Call the parent class constructor
    this.batteryCapacity = batteryCapacity;
  }

  displayInfo() {
    console.log(
      `Brand: ${this.brand}, Model: ${this.model}, Battery Capacity: ${this.batteryCapacity} kWh`
    );
  }
}

const tesla = new ElectricCar("Tesla", "Model S", 100);
tesla.displayInfo(); // Output: Brand: Tesla, Model: Model S, Battery Capacity: 100 kWh
class Person {
  constructor() {
    this.species = "Homo sapiens";
    console.log("Enter parent constructor");
  }
  eat() {
    console.log("Eating");
  }
  sleep() {
    console.log("Sleeping");
  }
  work() {
    console.log(
      "Parent class work method overridden if the child class has the same function or method implemented"
    );
  }
}

class Engineer extends Person {
  constructor(branch) {
    console.log("Enter child constructor");
    super(); // Call the parent class constructor
    this.branch = branch;
    console.log("Exit child constructor");
  }
  work() {
    console.log("Working");
  }
}

let rabin = new Engineer();
rabin.eat(); // Output: Eating

//use of super keyword in js
//syntax: super.methodName() or super.propertyName

//pracitce qn You are creating a website for your college.create a user wit 2 properties ,name and email .it also has method called viewData() that allows user to view website data

class User {
  constructor(name, email) {
    this.name = name;
    this.email = email;
    console.log("User created with name and email");
  }

  viewData() {
    console.log(`Name: ${this.name}, Email: ${this.email}`);
  }
}
let std1 = new User("Rabin", "test@gmail.com");
let std2 = new User("Sabin", "testS@gmail.com");
std1.viewData(); // Output: Name: Rabin, Email:
std2.viewData(); // Output: Name: Sabin, Email:

class Admin extends user {
  constructor(name, email) {
    super(name, email); // Call the parent class constructor
  }
  editData() {
    console.log("Editing data");
  }
}

let admin1 = new Admin("admin", "admin@gmail.com");

//error handling in js using try catch and finally in js
try {
  console.log("This is a try block");
} catch (error) {
  console.error("An error occurred:", error);
} finally {
  console.log("This is a finally block");
}

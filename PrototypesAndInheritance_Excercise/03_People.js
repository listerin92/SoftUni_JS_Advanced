function solve() {

    class Employee {
        constructor(name, age) {
            if (new.target === Employee) {
                throw new Error('Cannot instantiate directly.')
            }
            this.name = name;
            this.age = age;
            this.salary = 0;
            this.tasks = [];
        }
        work() {
            let currentTask = this.tasks.shift();
            console.log(this.name + currentTask);
            this.tasks.push(currentTask);
        }
        collectSalary() {
            console.log(`${this.name} received ${this.getSalary()} this month.`);
        }
        getSalary() {
            return this.salary;
        }
    }

    class Junior extends Employee {
        constructor(name, age) {
            super(name, age);
            this.tasks.push(' is working on a simple task.');
        }
    }

    class Senior extends Employee {
        constructor(name, age) {
            super(name, age);
            this.tasks.push(' is working on a complicated task.');
            this.tasks.push(' is taking time off work.');
            this.tasks.push(' is supervising junior workers.');
        }
    }

    class Manager extends Employee {
        constructor(name, age) {
            super(name, age);
            this.dividend = 0;
            this.tasks.push(' scheduled a meeting.');
            this.tasks.push(' is preparing a quarterly report.');
        }
        getSalary() {
            return this.salary + this.dividend;
        }
    }
    return { Employee, Junior, Senior, Manager };
}

let asdf = solve();

let junior = new asdf.Junior('Peter', 27);
junior.salary = 1200;
junior.collectSalary();
junior.work();

let senior = new asdf.Senior('Stefan', 40);
senior.salary = 2000;
senior.work();
senior.work();
senior.collectSalary();

let manager = new asdf.Manager('dragan', 45);
console.log(manager.salary);
manager.salary = 5000;
manager.dividend = 500;
manager.work();
manager.collectSalary();


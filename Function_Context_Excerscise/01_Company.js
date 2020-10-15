class Company {


    constructor() {
        this.departments = [];
    }
    addEmployee(username, salary, position, department) {
        for (const arg of [username, salary, position, department]) {
            this.validate(arg);
        }
        let employee = { username, salary, position }

        if (!this.departments[department]) {
            this.departments[department] = [];
        }
        this.departments[department].push(employee);



        return `New employee is hired. Name: ${username}. Position: ${position}`;
    }

    validate(value) {
        if (!value || value < 0) {
            throw new Error("Invalid input!");
        }
    }

    bestDepartment() {
        let maxAvgSalary = 0;
        let bestDept = '';

        for (const department in this.departments) {

            let size = this.departments[department].length;
            let maxSalary = this.departments[department]
                .map(e => e.salary)
                .reduce((acc, curr) => acc += curr);

            // this.departments[department].forEach(employee => {
            //     maxSalary += employee.salary;
            // });

            let currentAvgSalary = maxSalary / size;

            if (maxAvgSalary < currentAvgSalary) {
                maxAvgSalary = currentAvgSalary;
                bestDept = department;
            }

        }

        let result = [];
        result.push(`Best Department is: ${bestDept}`);
        result.push(`Average salary: ${maxAvgSalary.toFixed(2)}`);


        for (const key of this.departments[bestDept]) {
            result.push(`${key.username} ${key.salary} ${key.position}`);
        }
        return result.join('\n');
    }
}




let c = new Company();
c.addEmployee("Stanimir", 2000, "engineer", "Human resources");
c.addEmployee("Pesho", 1500, "electrical engineer", "Construction");
c.addEmployee("Slavi", 500, "dyer", "Construction");
c.addEmployee("Stan", 2000, "architect", "Construction");
c.addEmployee("Stanimir", 1200, "digital marketing manager", "Marketing");
c.addEmployee("Pesho", 1000, "graphical designer", "Marketing");
c.addEmployee("Gosho", 1350, "HR", "Human resources");
console.log(c.bestDepartment());



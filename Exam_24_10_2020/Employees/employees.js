function solveClasses() {
    class Developer {
        tasks = [];
        constructor(firstName, lastName) {
            this.firstName = firstName;
            this.lastName = lastName;
            this.baseSalary = 1000;
            this.experience = 0;
        }
        addTask(id, taskName, priority) {

            let task = {
                id,
                taskName,
                priority,
            }
            if (task.priority == 'high') {
                this.tasks.unshift(task);
            } else {

                this.tasks.push(task)
            }
            return `Task id ${id}, with ${priority} priority, has been added.`;
        }
        doTask() {
            let newestTask = this.tasks[0];
            this.tasks.shift();
            if (this.tasks.length == 0) {
                return `${this.firstName}, you have finished all your tasks. You can rest now.`
            }
            else {
                return newestTask.firstName;
            }
        }
        getSalary() {
            return `${this.firstName} ${this.lastName} has a salary of: ${this.baseSalary}`
        }
        reviewTasks() {
            let result = `Tasks, that need to be completed:\n`;
            for (const tsk of this.tasks) {
                result += `${tsk.id}: ${tsk.taskName} - ${tsk.priority}\n`;
            }
            return result.trim();
        }

    }

    class Junior extends Developer {
        constructor(firstName, lastName, bonus, experience) {
            super(firstName, lastName);
            this.baseSalary = 1000 + bonus;
            this.experience = experience;
        }
        learn(years) {
            this.experience += years;
        }


    }
    class Senior extends Developer {
        constructor(firstName, lastName, bonus, experience) {
            super(firstName, lastName);
            this.baseSalary = 1000 + bonus;
            this.experience = experience + 5;

        }

        changeTaskPriority(taskId) {
            let selectByTaskId = this.tasks.find(task => task.id == taskId);
            let high = selectByTaskId.priority.localeCompare('high');
            let low = selectByTaskId.priority.localeCompare('low');
            if (high == 0) {
                selectByTaskId.priority = 'low'
            }
            else if (low == 0) {
                selectByTaskId.priority = 'high';
            }
            // move to the first place
            this.tasks = this.tasks.filter(task => task.id !== taskId);
            this.tasks.unshift(selectByTaskId);
            return selectByTaskId;
        }
    }

    return {
        Developer,
        Junior,
        Senior,
    };
}

let classes = solveClasses();
const developer = new classes.Developer("George", "Joestar");
console.log(developer.addTask(1, "Inspect bug", "low"));
console.log(developer.addTask(2, "Update repository", "high"));
console.log(developer.reviewTasks());
console.log(developer.getSalary());

const junior = new classes.Junior("Jonathan", "Joestar", 200, 2);
console.log(junior.getSalary());
junior.learn(1);
console.log(junior.experience);

const senior = new classes.Senior("Joseph", "Joestar", 200, 2);
senior.addTask(1, "Create functionality", "low");
senior.addTask(2, "Update functionality", "high");
senior.addTask(3, "Create functionality1", "low");
console.log(senior.changeTaskPriority(1)["priority"]);
senior.doTask();
senior.doTask();
senior.doTask();


function solve() {

    let person = {
        firstName: 'Pesho',
        lastName: 'Ivanov',
        age: '22',
        grades: [2, 4, 2, 6],
        school: {
            name: '51-SOU',
            maxGrade: 12,
            address: 'str...',
            printReport: function (){
                console.log(`My school is: ${this.name}`);
            }
        },
        reportGrades: function () {
            console.log(`My grades are ${this.grades.join(', ')}`);
        },
        toString: function () {
            return `My name is ${this.firstName} ${this.lastName} and I study in ${this.school.name} school`
        }
    }
    person.location = {
        lat: 48.222, lng: 24.223,
    }

    console.log(`${person.firstName} - studies at ${person.school.name} school.`);
    person.reportGrades();
    console.log("report : " + person);
    person.school.printReport();
}
solve();

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
            printReport: function () {
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

    // object destructuring assignment
    // let { lastName, school, ...halfPerson } = person;
    // console.log(school);
    // console.log(halfPerson);

    let { reportGrades } = person;
    reportGrades.call({ grades: [4, 5, 6] }); // change context

    let { firstName } = person; // firstName is primitive data Type

    firstName = 'Ivan';
    console.log(person);

    let { school } = person; // school is object- reference type !!!!
    school.name = '55-SOU'; // change by reference so it is changed original object in person
    console.log(person.school.name);

    let { school: highSchool } = person; //school is the exact property object from the object, highSchool is the renamed destructuring object
    console.log(highSchool);
}
solve();
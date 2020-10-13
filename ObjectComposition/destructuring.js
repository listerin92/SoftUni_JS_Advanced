let numbers = [1,2,3,4,5];
let names = ['Pesho', 'Ivan', 'Dragan'];

let[firstName, secondName ] = names;

let[firstName2, ...others] = names;
console.log(firstName);
console.log(secondName);

console.log(firstName2);
console.log(others);
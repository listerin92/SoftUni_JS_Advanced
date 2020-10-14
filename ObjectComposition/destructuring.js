let numbers = [1, 2, 3, 4, 5];
let names = ['Pesho', 'Ivan', 'Dragan'];

let [firstName, secondName] = names;

let [firstName2, ...others] = names;
console.log(firstName);
console.log(secondName);

console.log(firstName2);
console.log(others);

const department = {
    name: "Engineering",
    data: {
        director: {
            name: 'John',
            position: 'Engineering Director'
        },
        employees: [],
        company: 'Quick Build'
    }
}
const { data: { director } } = department //nested object destructuring
console.log(director.name);
// director is { name: 'John', position: 'Engineering Director'}

let matrix = [
    [1, 2, 3],
    [4, 5, 6],
    [7, 8, 9],

];

let [[firstElement, secondElement], secondRow] = matrix;
console.log(firstElement);
console.log(secondElement);
console.log(secondRow);

const employees =
    [{ name: 'John', position: 'worker' },
    { name: 'Jane', position: 'secretary' }]

const [{ name }] = employees // name is 'John'
console.log(name);


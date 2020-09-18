let names = ['pesho', 'gosho', 'ivan'];


names.pop();
names.push('Dragan');
names.push('Traicho');
names.push('Ivan');
//console.log(names);

//names.splice(1,1);
let result = names.push('Stat');
console.log(result);
names.length = 10;
names.fill(0,5);
names.reverse();
console.log(names);

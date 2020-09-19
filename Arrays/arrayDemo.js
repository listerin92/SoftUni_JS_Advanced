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
//names.fill(0,5);
names.reverse();
let nums = [1,5,10,0,3,20];
nums.sort((a,b) => a-b);
names.sort((a,b) => a.localeCompare(b));
let res = names.indexOf('pesho');
console.log(names);
console.log(res);
names.splice(3);
console.log(names.includes('pesho'));
console.log(names);

let sum = names.reduce((a, x) => a + x[0], '');
console.log(sum);

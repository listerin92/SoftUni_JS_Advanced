function sum(a,b)
{
    let sum = a + b;
    return sum;
}
let result = sum(3,5);
console.log(result);

let multiply = function(a,b)
{
    return a * b;
}

let product = multiply(2,5);
console.log(product);

let subtract = (a, b) => a - b;
let subResult = subtract(6,3);
console.log(subResult);

let double = a => a * 2;
let doubled = double(5);

console.log(doubled);
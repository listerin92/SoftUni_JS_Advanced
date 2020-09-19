function solve(numbers){
    numbers.sort((a,b) => a - b);
    console.log(numbers[0] + ' '+ numbers[1]);

}
solve([30, 15, 50, 5]);

function solve(numbers){
    numbers.sort((a,b) => b - a);
    console.log(numbers[0]);

}
solve([30, 15, 50, 5]);

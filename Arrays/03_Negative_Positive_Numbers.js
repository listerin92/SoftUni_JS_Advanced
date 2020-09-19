function solve(numbers){
    let result = [];
    numbers.forEach(element => {
        if (element < 0){
            result.unshift(element);
        }
        else {
            result.push(element);
        }
    });
    result.forEach(element => {
        console.log(element);
    });
}

solve([3, -2, 0, -1]);

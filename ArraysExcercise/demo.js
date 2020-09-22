function solve(arr) {
    let average = arr.reduce((total, amount, index, array) => {
        total += amount;
        if (index === array.length - 1) {
            return total / array.length;
        } else {
            return total;
        }
    });
    console.log(average);
}

solve([29.76, 41.85, 46.5]);

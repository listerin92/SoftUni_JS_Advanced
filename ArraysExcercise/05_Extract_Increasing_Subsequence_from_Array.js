function solve(arr) {
    let check = function (acc, x) { return acc < x };
    let currentBiggest = arr[0];
    arr.forEach(element => {

        if (element >= currentBiggest) {

            console.log(element);
            currentBiggest = element;
        }
    });
}

solve([1,
    2,
    3,
    4]

);

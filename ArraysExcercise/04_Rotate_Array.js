function solve(arr) {
    let n = arr.pop();
    let l = arr.length;
    let numRotation = n % l;

    let result = '';
    for (let i = 0; i < numRotation; i++) {
        let temp = arr.pop();
        arr.unshift(temp);
    }
    for (let i = 0; i < arr.length; i++) {
        result += arr[i] + ' ';
    }
    console.log(result.trim());
}

solve(['Banana',
    'Orange',
    'Coconut',
    'Apple',
    '15']
);
function solve(arr) {
    let n = arr.pop();
    let l = arr.length;
    let numRotation = n % l;

    for (let i = 0; i < numRotation; i++) {
        let temp = arr.pop();
        arr.unshift(temp);
    }
    console.log(arr.join(" "));
}

solve(['Banana',
    'Orange',
    'Coconut',
    'Apple',
    '15']
);
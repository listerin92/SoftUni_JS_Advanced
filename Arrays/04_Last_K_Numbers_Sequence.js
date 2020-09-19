function solve(n, k) {
    let arr = [1];
    let sum = 0;
    for (let i = 1; i < n; i++) {
        sum = 0;
        for (let j = 1; j <= k; j++) {

            let res = (typeof arr[i - j] !== 'undefined');
            sum += res ? arr[i - j] : 0;
        }
        arr[i] = sum;
    }
    console.log(arr);
}
solve(8, 2);

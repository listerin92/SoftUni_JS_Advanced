function solve(array) {
    let rowSum = array.map(r => r.reduce((a, b) => a + b));
    let colSum = array.reduce((a, b) => a.map((x, i) => x + b[i]));
    if (rowSum.every(a => a === rowSum[0])) {
        if (colSum.every(a => a === rowSum[0])) {
            if (rowSum[0] === colSum[0]) {
                console.log(true);
            }
        }
    }
    else {
        console.log(false);
    }

}
solve([
    [1, 2],
    [1, 1]]

);
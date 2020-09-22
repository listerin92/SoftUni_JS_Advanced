function solve(arr) {

    // let currentBiggest = arr[0];
    // arr.forEach(element => {

    //     if (element >= currentBiggest) {

    //         console.log(element);
    //         currentBiggest = element;
    //     }
    // });

    // let max = Number.MIN_SAFE_INTEGER;
    // let result = arr.filter(num => {
    //     if (num >= max) {
    //         max = num;
    //         return true;
    //     }
    //     else return false;
    // });
    // result.forEach(e => console.log(e));
    
    // let max = Number.MIN_SAFE_INTEGER;
    // let output = arr.reduce((acc, curr) =>{
    //     if (curr >= max) {
    //         max = curr;
    //         acc.push(max);
    //     }
    //     return acc;
    // }, []);
    // console.log(output.join("\n"));

    const incraseSubSequence = [];
    arr.forEach(x => {
        if (x >= Math.max(...incraseSubSequence)) {
            incraseSubSequence.push(x);
        }
    });
    console.log(incraseSubSequence.join("\n"));
}

solve([20, 3, 2, 15, 6, 1]);
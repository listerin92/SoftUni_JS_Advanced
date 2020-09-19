function solve(numbers) {
    // let maxFromAll = [];
    // for (let i = 0; i < numbers.length; i++) {
    //     numbers[i].sort((a,b) => b - a);
    //     maxFromAll.push(numbers[i][0]);
    // }
    // maxFromAll.sort((a,b) => b-a);
    // console.log(maxFromAll[0]);


    // let maxNumber = Number.MIN_SAFE_INTEGER;
    // numbers.forEach(row => {
    //     let currentMax = Number.MIN_SAFE_INTEGER;
    //     row.forEach(num => {
    //         if (currentMax < num){
    //             currentMax = num;
    //         }
    //     });
    //     if (maxNumber < currentMax){
    //         maxNumber = currentMax;
    //     }
    // });

    // let maxNumber = Number.MIN_SAFE_INTEGER;
    // numbers.forEach(row => {
    //     let currentMax = Math.max(...row);
    //     if (maxNumber < currentMax) {
    //         maxNumber = currentMax;
    //     }
    // });

    let maxNumber = numbers
    .map(row => Math.max(...row))
    .reduce((a,x) => Math.max(a,x), Number.MIN_SAFE_INTEGER);
    
    console.log(maxNumber);
}
solve([[3, 5, 7, 12],
[-1, 4, 33, 2],
[8, 3, 0, 4]]
);

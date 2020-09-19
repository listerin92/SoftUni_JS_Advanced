function solve(numbers) {
    let primaryDiagonalIndex = 0;
    let secondaryDiagonalIndex = numbers.length - 1;
    let pD = 0, sD = 0;
    numbers.forEach(element => {
        pD += element[primaryDiagonalIndex];
        sD += element[secondaryDiagonalIndex];
        
        primaryDiagonalIndex++;
        secondaryDiagonalIndex--;
        

    });
    console.log(pD + ' ' + sD);
    
}
solve([[3, 5, 17],
    [-1, 7, 14],
    [1, -8, 89]]
   );

function solve(arr){
    let step = Number(arr[arr.length-1]);
    // for (let i = 0; i < arr.length-1; i+=step) {
    //     console.log(arr[i]);
    // }
    arr.forEach((num, index) =>  {
        if (index % step == 0) {
            console.log(num);
        }
    });
}
solve(['5', 
'20', 
'31', 
'4', 
'20', 
'2']);
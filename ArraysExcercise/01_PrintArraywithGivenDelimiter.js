function solve(arr) {
    let result = '';
    let delimter = arr[arr.length-1];
    for (let i = 0; i < arr.length-2; i++) {
        result += arr[i] + delimter;
    }
    result+=arr[arr.length-2];
    console.log(result);
}
solve(['How about no?', 
'I',
'will', 
'not', 
'do', 
'it!', 
'_']

);

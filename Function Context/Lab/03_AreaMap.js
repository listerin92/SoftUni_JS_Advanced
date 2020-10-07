function arrayMap(array, func) {
    let mappedArray = array.reduce((a, x) => {
        a.push(func(x))
        return a;
    }, []);


    return mappedArray;
}

let numbers = [1, 2, 3, 4, 5];
let mappedNumbers = arrayMap(numbers, x => x * 2);
console.log(mappedNumbers);
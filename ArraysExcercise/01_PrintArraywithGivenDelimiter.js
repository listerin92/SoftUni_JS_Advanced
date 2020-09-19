function solve(arr) {

    let delimter = arr.pop();
    console.log(arr.join(delimter));
}
solve(['One',
    'Two',
    'Three',
    'Four',
    'Five',
    '-']);

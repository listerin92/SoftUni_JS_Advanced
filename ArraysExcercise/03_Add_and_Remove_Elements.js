function solve(elements) {
    let counter = 1;
    let arr = [];
    elements.forEach(element => {

        if (element === 'add') {
            arr.push(counter);
        }
        else {
            arr.pop();
        }
        counter++;
    });

    if (arr.length !== 0) {
        console.log(arr.join("\n"));

    }
    else {
        console.log('Empty');
    }
}
solve(['add',
    'add',
    'remove',
    'add',
    'add']
);

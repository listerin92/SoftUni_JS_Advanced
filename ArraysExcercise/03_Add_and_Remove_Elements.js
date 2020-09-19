function solve(elements){
    let counter = 0;
    let arr = [];
    elements.forEach(element => {
        counter++;
        if (element === 'add') {
            arr.push(counter);
        }
        else if (element === 'remove' && arr.length !== 0) {
            arr.pop();
        }
    });
    if (arr.length !== 0) {
        arr.forEach(element => {
            console.log(element);
        });
    }
    else{
        console.log('Empty');
    }
}
solve(['add', 
'add', 
'remove', 
'add', 
'add']
);

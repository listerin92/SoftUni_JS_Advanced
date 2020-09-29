function solve(input) {
    let result = {};
    let juices = [];
    input.forEach(element => {
        let [product, quantity] = element.split(" => ");
        quantity = Number(quantity);
        let obj = { name: product, quantity };
        if (!result[product]) {
            result[product] = Number(quantity);
        }
        else {
            result[product] += Number(quantity);
        }
    });
    result.forEach(element => {
        let bottles = Math.floor(element.quantity / 1000);
        if (bottles >= 1) {
            console.log(`${element.name} => ${bottles}`);
        }
    });
    console.log(result);

}

solve(['Kiwi => 234',
    'Pear => 2345',
    'Watermelon => 3456',
    'Kiwi => 4567',
    'Pear => 5678',
    'Watermelon => 6789']

);
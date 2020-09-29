function solve(input) {
    let result = {};
    let juices = {};
    input.forEach(element => {
        let [product, quantity] = element.split(" => ");
        quantity = Number(quantity);

        if (!result[product]) {
            result[product] = quantity;
        }
        else {
            result[product] += quantity;
        }

        let bottles = Math.floor(result[product] / 1000);
        if (bottles > 0) {
            juices[product] = bottles;
        }
    });
    for (const key in juices) {

        console.log(`${key} => ${juices[key]}`);
    }
}

solve(['Kiwi => 234',
    'Pear => 2345',
    'Watermelon => 3456',
    'Kiwi => 4567',
    'Pear => 5678',
    'Watermelon => 6789']

);
function solve(input) {
    function sortObjectByKeys(o) {
        return Object.keys(o).sort().reduce((r, k) => (r[k] = o[k], r), {});
    }
    let obj = {};
    input.forEach(element => {
        let [product, price] = element.split(" : ");
        price = Number(price);
        obj[product] = price;
    });

    let sortedObj = sortObjectByKeys(obj);

    let currentKey;
    for (const key in sortedObj) {
        if (currentKey !== key[0]) {
            currentKey = key[0];
            console.log(currentKey);
        }
        console.log(`  ${key}: ${sortedObj[key]}`);
    }
}

solve(['Appricot : 20.4',
    'Fridge : 1500',
    'TV : 1499',
    'Deodorant : 10',
    'Boiler : 300',
    'Apple : 1.25',
    'Anti-Bug Spray : 15',
    'T-Shirt : 10']
);
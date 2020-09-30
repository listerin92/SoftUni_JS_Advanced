function solve(input) {
    // let result = {};
    // input.forEach(element => {
    //     let [brand, model, produced] = element.split(" | ");
    //     produced = Number(produced);
    //     if (!result[brand]) {
    //         result[brand] = [];
    //     }

    //     let obj = { model, produced };
    //     result[brand].push(obj);
    //     if (result[brand][0].model === model) {
    //         result[brand][0].produced += produced;
    //     }


    // });
    let result = new Map();
    for (let line of input) {
        let tokens = line.split(" | ").filter(w => w !== "");
        let brand = tokens[0];
        let model = tokens[1];
        let quantity = Number(tokens[2]);
 
        if (result.has(brand)) {
            if (result.get(brand).has(model)) {
                result.get(brand).set(model,  result.get(brand).get(model) + quantity);
            } else {
                result.get(brand).set(model, quantity);
            }
        } else {
            let modelsAndTotalSold = new Map();
            modelsAndTotalSold.set(model, quantity);
            result.set(brand, modelsAndTotalSold);
        }
    }

    // for (const key in result) {
    //     console.log(key);
    //     for (const iterator of result[key]) {
    //         console.log(`####${iterator.model} -> ${iterator.produced}`);
    //     }
    // }
    for (let [br, modell] of result) {
        console.log(`${br}`);
        for (let [model, totalSold] of modell) {
            console.log(`###${model} -> ${totalSold}`);
        }
    }
}

solve(['Audi | Q7 | 1000',
    'Audi | Q6 | 100',
    'BMW | X5 | 1000',
    'BMW | X6 | 100',
    'Citroen | C4 | 123',
    'Volga | GAZ-24 | 1000000',
    'Lada | Niva | 1000000',
    'Lada | Jigula | 1000000',
    'Citroen | C4 | 22',
    'Citroen | C5 | 10']
);
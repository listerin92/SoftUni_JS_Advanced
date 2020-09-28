function solve(input) {
    let dataMatrix = input
        .map(row => row.split('|')
            .filter(x => x != '')
            .map(x => x.trim()));

    let columns = (data, i) => data.map(x => x[i]);

    let towns = columns(dataMatrix, 0);
    let latitude = columns(dataMatrix, 1);
    let longitude = columns(dataMatrix, 2);

    let arr = []

    for (let index = 1; index < towns.length; index++) {

        let obj = {};
        Object.defineProperty(obj, towns[0], {
            value: towns[index],
            writable: true,
            enumerable: true
        });
        Object.defineProperty(obj, latitude[0], {
            value: Math.round(latitude[index] * 100) / 100,
            writable: true,
            enumerable: true
        });
        Object.defineProperty(obj, longitude[0], {
            value: Math.round(longitude[index] * 100) / 100,
            writable: true,
            enumerable: true
        });
        arr.push(obj);

    }
    let result = JSON.stringify(arr);
    console.log(result);

}

solve(['| Town | Latitude | Longitude |',
    '| Sofia | 42.696552 | 23.32601 |',
    '| Beijing | 39.913818 | 116.363625 |']
);

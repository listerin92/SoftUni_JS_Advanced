function solve(input) {
    let heroes = [];
    // let data = input.map(x => x.split(' / '));
    // data.forEach(element => {
    //     let obj = {
    //         name: element[0],
    //         level: element[1],
    //         items: element[2]
    //     }
    //     heroes.push(obj);
    // });

    input.forEach((line) => {
        let [name, level, items] = line.split(" / ");
        level = Number(level);
        items = items.split(', ');

        let hero = { name, level, items }
        heroes.push(hero);
    });

    console.log(JSON.stringify(heroes));
}
solve(['Isacc / 25 / Apple, GravityGun',
    'Derek / 12 / BarrelVest, DestructionSword',
    'Hes / 1 / Desolator, Sentinel, Antara']
);

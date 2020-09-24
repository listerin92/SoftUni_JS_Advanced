function solve(input) {
    let dashboard = [[false, false, false],
    [false, false, false],
    [false, false, false]];

    let player = 'X', index = 0;
    let pl;
    for (const line of input) {
        let [row, col] = line.split(' ').map(num => Number(num));
        if (index >= 5) {
            pl = checkWin(dashboard, player);
            if (pl === 'X') {
                console.log("Player X wins!");
                break;
            } else if (pl === 'O') {
                console.log("Player O wins!");
                break;
            }
        }
        if (index >8) {
            break;
        }
        if (dashboard[row][col] !== false) {
            console.log("This place is already taken. Please choose another!");
            continue;
        }
        if (dashboard[row][col] === false && player !== 'O') {
            dashboard[row][col] = 'X';
            player = 'O';
            index++;
            continue;
        }
        if (dashboard[row][col] === false && player !== 'X') {
            dashboard[row][col] = 'O';
            player = 'X';
            index++;
            continue;
        }


    };

    function checkWin(array, player) {
        let rowCheckX, rowCheckO, colCheckX, colCheckO;

        let isEqualX = (currentVal) => currentVal === 'X';
        let isEqualO = (currentVal) => currentVal === 'O';
        for (const arr of array) {
            rowCheckX = arr.every(isEqualX);
            rowCheckO = arr.every(isEqualO);
            if (rowCheckX || rowCheckO) {
                break;
            }
        }


        let col = (array, i) => array.map(x => x[i]);

        for (let i = 0; i < array.length; i++) {
            let currentCol = col(array, i);
            colCheckX = currentCol.every(isEqualX);
            colCheckO = currentCol.every(isEqualO);
            if (colCheckX || colCheckO) {
                break;
            }
        }

        if (((array[0][0] === 'X') &&
            (array[1][1] === 'X') &&
            (array[2][2] === 'X')) ||

            ((array[0][2] === 'X') &&
                (array[1][1] === 'X') &&
                (array[2][0] === 'X'))) {

            return 'X';
        }
        if (((array[0][0] === 'O') &&
            (array[1][1] === 'O') &&
            (array[2][2] === 'O')) ||

            ((array[0][2] === 'O') &&
                (array[1][1] === 'O') &&
                (array[2][0] === 'O'))) {

            return 'O';
        }
        if (rowCheckX || colCheckX) {
            return 'X';
        } else if (rowCheckO || colCheckO) {
            return 'O';
        }
    }

    
    if (pl !== 'X' && pl !== 'O') {
        console.log("The game ended! Nobody wins :(");
    }
    dashboard.forEach(arr => {
        console.log(arr.join("\t"));
    });
}
solve(["0 1",
"0 0",
"0 1",
"0 1",
"0 1",
"0 1",
"0 1",
"0 1",
"0 1",
"0 1",
"0 1",
"0 1",
"0 1",
"0 1",
"0 1",
"0 1",
"0 1",
"0 1"]
);
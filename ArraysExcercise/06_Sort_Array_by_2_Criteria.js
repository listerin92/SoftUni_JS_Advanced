function solve(array) {
    function sortByLengthThenByAlphabetic(a, b) {
        if ((a.length - b.length) < 0) {
            return -1;
        }
        else if ((a.length - b.length) > 0) {
            return 1;
        }
        else if (a < b) {
            return -1;
        }
        else if (a > b) {
            return 1;
        } else return 0;
    }
    array.sort(sortByLengthThenByAlphabetic);

    array.forEach(element => {
        console.log(element);
    });
}
solve(['Isacc', 'Theodor', 'Jack', 'Harrison', 'George']
);
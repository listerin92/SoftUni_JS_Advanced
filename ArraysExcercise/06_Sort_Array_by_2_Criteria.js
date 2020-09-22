function solve(array) {
    function sortByLengthThenByAlphabetic(current, next) {
        if (current.length > next.length) {
            return 1;
        }
        else if (current.length === next.length) {
            return current.localeCompare(next);
        }
        else if (current.length < next.length) {
            return -1;
        }
    }
    array.sort(sortByLengthThenByAlphabetic);

    console.log(array.join("\n"));
}
solve(['test', 'Deny', 'omen', 'Default']);
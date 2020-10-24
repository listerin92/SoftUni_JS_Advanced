(function solve() {
    Array.prototype.last = function () {
        return this[this.length - 1];
    }
    Array.prototype.skip = function (n) {
        let result = [];
        result = this.slice(n);
        return result;
    }
    Array.prototype.take = function (n) {
        let result = [];
        result = this.slice(0, n);
        return result;
    }
    Array.prototype.sum = function () {
        let result = this.reduce((acc, current) => acc += current);
        return result;
    }
    Array.prototype.average = function () {
        let result = this.reduce((acc, current) => acc += current);
        let skipZeroes = this.reduce((acc, current) => acc += (current !== 0 ? 1 : 0))
        result = result / skipZeroes;
        return result;
    }

})()

let array = [1, 2, 3, 44, 0, 102, 52];
console.log(array.last());
console.log(array.skip(2));
console.log(array.take(4));
console.log(array.sum());
console.log(array.average());

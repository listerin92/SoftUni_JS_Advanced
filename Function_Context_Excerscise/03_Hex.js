class Hex {

    constructor(value) {
        this.value = value;
    }

    valueOf() {
        return this.value;
    }
    toString() {
        return `0x${this.value.toString(16).toUpperCase()}`;
    }
    plus(b) {
        let result = this.value + Number(b.valueOf());
        return new Hex(result);
    }
}

let FF = new Hex(255);
console.log(FF.toString());
FF.valueOf() + 1 == 256;
let a = new Hex(10);
let b = new Hex(5);
console.log(a.plus(b).toString());
console.log(a.plus(b).toString() === '0xF');

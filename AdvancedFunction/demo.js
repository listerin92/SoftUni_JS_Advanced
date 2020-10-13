function solve() {
    let str = 'asdf';
    return {
        append: (s) => str += s,
        removeStart: (n) => str = str.substring(n),
        removeEnd: (n) => str = str.substring(0, str.length - n),
        print: () => console.log(str),

    }
}
let solver = solve();
solver.append('asdf');
solver.print();
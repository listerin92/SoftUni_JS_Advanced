let dataArray =
    [
        { id: "a", score: 1 },
        { id: "b", score: 2 },
        { id: "c", score: 5 },
        { id: "a", score: 3 },
        { id: "c", score: 2 },];
let res1 = dataArray.reduce((acc, curr, index, array) => {
    let same = acc.find(e => e.id === curr.id);
    if (!same) {
        acc.push(curr);
    } else {
        same.score += curr.score;
    }
    return acc;
}, []);
console.log(res1);
//[ { id: 'a', score: 4 }, { id: 'b', score: 2 }, { id: 'c', score: 7 } ]

let students = [
    { name: 'Pesho', score: 1 },
    { name: 'Gosho', score: 2 },
    { name: 'Pesho', score: 1 },
    { name: 'Gosho', score: 3 },
    { name: 'Stamat', score: 2 },
    { name: 'Mariya', score: 5 },
];


function aggregate(acc, currentStudent) {
    let student = acc.find(x => x.name == currentStudent.name);

    if (student) {
        student.score += currentStudent.score;
    }
    else {
        acc.push(currentStudent);
    }

    return acc;
}

let result = students.reduce(aggregate, []);

console.log(result);
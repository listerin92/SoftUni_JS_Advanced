function solve(input) {

    let output = '<table>\n';
    let employees = [];

    input.forEach(e => {
        employees.push(JSON.parse(e));
    });
    
    employees.forEach(employee => {
        output += '\t<tr>\n';
        // output += '\t\t<td>' + employee.name + '</td>\n'
        // output += '\t\t<td>' + employee.position + '</td>\n'
        // output += '\t\t<td>' + employee.salary + '</td>\n'
        Object.values(employee).forEach(v => {
            output += `\t\t<td>${v}</td>\n`;
        })
        output += '\t</tr>\n';
    });
    output += '</table>'
    console.log(output);
}

solve(['{"name":"Pesho","position":"Promenliva","salary":100000}',
    '{"name":"Teo","position":"Lecturer","salary":1000}',
    '{"name":"Georgi","position":"Lecturer","salary":1000}']
);
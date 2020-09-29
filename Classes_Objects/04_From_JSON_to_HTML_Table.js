function solve(input) {
    let students = JSON.parse(input);
    let first = students[0];


    let html = '<table>';
    html += `<tr>${Object.keys(first).map(x => `<th>${x}</th>`).join('')}</tr>`;

    students.forEach(student => {
        html += `<tr>${Object.values(student).map(x => `<td>${x}</td>`)}</tr>`;
    });
    html += '</table>';
    //html = escapeHTML(html);

    console.log(html);

    function escapeHTML(input) {
        input = String(input)
        .replace(/&/g, '&amp;')
        .replace(/</g, '&lt;')
        .replace(/>/g, '&gt;')
        .replace(/"/g, '&quot;')
        .replace(/'/g, '&#39;')
        
        return input;
    }
}

solve(['[{"Name":"Tomatoes & Chips","Price":2.35},{"Name":"J&B Chocolate","Price":0.96}]']);
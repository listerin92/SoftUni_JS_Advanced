function solve() {

    const expressionOutput = document.getElementById('expressionOutput');
    const resultOutput = document.getElementById("resultOutput");

    document.querySelector('.keys').addEventListener('click', symbolClicked);
    document.querySelector('.clear').addEventListener('click', clear);

    let equalHit;
    function clear() {
        expressionOutput.innerHTML = '';
        resultOutput.innerHTML = '';
        equalHit = false;
    };
    function symbolClicked(event) {

        let currentSymbol = event.target.value;
        let operator;


        if (checkForOperator(currentSymbol)) {

            let prevOperatorIndex = expressionOutput.innerHTML.length - 2;
            let prevOperator = expressionOutput.innerHTML[prevOperatorIndex];

            if (checkForOperator(prevOperator)) {
                expressionOutput.innerHTML = expressionOutput.innerHTML.replaceAt(prevOperatorIndex, currentSymbol);
                operator = currentSymbol;
                return;
            }
            operator = currentSymbol;
        }

        if (currentSymbol !== '=') {

            if (checkForOperator(currentSymbol)) {
                expressionOutput.innerHTML += ' ' + event.target.value + ' ';
            }
            else {
                if (equalHit) {
                    expressionOutput.innerHTML = '';
                    resultOutput.innerHTML = '';
                    equalHit = false;

                }
                expressionOutput.innerHTML += event.target.value;
            }
        }
        if (currentSymbol === '=') {
            let asdf = expressionOutput.innerHTML.toString();
            let leftOperand;
            let rightOperand;

            for (let index = 0; index < asdf.length; index++) {
                if (checkForOperator(asdf[index])) {
                    operator = asdf[index];
                    leftOperand = Number(asdf.split(operator)[0]);
                    rightOperand = Number(asdf.split(operator)[1]);
                    break;
                }
            }
            if (equalHit) {
                leftOperand = Number(resultOutput.innerHTML);
            }
            if (rightOperand === 0) {
                resultOutput.innerHTML = 'NaN';
                return;
            }
            switch (operator) {
                case '*':
                    resultOutput.innerHTML = leftOperand * rightOperand;
                    break;
                case '/':
                    resultOutput.innerHTML = leftOperand / rightOperand;
                    break;
                case '+':
                    resultOutput.innerHTML = leftOperand + rightOperand;
                    break;
                case '-':
                    resultOutput.innerHTML = leftOperand - rightOperand;
                    break;
                default:
                    break;
            }

            equalHit = true;
            console.log(expressionOutput.innerHTML);
            console.log(resultOutput.innerHTML);
        }

        function checkForOperator(symbol) {

            if (symbol === '/' ||
                symbol === '*' ||
                symbol === '+' ||
                symbol === '-') {
                return true;
            }
            else return false;
        }
    }
    String.prototype.replaceAt = function (index, replacement) {
        return this.substr(0, index) + replacement + this.substr(index + replacement.length);
    }
}
function writeToDom(div, string) {
    document.getElementById(div).innerHTML = string;
}

function multiply(n1, n2) {
    return n1 * n2;
}

function divide(n1, n2) {
    return n1 / n2;
}

function add(n1, n2) {
    return n1 + n2;
}

function subtract(n1, n2) {
    return n1 - n2;
}

function calc(num1, num2, operator) {
    let answer;
    switch(operator) {
        case 'multiply': answer = multiply(num1, num2); break;
        case 'divide': answer = divide(num1, num2); break;
        case 'add': answer = add(num1, num2); break;
        case 'subtract': answer = subtract(num1, num2); break;
        default: answer = 'nope';
    }
    writeToDom('result', answer); 
}
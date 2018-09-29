import {writeToDom} from '../helpers/util.js';

import {multiply, divide, add, subtract} from '../helpers/math.js';

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

export {calc};
import {addToDom} from './util.js';
import {calc} from '../components/calc.js';

let num1;
let operator;

function numberButt() {
    document.getElementById('calcMain').addEventListener('click', function() {
        let element = event.target;
        for(let i = 0; i < 10; i++) {
            if(element.id === ('butt' + i)) {
                let num = element.id.replace('butt', '');
                addToDom('result', num);
            }
        }
    })
}

function operatorButt() {
    document.getElementById('calcMain').addEventListener('click', function() {
        let element = event.target;
        switch(event.target.id) {
            case 'multiply': num1 = document.getElementById('result').innerHTML; operator = element.id; document.getElementById('result').innerHTML = ''; break;
            case 'divide': num1 = document.getElementById('result').innerHTML; operator = element.id; document.getElementById('result').innerHTML = ''; break;
            case 'add': num1 = document.getElementById('result').innerHTML; operator = element.id; document.getElementById('result').innerHTML = ''; break;
            case 'subtract': num1 = document.getElementById('result').innerHTML; operator = element.id; document.getElementById('result').innerHTML = ''; break;
            default: break;
        }
    })
}

function equalsButt() {
    document.getElementById('equals').addEventListener('click', function() {
        let num2 = document.getElementById('result').innerHTML;
        num1 = parseInt(num1, 10);
        num2 = parseInt(num2, 10);
        calc(num1, num2, operator);
    })
}

export {numberButt, operatorButt, equalsButt};
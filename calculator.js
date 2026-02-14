const prompt = require('prompt-sync')();

let number1 = Number(prompt('Digite um número: '));
let number2 = Number(prompt('Digite outro número: '));

let question = prompt('Você quer entrar ou sair? (S/N) ').toUpperCase();

while (question === 'S') {
    let operator = prompt('Digite um operador (+, -, *, /): ');
    
    if (operator === '+') {
        console.log(number1 + number2);
    } else if (operator === '-') {
        console.log(number1 - number2);
    } else if (operator === '*') {
        console.log(number1 * number2);
    } else if (operator === '/') {
        console.log(number1 / number2);
    };

    let sair = prompt('Sair do programa? (S/N)').toUpperCase();

    if (sair === 'S') {
        console.log('Você saiu do programa');
        break
    }
}
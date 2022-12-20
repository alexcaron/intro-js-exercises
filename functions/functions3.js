let rlsync = require('readline-sync');

let multiply = (a, b) => a*b;

let firstNumber = rlsync.question('Enter the first number: ');
let secondNumber = rlsync.question('Enter the second number: ');

console.log(`${firstNumber} * ${secondNumber} = ${multiply(firstNumber, secondNumber)}`);
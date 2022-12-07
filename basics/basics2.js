let n = 4936;
let thousands = ((n % 10000) - (n % 1000)) / 1000;
let hundreds  = ((n % 1000) - (n % 100)) / 100;
let tens = ((n % 100) - (n % 10)) / 10;
let ones = n % 10;

console.log(thousands);
console.log(hundreds);
console.log(tens);
console.log(ones);
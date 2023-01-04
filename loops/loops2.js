function factorial(number) {
  let total = number;
  for (let i = number - 1; i > 0; i -= 1) {
    total *= i;
  }
return total;
}

console.log(factorial(10));
console.log(factorial(100));
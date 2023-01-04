function factorial(number) {
  if (number > 1) {
    return number * factorial(number - 1);
  } else {
    return number;
  }
}

console.log(factorial(10));
console.log(factorial(100));
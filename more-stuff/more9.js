function isNegativeZero(value) {
  return 1 / value === -Infinity; // Only a value of -0 will result in -Infinity for this expression.
}

console.log(isNegativeZero(-0));
console.log(isNegativeZero(0));
console.log(isNegativeZero(42));
function isNotANumber(value) {
  return value !== value; // If value not equal itself, it must be NaN; no other value will meet this condition in JavaScript.
}

console.log(isNotANumber(45));
console.log(isNotANumber(NaN));
console.log(isNotANumber('foo'));
console.log(isNotANumber([0,1,3,]));
console.log(isNotANumber({name : "alex", age: 35,}));




let numbers1 = [1, 3, 5, 7, 9, 11];
let numbers2 = [];
let numbers3 = [2, 4, 6, 8];

function checkThree(array) {
  let onlyThrees = array.filter(element => element === 3);
  return onlyThrees.length > 0;
}

console.log(checkThree(numbers1)); // true
console.log(checkThree(numbers2)); // false
console.log(checkThree(numbers3)); // false




function maxList(list) {
  return list.reduce((currentMax, value) => {
    return value > currentMax ? value : currentMax;
  }, list[0]);
}

console.log(maxList([1, 6, 3, 2]));
console.log(maxList([-1, -6, -3, -2]));
console.log(maxList([2,2]));

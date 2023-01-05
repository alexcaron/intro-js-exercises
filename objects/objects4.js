let obj = {
  b: 2,
  a: 1,
  c: 3,
};

let newArray = Object.keys(obj);
newArray = newArray.map(key => key.toUpperCase());

console.log(newArray);
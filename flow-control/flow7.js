function longStringToCaps(string) {
  if (typeof string !== 'string') {
    console.log("Error: not a string");
    return;
  }
  
  return string.length > 10 ? string.toUpperCase() : string;
}

console.log(longStringToCaps("hello how are you"));
console.log(longStringToCaps(42));
console.log(longStringToCaps("test"));
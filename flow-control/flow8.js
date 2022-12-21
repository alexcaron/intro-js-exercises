function numberRange(num) {
  let msg;
  if (num >= 0 && num <= 50) {
    msg = "between 0 and 50";
  } else if (num >= 51 && num <= 100) {
    msg = "between 51 and 100";
  } else if (num > 100) {
    msg = "greater than 100";
  } else {
    msg = "less than 0";
  }
  console.log(`${num} is ${msg}`);
}

numberRange(25);
numberRange(75);
numberRange(125);
numberRange(-25);
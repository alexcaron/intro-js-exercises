let age = 35;
let jumpAhead = 10;
let numberOfJumps = 4;

console.log(`You are ${age} years old.`);

for (let i = 1; i <= numberOfJumps; i++)  {
  console.log(`In ${jumpAhead*i} years, you will be ${age+jumpAhead*i} years old.`);
}

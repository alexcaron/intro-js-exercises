let rlSync = require('readline-sync');

function getInfo(targetInfo) {
  return rlSync.question('What is your ' + targetInfo + '? ');
}

console.log('Hello, ' + getInfo('first name') + ' ' + getInfo('last name') + '!');
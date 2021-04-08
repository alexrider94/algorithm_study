const readline = require('readline');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

let input = [];

rl.on('line', (line) => {
  input.push(line);
}).on('close', () => {
  const charMap = {};

  for (let char of input[0].toLowerCase()) {
    charMap[char] = charMap[char] ? charMap[char] + 1 : 1;
  }

  let max = Math.max.apply(null, Object.values(charMap));
  let maxChar = '';
  let counter = 0;
  for (let char in charMap) {
    if (charMap[char] === max) {
      maxChar = char;
      counter++;
    }
    if (counter > 1) {
      console.log('?');
      return;
    }
  }

  console.log(maxChar.toUpperCase());
});

/*
Mississipi
zZa
z
baaa
 */

const readline = require('readline');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});
let input = [];

rl.on('line', (line) => {
  input.push(line);
}).on('close', () => {
  let n = input[0];
  let count = 1;
  let front = 2,
    back = 1;
  for (let i = 0; back < n; i = i + 6) {
    front += i;
    back += 6 + i;
    count++;
  }
  console.log(count);
});

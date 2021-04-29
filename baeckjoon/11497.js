const readline = require('readline');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});
let input = [];

rl.on('line', (line) => {
  input.push(line);
}).on('close', () => {
  let tCase = [];
  for (let i = 0; i < input[0]; ++i) {
    // 1 3 5   / 2 4 6
    tCase.push([input[2 * i + 1], input[2 * i + 2].split(' ').map((el) => parseInt(el))]);
  }

  for (let list of tCase) {
    let sorted = list[1].sort((a, b) => b - a);
    console.log(sorted);
  }
});
/*
3
7
13 10 12 11 10 11 12
5
2 4 5 7 9
8
6 6 6 6 6 6 6 6 */

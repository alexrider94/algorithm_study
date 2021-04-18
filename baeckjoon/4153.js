const readline = require('readline');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});
let input = [];

rl.on('line', (line) => {
  input.push(line);
}).on('close', () => {
  let list = input.slice(0, input.length - 1).map((el) => el.split(' ').map((el) => parseInt(el)));

  for (let data of list) {
    let d = data.sort((a, b) => a - b);
    if (Math.pow(d[0], 2) + Math.pow(d[1], 2) == Math.pow(d[2], 2)) console.log('right');
    else console.log('wrong');
  }
});
/*
6 8 10
25 52 60
5 12 13
0 0 0
*/

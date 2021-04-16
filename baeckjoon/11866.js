const readline = require('readline');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});
let input = [];

rl.on('line', (line) => {
  input.push(line);
}).on('close', () => {
  let [n, k] = input[0].split(' ').map((el) => parseInt(el));
  let queue = [...Array(n).keys()].map((x) => ++x);
  let c = k - 1;
  let result = '<';
  while (n--) {
    if (n == 0) result += queue[c];
    else result += queue[c] + ', ';
    queue.splice(c, 1);
    c = (c + k - 1) % queue.length;
  }
  result += '>';
  console.log(result);
});

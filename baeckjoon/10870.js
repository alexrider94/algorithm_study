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

  const fib = (n) => {
    if (n == 1) return 1;
    else if (n == 0) return 0;
    else return fib(n - 1) + fib(n - 2);
  };

  console.log(fib(n));
});

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

  // let dp = new Array(1000001).fill(0);

  for (let i = 1; i < n; ++i) {
    let sum = i;
    let number = i;
    while (number > 0) {
      sum += number % 10;
      number = Math.floor(number / 10);
    }

    if (sum == n) {
      console.log(i);
      return;
    }
    // if (dp[parseInt(i + sum)]) continue;
    // dp[parseInt(i + sum)] = i;
  }

  console.log(0);
});

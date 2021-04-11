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
  let dp = new Array(10001).fill(0);

  dp[1] = 1;
  dp[2] = 2;

  for (let i = 3; i <= n; ++i) {
    dp[i] = (dp[i - 2] + dp[i - 1]) % 10007;
  }

  console.log(dp[n]);
});

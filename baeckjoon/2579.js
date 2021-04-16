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
  let list = input.slice(1).map((el) => parseInt(el));

  let dp = Array(parseInt(n));

  dp[0] = list[0];
  dp[1] = Math.max(list[0] + list[1], list[1]);
  dp[2] = Math.max(list[0] + list[2], list[1] + list[2]);
  for (let i = 3; i < list.length; ++i) {
    dp[i] = Math.max(dp[i - 2] + list[i], dp[i - 3] + list[i - 1] + list[i]);
  }

  console.log(dp[n - 1]);
});

const readline = require('readline');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

let input = [];
let dp = Array.from(Array(31), () => Array(31).fill(0));
rl.on('line', (line) => {
  input.push(line);
}).on('close', () => {
  let T = input[0];
  let list = input.slice(1).map((el) => el.split(' ').map((el) => parseInt(el)));
  dp[2][2] = 1;

  for (let i = 1; i < 31; i++) dp[1][i] = i;

  for (let x = 2; x <= 30; ++x) {
    for (let y = 2; y <= 30; ++y) {
      if (x > y) continue;
      dp[x][y] = dp[x - 1][y - 1] + dp[x][y - 1];
    }
  }

  for (let i = 0; i < list.length; ++i) {
    console.log(dp[list[i][0]][list[i][1]]);
  }
});

/*
3
2 2
1 5
13 29
*/

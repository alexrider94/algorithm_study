let input = [];
require('readline')
  .createInterface({
    input: process.stdin,
    output: process.stdout,
  })
  .on('line', (line) => {
    input.push(line);
  })
  .on('close', () => {
    let t = input[0];
    let list = input.slice(1);
    let dp = Array.from({ length: 41 }, () => 0);
    dp[0] = 0;
    dp[1] = 1;
    dp[2] = 1;

    for (let i = 3; i < 41; ++i) {
      dp[i] = dp[i - 2] + dp[i - 1];
    }

    for (let i = 0; i < list.length; ++i) {
      if (list[i] == 0) {
        console.log('1 0');
      } else if (list[i] == 1) {
        console.log('0 1');
      } else console.log(dp[list[i] - 1] + ' ' + dp[list[i]]);
    }
  });

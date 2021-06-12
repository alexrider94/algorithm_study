let input = [];

require('readline')
  .createInterface({ input: process.stdin, output: process.stdout })
  .on('line', (line) => {
    input.push(line);
  })
  .on('close', () => {
    let n = parseInt(input[0]);
    let list = input[1].split(' ').map((el) => parseInt(el));

    let dp = Array.from(Array(n + 1), () => 0);

    for (let i = 1; i <= n; ++i) {
      for (let j = 1; j <= i; j++) {
        dp[i] = Math.max(dp[i], dp[i - j] + list[j - 1]);
      }
    }

    console.log(dp[n]);
  });
/*
4
1 5 6 7
-10

5
10 9 8 7 6
-50

10
1 1 2 3 5 8 13 21 34 55
-55

10
5 10 11 12 13 30 35 40 45 47
-50

4
5 2 8 10
-20

4
3 5 15 16
-18
*/

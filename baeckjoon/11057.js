/* 문제
오르막 수는 수의 자리가 오름차순을 이루는 수를 말한다. 이때, 인접한 수가 같아도 오름차순으로 친다.

예를 들어, 2234와 3678, 11119는 오르막 수이지만, 2232, 3676, 91111은 오르막 수가 아니다.

수의 길이 N이 주어졌을 때, 오르막 수의 개수를 구하는 프로그램을 작성하시오. 수는 0으로 시작할 수 있다.

입력
첫째 줄에 N (1 ≤ N ≤ 1,000)이 주어진다.

출력
첫째 줄에 길이가 N인 오르막 수의 개수를 10,007로 나눈 나머지를 출력한다. */

const readline = require('readline');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

let input = [];

rl.on('line', (line) => {
  input.push(line);
}).on('close', () => {
  let N = input[0];
  let dp = Array(10001)
    .fill(0)
    .map(() => Array(10).fill(0));
  for (let i = 0; i < 10; i++) dp[1][i] = 1;

  for (let i = 2; i <= N; ++i) {
    for (let j = 0; j < 10; j++) {
      for (let k = 0; k < j + 1; k++) {
        dp[i][j] += dp[i - 1][k];
        dp[i][j] = Math.floor(dp[i][j] % 10007);
      }
    }
  }
  let sum = 0;
  for (let i = 0; i < 10; i++) sum += dp[N][i];
  console.log((sum %= 10007));
});

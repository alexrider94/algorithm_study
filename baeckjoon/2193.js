/* 0과 1로만 이루어진 수를 이진수라 한다. 이러한 이진수 중 특별한 성질을 갖는 것들이 있는데, 이들을 이친수(pinary number)라 한다. 이친수는 다음의 성질을 만족한다.

이친수는 0으로 시작하지 않는다.
이친수에서는 1이 두 번 연속으로 나타나지 않는다. 즉, 11을 부분 문자열로 갖지 않는다.
예를 들면 1, 10, 100, 101, 1000, 1001 등이 이친수가 된다. 하지만 0010101이나 101101은 각각 1, 2번 규칙에 위배되므로 이친수가 아니다.

N(1 ≤ N ≤ 90)이 주어졌을 때, N자리 이친수의 개수를 구하는 프로그램을 작성하시오. */

//BigInt
// BigInt는 Number 원시 값이 안정적으로 나타낼 수 있는 최대치인 253 - 1보다 큰 정수를 표현할 수 있는 내장 객체입니다.
let input = [];
require('readline')
  .createInterface({ input: process.stdin, output: process.stdout })
  .on('line', (l) => {
    input.push(l);
  })
  .on('close', () => {
    let n = Number(input[0]);

    let dp = new Array(n + 1).fill(0);
    for (let i = 1; i <= n; ++i) {
      dp[i] = [];
    }

    dp[1] = [BigInt(0), BigInt(1)];

    for (let i = 2; i <= n; ++i) {
      dp[i][1] = dp[i - 1][0];
      dp[i][0] = dp[i - 1][0] + dp[i - 1][1];
    }
    console.log(String(dp[n].reduce((acc, cur) => acc + cur)));
  });

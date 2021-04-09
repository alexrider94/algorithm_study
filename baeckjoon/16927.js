/* 문제
크기가 N×M인 배열이 있을 때, 배열을 돌려보려고 한다. 배열은 다음과 같이 반시계 방향으로 돌려야 한다.

A[1][1] ← A[1][2] ← A[1][3] ← A[1][4] ← A[1][5]
   ↓                                       ↑
A[2][1]   A[2][2] ← A[2][3] ← A[2][4]   A[2][5]
   ↓         ↓                   ↑         ↑
A[3][1]   A[3][2] → A[3][3] → A[3][4]   A[3][5]
   ↓                                       ↑
A[4][1] → A[4][2] → A[4][3] → A[4][4] → A[4][5]
예를 들어, 아래와 같은 배열을 2번 회전시키면 다음과 같이 변하게 된다.

1 2 3 4       2 3 4 8       3 4 8 6
5 6 7 8       1 7 7 6       2 7 8 2
9 8 7 6   →   5 6 8 2   →   1 7 6 3
5 4 3 2       9 5 4 3       5 9 5 4
 <시작>         <회전1>        <회전2>
배열과 정수 R이 주어졌을 때, 배열을 R번 회전시킨 결과를 구해보자.

입력
첫째 줄에 배열의 크기 N, M과 수행해야 하는 회전의 수 R이 주어진다.

둘째 줄부터 N개의 줄에 배열 A의 원소 Aij가 주어진다.

출력
입력으로 주어진 배열을 R번 회전시킨 결과를 출력한다. */
const readline = require('readline');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

let input = [];

rl.on('line', (line) => {
  input.push(line);
}).on('close', () => {
  let [N, M, R] = input[0].split(' ').map((el) => parseInt(el));

  let matrix = input.slice(1).map((el) => el.split(' ').map((el) => parseInt(el)));

  let rowStart = 0;
  let rowEnd = N - 1;

  let colStart = 0;
  let colEnd = M - 1;
  const change = (rowStart, rowEnd, colStart, colEnd, R) => {
    for (let k = 0; k < R; k++) {
      let temp = matrix[rowStart][colStart];

      for (let i = colStart; i < colEnd; ++i) {
        matrix[rowStart][i] = matrix[rowStart][i + 1];
      }

      for (let i = rowStart; i < rowEnd; ++i) {
        matrix[i][colEnd] = matrix[i + 1][colEnd];
      }

      for (let i = colEnd; i > colStart; --i) {
        matrix[rowEnd][i] = matrix[rowEnd][i - 1];
      }

      for (let i = rowEnd; i > rowStart; --i) {
        matrix[i][colStart] = matrix[i - 1][colStart];
      }

      matrix[rowStart + 1][colStart] = temp;
    }
  };

  while (true) {
    let size = (rowEnd - rowStart + 1) * 2 + (colEnd - colStart + 1) * 2 - 4; //테두리의 길이
    change(rowStart, rowEnd, colStart, colEnd, R % size);
    rowStart += 1;
    rowEnd -= 1;
    colStart += 1;
    colEnd -= 1;
    if (rowStart > rowEnd || colStart > colEnd) break;
  }

  for (let i = 0; i < N; ++i) {
    for (let j = 0; j < M; ++j) {
      process.stdout.write(String(matrix[i][j]) + ' ');
    }
    process.stdout.write('\n');
  }
});

/*
4 4 2
1 2 3 4
5 6 7 8
9 10 11 12
13 14 15 16
*/

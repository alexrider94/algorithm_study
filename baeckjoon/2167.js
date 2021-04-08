/* 문제
2차원 배열이 주어졌을 때 (i, j) 위치부터 (x, y) 위치까지에 저장되어 있는 수들의 합을 구하는 프로그램을 작성하시오. 배열의 (i, j) 위치는 i행 j열을 나타낸다.

입력
첫째 줄에 배열의 크기 N, M(1 ≤ N, M ≤ 300)이 주어진다. 다음 N개의 줄에는 M개의 정수로 배열이 주어진다. 배열에 포함되어 있는 수는 절댓값이 10,000보다 작거나 같은 정수이다. 그 다음 줄에는 합을 구할 부분의 개수 K(1 ≤ K ≤ 10,000)가 주어진다. 다음 K개의 줄에는 네 개의 정수로 i, j, x, y가 주어진다(i ≤ x, j ≤ y).

출력
K개의 줄에 순서대로 배열의 합을 출력한다. 배열의 합은 231-1보다 작거나 같다. */

const readline = require('readline');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

let input = [];

rl.on('line', (line) => {
  input.push(line);
}).on('close', () => {
  let [N, M] = input[0].split(' ').map((el) => parseInt(el));
  let matrix = input.slice(1, N + 1).map((el) => {
    let res = el.split(' ').map((el) => parseInt(el));
    return res;
  });
  let K = input[N + 1];
  let sumCoord = input.slice(N + 2, N + 2 + K).map((el) => {
    let res = el.split(' ').map((el) => parseInt(el));
    return res;
  });
  let sumList = [];
  for (let a = 0; a < sumCoord.length; ++a) {
    let sum = 0;
    for (let i = sumCoord[a][0] - 1; i < sumCoord[a][2]; ++i) {
      for (let j = sumCoord[a][1] - 1; j < sumCoord[a][3]; ++j) {
        sum += parseInt(matrix[i][j]);
      }
    }
    sumList.push(sum);
  }
  sumList.map((el) => console.log(el));
});

/*
2 3
1 2 4
8 16 32
3
1 1 2 3
1 2 1 2
1 3 2 3
 */

/*
1 1
1
1
1 1 1 1
 */

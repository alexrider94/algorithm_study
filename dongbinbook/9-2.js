const readline = require('readline');

const input = [];

//미래도시 문제
//1번회사에서 K번회사를 거쳐 X번회사로 가는 최소거리를 구하는 문제
//N: 회사의 개수, M: 경로의 개수,X: 목적지, K: 거쳐갈 회사의 번호

//Example
//N = 5, M = 7, X = 4, K = 5

//입력 예시 1
/*
5 7
1 2
1 3
1 4
2 4
3 4
3 5
4 5
4 5
*/

//출력 예시 1
//3

//입력 예시 2
/*
4 2
1 3
2 4
3 4
*/

//출력 예시 2
//-1

readline
  .createInterface({
    input: process.stdin,
    output: process.stdout,
  })
  .on('line', (line) => {
    input.push(line);
  })
  .on('close', () => {
    let [N, M] = input[0].split(' ').map((el) => parseInt(el));

    const graph = Array.from(Array(N), () => Array(N).fill(Infinity));

    for (let i = 0; i < N; ++i) {
      graph[i][i] = 0;
    }

    for (let i = 1; i < input.length - 1; ++i) {
      let [a, b] = input[i].split(' ').map((el) => parseInt(el));

      graph[a - 1][b - 1] = 1;
      graph[b - 1][a - 1] = 1;
    }

    for (let k = 0; k < N; ++k) {
      for (let a = 0; a < N; ++a) {
        for (let b = 0; b < N; ++b) {
          graph[a][b] = Math.min(graph[a][b], graph[a][k] + graph[k][b]);
        }
      }
    }

    const [x, k] = input[input.length - 1].split(' ').map((el) => parseInt(el));

    const distance = graph[0][k - 1] + graph[k - 1][x - 1];

    if (distance >= Infinity) {
      console.log(-1);
    } else {
      console.log(distance);
    }
  });

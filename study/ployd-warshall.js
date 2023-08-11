/*
입력예시
4
7
1 2 4
1 4 6
2 1 3
2 3 7
3 1 5
3 4 4
4 3 2

출력예시
0 4 8 6
3 0 7 9
5 9 0 4
7 11 2 0
*/
const readline = require('readline');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

let input = [];

rl.on('line', (line) => {
  input.push(line);
}).on('close', () => {
  let N = parseInt(input[0]);
  //인접행렬
  const graph = Array.from(Array(N), () => Array(N).fill(Infinity));

  for (let i = 0; i < N; ++i) {
    graph[i][i] = 0;
  }

  //간선정보 graph에 초기화 저장
  for (let i = 2; i < input.length; ++i) {
    let [a, b, c] = input[i].split(' ').map((el) => parseInt(el));
    graph[a - 1][b - 1] = c;
  }

  //ployd-warshall
  for (let k = 0; k < N; ++k) {
    for (let a = 0; a < N; ++a) {
      for (let b = 0; b < N; ++b) {
        graph[a][b] = Math.min(graph[a][b], graph[a][k] + graph[k][b]);
      }
    }
  }

  console.log(graph);
});

const readline = require('readline');
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

let input = [];

rl.on('line', (line) => {
  input.push(line);
}).on('close', () => {
  const [N, M] = input[0].split(' ').map((el) => parseInt(el));
  const start = parseInt(input[1]);

  const graph = Array.from(Array(N + 1), () => new Array());

  const distance = new Array(N + 1).fill(Infinity);
  const visited = new Array(N + 1);
  const d = input.slice(2);

  //데이터 graph에 넣기
  for (let i = 0; i < d.length; ++i) {
    [a, b, c] = d[i].split(' ').map((el) => parseInt(el));
    //a : 노드번호 b: 다음 노드 c: 거리값
    graph[a].push([b, c]);
  }

  //최단거리 찾는 알고리즘
  const shortestWay = () => {
    let min = Infinity;
    let index = 0;
    for (let i = 1; i < N + 1; ++i) {
      if ((distance[i] < min) & !visited[i]) {
        min = distance[i];
        index = i;
      }
    }
    return index;
  };

  //다익스트라 알고리즘.
  // 1. 첫 노드 거리 확인하고 distance에 넣기.
  const dikjkstra = (start) => {
    distance[start] = 0; //맨처음 노드 거리 0;
    visited[start] = true;

    for (let list of graph[start]) {
      distance[list[0]] = list[1];
    }

    for (let i = N - 1; i > 0; --i) {
      let now = shortestWay();
      visited[now] = true;
      for (let j of graph[now]) {
        const cost = distance[now] + j[1];
        if (cost < distance[j[0]]) {
          distance[[j[0]]] = cost;
        }
      }
    }
  };

  dikjkstra(start);

  console.log(distance);
});

/*
6 11
1
1 2 2
1 3 5
1 4 1
2 3 3
2 4 2
3 2 3
3 6 5
4 3 3
4 5 1
5 3 1
5 6 2
*/

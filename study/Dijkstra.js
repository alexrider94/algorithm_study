const readline = require('readline');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

const INF = Infinity;

let input = [];

/**
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

rl.on('line', (line) => {
  input.push(line);
}).on('close', () => {
  start = parseInt(input[1].split);
  let [V, E] = input[0].split(' ').map((el) => parseInt(el));

  let graph = Array.from(Array(V + 1), () => Array(V + 1).fill(INF));
  let distance = Array(V + 1).fill(INF);
  let visited = Array(V + 1).fill(false);

  function getSmallestNode(distance, visited) {
    let min = INF;
    let index = 0;

    for (let i = 1; i < distance.length; ++i) {
      if (distance[i] < min && !visited[i]) {
        min = distance[i];
        index = i;
      }
    }

    return index;
  }

  function dijkstra(start) {
    distance[start] = 0;
    visited[start] = true;
    for (let i = 2; i <= V; ++i) {
      distance[i] = graph[start][i];
    }

    console.log(distance);
    for (let i = 0; i <= V; ++i) {
      const index = getSmallestNode(distance, visited);

      visited[index] = true;

      for (let j = 0; j <= V; ++j) {
        const cost = distance[index] + graph[index][j];

        if (cost < distance[j]) {
          distance[j] = cost;
        }
      }
    }
  }

  for (let i = 2; i < input.length; ++i) {
    let [u, v, w] = input[i].split(' ').map((el) => parseInt(el));
    graph[u][v] = w;
  }

  dijkstra(1);

  console.log(distance);
});

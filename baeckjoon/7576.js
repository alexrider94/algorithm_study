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
    let [m, n] = input[0].split(' ').map((el) => parseInt(el));
    let dx = [1, -1, 0, 0];
    let dy = [0, 0, 1, -1];
    let graph = input.slice(1).map((el) => el.split(' ').map((el) => parseInt(el)));

    let check = Array.from(Array(n), () => Array(m).fill(false));

    let bfs = (graph) => {
      let pointer = 0;
      let queue = [];
      for (let i = 0; i < n; ++i) {
        for (let j = 0; j < m; ++j) {
          if (graph[i][j] == 1) {
            queue.push([i, j]);
            check[i][j] = true;
          }
        }
      }

      while (queue.length > pointer) {
        let [x, y] = queue[pointer++];
        for (let i = 0; i < 4; ++i) {
          let nx = x + dx[i];
          let ny = y + dy[i];
          if (nx < 0 || nx >= n || ny < 0 || ny >= m) continue;
          if (graph[nx][ny] == 0) {
            if (!check[nx][ny]) {
              graph[nx][ny] = graph[x][y] + 1;
              check[nx][ny] = true;
              queue.push([nx, ny]);
            }
          }
        }
      }
    };
    bfs(graph);
    let result = 0;

    for (let i = 0; i < n; ++i) {
      for (let j = 0; j < m; ++j) {
        if (graph[i][j] == 0) {
          console.log(-1);
          return;
        }

        if (result < graph[i][j]) {
          result = graph[i][j];
        }
      }
    }
    console.log(result - 1);
  });

/*
6 4
0 0 0 0 0 0
0 0 0 0 0 0
0 0 0 0 0 0
0 0 0 0 0 1

6 4
0 -1 0 0 0 0
-1 0 0 0 0 0
0 0 0 0 0 0
0 0 0 0 0 1

6 4
1 -1 0 0 0 0
0 -1 0 0 0 0
0 0 0 0 -1 0
0 0 0 0 -1 1
 */

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
    let [n, m] = input[0].split(' ').map((el) => parseInt(el));
    let dx = [1, -1, 0, 0];
    let dy = [0, 0, 1, -1];
    let graph = input.slice(1).map((el) => el.split('').map((el) => parseInt(el)));

    let check = Array.from(Array(n), () => Array(m).fill(false));
    let bfs = (graph, i, j) => {
      let queue = [];
      queue.push([i, j]);
      check[i][j] = true;
      while (queue.length) {
        let [x, y] = queue.shift();
        for (let i = 0; i < 4; ++i) {
          let nx = x + dx[i];
          let ny = y + dy[i];
          if (nx < 0 || nx >= n || ny < 0 || ny >= m) continue;
          if (graph[nx][ny]) {
            if (!check[nx][ny]) {
              graph[nx][ny] = graph[x][y] + 1;
              check[nx][ny] = true;
              queue.push([nx, ny]);
            }
          }
        }
      }
    };
    bfs(graph, 0, 0);
    console.log(graph[n - 1][m - 1]);
  });

/*
4 6
101111
101010
101011
111011

4 6
110110
110110
111111
111101
 */

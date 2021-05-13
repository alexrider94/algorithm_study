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
    let [n, m, v] = input[0].split(' ').map((el) => parseInt(el));

    let data = input.slice(1).map((el) => el.split(' ').map((el) => parseInt(el)));
    let graph = Array.from(Array(n + 1), () => Array(n + 1).fill(0));
    for (let i = 0; i < m; ++i) {
      let [x, y] = data[i];
      graph[x][y] = 1;
      graph[y][x] = 1;
    }

    console.log(graph);
    const dfs = (v) => {
      let res = [];
      let visited = Array(n + 1).fill(false);

      let stack = [];
      stack.push(v);

      while (stack.length) {
        console.log(stack);
        let data = stack.pop();
        res.push(data);

        visited[data] = true;
        for (let i = 1; i <= n; ++i) {
          if (graph[data][i]) {
            if (!visited[i]) {
              stack.push(i);
              break;
            }
          }
        }
      }

      console.log(res.join(' '));
    };

    const bfs = (v) => {
      let res = [];
      let visited = Array(n + 1).fill(false);
      let queue = [];
      queue.push(v);

      while (queue.length) {
        let data = queue.shift();
        res.push(data);
        visited[data] = true;
        for (let i = 1; i <= n; ++i) {
          if (graph[data][i]) {
            if (!visited[i]) {
              queue.push(i);
              visited[i] = true;
            }
          }
        }
      }

      //   console.log(res.join(' '));
    };
    dfs(v);
    bfs(v);
  });

/*
4 5 1
1 2
1 3
1 4
2 4
3 4


9 9 1
1 2
1 3
2 4
2 5
3 7
3 8
5 6
6 9
7 9
*/

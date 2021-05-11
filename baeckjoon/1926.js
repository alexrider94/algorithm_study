let input = [];
require('readline')
  .createInterface({ input: process.stdin, output: process.stdout })
  .on('line', (l) => {
    input.push(l);
  })
  .on('close', () => {
    let [n, m] = input[0].split(' ');
    let graph = input.slice(1).map((el) => el.split(' ').map((e) => parseInt(e)));

    let visited = Array.from(Array(parseInt(n)), () => Array(parseInt(m)).fill(false));
    let dx = [1, 0, -1, 0];
    let dy = [0, 1, 0, -1];

    let c = 0,
      max = 0;
    for (let i = 0; i < n; ++i) {
      for (let j = 0; j < m; ++j) {
        if (!visited[i][j] && graph[i][j]) {
          let size = 0;
          c++;
          let stack = [];
          visited[i][j] = true;
          stack.push([i, j]);
          while (stack.length) {
            size++;
            let [i, j] = stack.pop();
            for (let c = 0; c < 4; ++c) {
              let nextI = i + dx[c];
              let nextJ = j + dy[c];
              if (nextI >= 0 && nextJ >= 0 && nextI < n && nextJ < m) {
                if (!visited[nextI][nextJ] && graph[nextI][nextJ]) {
                  visited[nextI][nextJ] = true;
                  stack.push([nextI, nextJ]);
                }
              }
            }
          }

          if (max < size) max = size;
        }
      }
    }
    console.log(c);
    console.log(max);
  });

/*
6 5
1 1 0 1 1
0 0 1 0 0
0 0 0 0 0
1 1 1 1 1
0 0 1 1 1
0 0 1 1 1

3 5
0 0 0 1 0
0 1 0 0 1
1 0 0 1 0

4 5
1 1 1 0 1
1 0 1 0 1
1 0 1 0 1
1 0 1 1 1

4 4
1 0 1 0
0 1 0 1
1 0 1 0
0 1 0 1

1 2
1 1

2 1
1
1
*/

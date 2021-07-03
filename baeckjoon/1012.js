let input = [];
let inputIdx = 0;

let dx = [1, -1, 0, 0];
let dy = [0, 0, 1, -1];

const strToNumArray = (string) => string.split(' ').map((el) => Number(el));

require('readline')
  .createInterface({ input: process.stdin, output: process.stdout })
  .on('line', (line) => {
    input.push(line);
  })
  .on('close', () => {
    let t = Number(input[inputIdx++]);

    while (t--) {
      let [column, row, k] = strToNumArray(input[inputIdx++]);
      let graph = [...Array(row)].map(() => Array(column).fill(0));
      let visited = [...Array(row)].map(() => Array(column).fill(0));
      let result = 0;

      const dfs = (y, x) => {
        for (let a = 0; a < 4; ++a) {
          let nx = y + dx[a];
          let ny = x + dy[a];

          if (nx < 0 || ny < 0 || nx >= row || ny >= column) {
            continue;
          }

          if (graph[nx][ny] && !visited[nx][ny]) {
            visited[nx][ny]++;
            dfs(nx, ny);
          }
        }
      };

      while (k--) {
        const [c, r] = strToNumArray(input[inputIdx++]);
        graph[r][c] = 1;
      }

      for (let i = 0; i < row; ++i) {
        for (let j = 0; j < column; ++j) {
          if (graph[i][j] && !visited[i][j]) {
            result++;
            visited[i][j]++;
            dfs(i, j);
          }
        }
      }

      console.log(result);
    }
  });

/*
2
10 8 17
0 0
1 0
1 1
4 2
4 3
4 5
2 4
3 4
7 4
8 4
9 4
7 5
8 5
9 5
7 6
8 6
9 6
10 10 1
5 5
*/

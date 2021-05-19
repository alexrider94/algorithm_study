let input = [];
require('readline')
  .createInterface({ input: process.stdin, output: process.stdout })
  .on('line', (line) => {
    input.push(line);
  })
  .on('close', () => {
    let n = parseInt(input[0]);
    let graph = input.slice(1).map((el) => el.split('').map((el) => parseInt(el)));

    let dx = [1, -1, 0, 0];
    let dy = [0, 0, 1, -1];

    let visited = Array.from(Array(n), () => Array(n).fill(false));

    const dfs = (i, j) => {
      let stack = [];
      stack.push([i, j]);
      let count = 0;
      while (stack.length) {
        let [x, y] = stack.pop();
        if (visited[x][y]) continue;
        visited[x][y] = true;
        count += 1;
        for (let i = 0; i < 4; ++i) {
          let moveX = x + dx[i];
          let moveY = y + dy[i];

          if (moveX < 0 || moveY < 0 || moveX >= n || moveY >= n) continue;
          if (!visited[moveX][moveY]) {
            if (graph[moveX][moveY] == 1) {
              stack.push([moveX, moveY]);
            }
          }
        }
      }

      return count;
    };

    let result = [];
    let cnt = 0;
    for (let i = 0; i < n; ++i) {
      for (let j = 0; j < n; ++j) {
        if (graph[i][j] && !visited[i][j]) {
          let count = dfs(i, j);
          if (count) {
            cnt++;
            result.push(count);
          }
        }
      }
    }

    console.log(cnt);
    result = result.sort((a, b) => a - b);
    for (let i = 0; i < result.length; ++i) {
      console.log(result[i]);
    }
  });

/*   7
0110100
0110101
1110101
0000111
0100000
0111110
0111000

4 4
0101
1010
0101
1010
*/

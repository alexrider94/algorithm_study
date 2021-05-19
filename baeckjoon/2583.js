let input = [];
require('readline')
  .createInterface({ input: process.stdin, output: process.stdout })
  .on('line', (line) => {
    input.push(line);
  })
  .on('close', () => {
    let [n, m, k] = input[0].split(' ').map((el) => parseInt(el));

    let graph = Array.from(Array(n), () => Array(m).fill(0));
    let areaList = input.slice(1).map((e) => e.split(' ').map((el) => parseInt(el)));
    let check = Array.from(Array(n), () => Array(m).fill(false));
    let dx = [1, -1, 0, 0];
    let dy = [0, 0, 1, -1];

    const fill = (x1, y1, x2, y2) => {
      for (let x = x1; x < x2; ++x) {
        for (let y = y1; y < y2; ++y) {
          graph[n - 1 - y][x] = 1;
        }
      }
    };

    for (let i = 0; i < areaList.length; ++i) {
      let x1 = areaList[i][0];
      let y1 = areaList[i][1];

      let x2 = areaList[i][2];
      let y2 = areaList[i][3];

      fill(x1, y1, x2, y2);
    }

    const dfs = (i, j) => {
      let stack = [];
      stack.push([i, j]);
      let count = 0;
      while (stack.length) {
        let [x, y] = stack.pop();
        if (check[x][y]) continue;
        check[x][y] = true;
        count++;
        for (let i = 0; i < 4; ++i) {
          let moveX = dx[i] + x;
          let moveY = dy[i] + y;
          if (moveX < 0 || moveY < 0 || moveX >= n || moveY >= m) continue;

          if (!check[moveX][moveY] && graph[moveX][moveY] == 0) {
            stack.push([moveX, moveY]);
          }
        }
      }
      return count;
    };

    let cnt = 0;
    let result = [];
    for (let i = 0; i < n; ++i) {
      for (let j = 0; j < m; ++j) {
        if (graph[i][j] == 0) {
          let res = dfs(i, j);
          if (res) {
            cnt++;
            result.push(res);
          }
        }
      }
    }

    console.log(cnt);
    let sorted = result.sort((a, b) => a - b);
    let str = '';
    for (let i = 0; i < sorted.length; ++i) {
      str += `${sorted[i]} `;
    }

    console.log(str);
  });
/*
5 7 3
0 2 4 4
1 1 2 5
4 0 6 2
*/

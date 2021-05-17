let input = [];

require('readline')
  .createInterface({ input: process.stdin, output: process.stdout })
  .on('line', (line) => {
    input.push(line);
  })
  .on('close', () => {
    let [n, m] = input[0].split(' ').map((el) => parseInt(el));
    let graph = input.slice(1).map((el) => el.split(''));
    let dx = [1, -1, 0, 0];
    let dy = [0, 0, 1, -1];
    let check = Array.from(Array(n), () => Array(m).fill(false));

    const bfs = (i, j, fire) => {
      let result = 0;
      let queue = [];
      let fqueue = [];

      for (let i = 0; i < fire.length; ++i) {
        fqueue.push(fire[i]);
      }
      queue.push([i, j]);
      while (queue.length) {
        while (fqueue.length) {
          let [fx, fy] = fqueue.shift();

          for (let i = 0; i < 4; ++i) {
            let moveX = fx + dx[i];
            let moveY = fy + dy[i];
            if (moveX < 0 || moveY < 0 || moveX >= n || moveY >= m) {
              continue;
            }
            if (graph[moveX][moveY] == '#') continue;
            if (graph[moveX][moveY] == '.' || graph[moveX][moveY] == 'J') {
              graph[moveX][moveY] = 'F';
              fqueue.push([moveX, moveY]);
            }
          }
        }

        let [x, y] = queue.shift();

        for (let i = 0; i < 4; ++i) {
          let moveX = x + dx[i];
          let moveY = y + dy[i];
          if (moveX < 0 || moveY < 0 || moveX >= n || moveY >= m) {
            return result;
          }
          if (graph[moveX][moveY] == '.') {
            check[moveX][moveY] = true;
            graph[moveX][moveY] = 'J';
            queue.push([moveX, moveY]);
          }
        }
        console.log(graph);
        result++;
      }
    };

    let startI = 0,
      startJ = 0;
    let fire = [];
    for (let i = 0; i < n; ++i) {
      for (let j = 0; j < m; ++j) {
        if (graph[i][j] == 'J') {
          startI = i;
          startJ = j;
        }
        if (graph[i][j] == 'F') {
          fire.push([i, j]);
        }
      }
    }

    bfs(startI, startJ, fire);

    let result = 'impossible';
    // for(let i = 0; i<n; i++){
    //   for(let j = 0; j<m; ++j){
    //     if(j==0 && typeof graph[i][j] == 'number'){
    //       console.log(graph[i][j])
    //     }else if()
    //   }
    // }

    console.log(result);
  });

/*
4 4
####
#JF#
#..#
####

4 6
######
......
#.J###
#F####

5 5
....F
...J#
....#
....#
...#.

3 3
F.F
.J.
F.F
*/

let input = [];

require('readline')
  .createInterface({ input: process.stdin, output: process.stdout })
  .on('line', (line) => {
    input.push(line);
  })
  .on('close', () => {
    let n = Number(input[0]);
    let list = input[1].split(' ').map((el) => parseInt(el));
    let num = Number(input[2]);
    let reach = Array(50001).fill(-1);
    let bfs = () => {
      let queue = [];
      queue.push(0);
      reach[0] = 0;
      while (queue.length) {
        let x = queue.shift();
        if (reach[x] == num) {
          continue;
        }
        for (let l of list) {
          let y = x + l;

          if (reach[y] == -1) {
            queue.push(y);
            reach[y] = reach[x] + 1;
          }
        }
      }
      console.log(reach);
      for (let i = 0; i < 50001; ++i) {
        if (reach[i] == -1) {
          return i;
        }
      }
      return -1;
    };

    let res = bfs(list, n, num);

    res % 2 == 0 ? console.log(`holsoon win at ${res}`) : console.log(`jjaksoon win at ${res}`);
  });
/*

1 3    1 4 5
2 6    2 8 10
3 9    3 12 15
4 12   4 16 20
5 15   5 20 25

2
1 3
5

2
1 4 5
5

2
1 4 5 7
5

//34

3
1 2 3
4

5
1 2 3 4 5
2
*/

// let graph = Array.from(Array(num), () => Array(num * list[list.length - 1]).fill(0));
// const fill = (i) => {
//   for (let j = 0; j < list.length; ++j) {
//     graph[i][j] = list[j];
//     let index = 0;
//     while (index != num - 1) {
//       graph[index + 1][j] = graph[index][j] + 1;
//       index++;
//     }
//   }

//   let xx = 1;
//   let row = 0;
//   let column = list.length;
//   while (xx != num) {
//     //0 2 4
//     for (let i = 1; i < list.length; ++i) {
//       let x = 1;
//       // console.log(x + row, column, list[i] * (xx + 1));
//       graph[x + row][column] = list[i] * (xx + 1);

//       while (x + row != num - 1) {
//         // console.log(x + 1 + row, column);
//         graph[x + 1 + row][column] = graph[x + row][column] + 1;
//         x++;
//       }
//       column++;
//     }
//     xx++;
//     row++;
//   }

//   return graph;
// };

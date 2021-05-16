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
    let graph = Array.from(Array(num), () => Array(num * list[list.length - 1]).fill(0));
    const fill = (i) => {
      for (let j = 0; j < list.length; ++j) {
        graph[i][j] = list[j];
        let index = 0;
        while (index != num - 1) {
          graph[index + 1][j] = graph[index][j] + 1;
          index++;
        }
      }

      let xx = 1;
      let row = 0;
      while (xx != num) {
        let y = xx * row;

        //0 2 4
        for (let i = 1; i < list.length; ++i) {
          let x = 1;
          console.log(x + row, list.length + row + y, list[i] * (xx + 1));
          graph[x + row][list.length + row + y] = list[i] * (xx + 1);

          while (x + row != num - 1) {
            console.log(x + 1 + row, list.length + row + y);
            graph[x + 1 + row][list.length + row + y] = graph[x + row][list.length + row + y] + 1;
            x++;
          }
          y++;
        }
        xx++;
        row++;
      }
    };

    fill(0);
    // 1 3
    // 1 3 0  0  0  0
    // 2 4 6  0  0  0
    // 3 5 7  9  0  0
    // 4 6 8 10 12  0
    // 5 7 9 11 13 15

    // 1 4 5
    // 1 4 5
    // 2 5 6 8 10
    // 3 6 7 9 11 12 15
    // 4 7 8 10 12 13 16 16 20
    // 5 8 9 11 13 14 17 17 21 20 25

    // 1 4 5 7
    // 1 4 5
    // 2 5 6 8 10
    // 3 6 7 9 11 12 15
    // 4 7 8 10 12 13 16 16 20
    // 5 8 9 11 13 14 17 17 21 20 25
  });
/*
2
1 3
5

2
1 4 5
5

2
1 4 5 7
5
*/

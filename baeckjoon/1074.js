let input = [];
const strToNumArray = (string) => string.split(' ').map((el) => Number(el));

require('readline')
  .createInterface({ input: process.stdin, output: process.stdout })
  .on('line', (line) => {
    input.push(line);
  })
  .on('close', () => {
    let [n, r, c] = strToNumArray(input[0]);

    let arr = Array.from(Array(Math.pow(n, 2)), () => Array(Math.pow(n, 2)).fill(0));

    const execute = (i, j) => {
      arr[i][j] = 1;
      nextI = i + 1;

      if (r === i && c === j) {
        return;
      }
      execute(nextI, nextJ);
    };

    execute(0, 0);
  });

/*
2 3 1
3 7 7
*/

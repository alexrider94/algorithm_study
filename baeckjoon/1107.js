let input = [];
require('readline')
  .createInterface({ input: process.stdin, output: process.stdout })
  .on('line', (line) => {
    input.push(line);
  })
  .on('close', () => {
    let n = parseInt(input[0]);

    let broken = Array.from(Array(10), () => false);
    let min = 1000001;
    if (input[2]) {
      let disable = input[2].split(' ').map((el) => parseInt(el));
      for (let i = 0; i < disable.length; ++i) {
        broken[disable[i]] = true;
      }
    }

    if (n == 100) {
      console.log(0);
      return;
    }

    let cnt = Math.abs(100 - n);
    min = min > cnt ? cnt : min;

    const dfs = (idx, click) => {
      for (let i = 0; i < 10; ++i) {
        if (!broken[i]) {
          let newStr = click + String(i);
          let cnt = Math.abs(n - parseInt(newStr)) + newStr.length;

          min = min > cnt ? cnt : min;
          if (idx < 6) {
            dfs(idx + 1, newStr);
          }
        }
      }
    };

    dfs(0, '');

    console.log(min);
  });

/*
5457
3
6 7 8

100
5
0 1 2 3 4

500000
8
0 2 3 4 6 7 8 9
*/

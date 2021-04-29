const readline = require('readline');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});
let input = [];

rl.on('line', (line) => {
  input.push(line);
}).on('close', () => {
  let list = input.slice(1).map((el) => parseInt(el));
  let cnt = 0;
  for (let i = list.length - 1; i > 0; --i) {
    while (list[i] <= list[i - 1]) {
      list[i - 1]--;
      cnt++;
    }
    console.log(list);
  }
  console.log(cnt);
});

/* 4
5
3
7
5 */

/*
5
10
4
0
6
3
*/

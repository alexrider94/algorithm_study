const readline = require('readline');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});
let input = [];

rl.on('line', (line) => {
  input.push(line);
}).on('close', () => {
  let rule = [0, 1, 2, 0];

  let list = input[1].split(' ').map((el) => parseInt(el));
  let cnt = 0;
  let idx = 0;
  for (let i = 0; i < list.length; ++i) {
    while (true) {
      if (list[i] == rule[idx]) {
        cnt++;
        idx++;
      }
      if (idx == 3) {
        idx = 0;
      }
      break;
    }
  }

  console.log(cnt);
});

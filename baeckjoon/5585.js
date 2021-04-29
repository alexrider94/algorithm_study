const readline = require('readline');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});
let input = [];

rl.on('line', (line) => {
  input.push(line);
}).on('close', () => {
  let n = 1000 - Number(input[0]);
  let list = [500, 100, 50, 10, 5, 1];
  let cnt = 0,
    idx = 0;
  while (n) {
    if (idx == 6) {
      cnt += n;
      break;
    }
    if (Math.floor(n / list[idx]) < Math.floor(n / list[idx + 1]) && list[idx] <= n) {
      let c = Math.floor(n / list[idx]);
      n = n - c * list[idx];
      cnt += c;
    } else idx++;
  }

  console.log(cnt);
});

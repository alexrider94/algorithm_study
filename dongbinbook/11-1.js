const readline = require('readline');

let input = [];

readline
  .createInterface({
    input: process.stdin,
    output: process.stdout,
  })
  .on('line', function (line) {
    input.push(line);
  })
  .on('close', function () {
    const N = parseInt(input[0]);
    const arr = input[1].split(' ').map(Number);

    const sorted = arr.sort((a, b) => a - b);

    let result = 0;
    let currentGroupCount = 0;

    for (let i = 0; i < N; ++i) {
      currentGroupCount += 1;
      if (currentGroupCount >= sorted[i]) {
        result += 1;
        currentGroupCount = 0;
      }
    }

    console.log(result);
  });

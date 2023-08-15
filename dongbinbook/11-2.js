const readline = require('readline');

//02984
//567

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
    const numbers = input[0].split('').map(Number);

    const sorted = numbers.sort((a, b) => a - b);

    let result = 0;

    for (let i = 0; i < sorted.length; i++) {
      if (sorted[i] <= 1 || result <= 1) {
        result += sorted[i];
      } else {
        result *= sorted[i];
      }
    }

    console.log(result);
  });

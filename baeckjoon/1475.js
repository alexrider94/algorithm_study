let input = [];
require('readline')
  .createInterface({
    input: process.stdin,
    output: process.stdout,
  })
  .on('line', (line) => {
    input.push(line);
  })
  .on('close', () => {
    let n = input[0];
    let count = new Array(10).fill(0);
    for (let i = 0; i < n.length; ++i) {
      count[n[i]]++;
    }

    let num = 0;
    for (let i = 0; i < 10; ++i) {
      if (i != 9 && i != 6) num = Math.max(num, count[i]);
    }

    console.log(Math.max(num, Math.floor((count[6] + count[9] + 1) / 2)));
  });

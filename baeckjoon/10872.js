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
    let n = parseInt(input[0]);
    const fact = (n) => {
      if (n == 1) return 1;
      if (n == 0) return 1;
      else return fact(n - 1) * n;
    };
    const result = fact(n);
    console.log(result);
  });

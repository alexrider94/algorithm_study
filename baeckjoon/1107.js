let input = [];
require('readline')
  .createInterface({ input: process.stdin, output: process.stdout })
  .on('line', (line) => {
    input.push(line);
  })
  .on('close', () => {});

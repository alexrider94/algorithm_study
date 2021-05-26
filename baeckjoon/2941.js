let input = [];
require('readline')
  .createInterface({ input: process.stdin, output: process.stdout })
  .on('line', (line) => {
    input.push(line);
  })
  .on('close', () => {
    const regex = /c\=|c\-|dz\=|d\-|lj|nj|s\=|z\=/g;

    console.log(input[0].replace(regex, ' ').length);
  });

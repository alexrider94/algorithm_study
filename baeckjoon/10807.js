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
    let list = input[1].split(' ');
    let result = 0;
    list.filter((num) => {
      if (num == input[2]) result++;
    });
    console.log(result);
  });

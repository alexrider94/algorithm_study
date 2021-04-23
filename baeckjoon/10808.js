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
    const list = 'abcdefghijklmnopqrstuvwxyz';
    let count = new Array(26).fill(0);
    let s = input[0].split('');
    s.map((alphabet) => count[list.indexOf(alphabet)]++);
    console.log(count.join(' '));
  });

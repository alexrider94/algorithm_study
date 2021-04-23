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
    let list = input.slice(1).map((el) => el.split(' '));
    for (let i = 0; i < list.length; ++i) {
      if (list[i][0].split('').sort().join('') == list[i][1].split('').sort().join('')) console.log('Possible');
      else console.log('Impossible');
    }
  });

/*
  4
a a
ab ba
ring gnir
newt twan */

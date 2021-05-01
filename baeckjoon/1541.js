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
    let s = input[0].split('-');

    let arr = [];
    for (let i = 0; i < s.length; ++i) {
      if (!isNaN(s[i])) arr.push(s[i]);
      for (let c of s[i]) {
        if (c == '+') {
          let l = s[i]
            .split('+')
            .map((el) => parseInt(el))
            .reduce((acc, cur) => acc + cur, 0);

          arr.push(l);
          break;
        }
      }
    }
    let res = arr.reduce((cur, acc) => cur - acc);
    console.log(res);
  });
/* 55 - 50 + 40 */
/* 1+3-5+8+9+10 */

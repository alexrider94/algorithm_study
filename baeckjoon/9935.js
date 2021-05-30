let input = [];
require('readline')
  .createInterface({ output: process.stdout, input: process.stdin })
  .on('line', (line) => {
    input.push(line);
  })
  .on('close', () => {
    let str = input[0];
    let boom = input[1];

    // while (str.indexOf(boom) != -1) {
    //   let length = boom.length;
    //   str = str.slice(0, str.indexOf(boom)) + str.slice(str.indexOf(boom) + length);
    // }
    let result = [];
    let index = 0;
    for (let i = 0; i < str.length; ++i) {
      result[index++] = str[i];
      let j = boom.length;
      if (str[i] == boom[--j]) {
        let check = false;
        let size = index - boom.length;
        for (let k = index - 1; k >= size; k--) {
          if (result[k] == boom[j--]) {
            check = true;
          } else {
            check = false;
            break;
          }
        }

        if (check) index -= boom.length;
      }
    }

    if (index == 0) {
      console.log('FRULA');
    } else {
      let str = '';
      for (let i = 0; i < index; ++i) {
        str += result[i];
      }
      console.log(str);
    }
  });

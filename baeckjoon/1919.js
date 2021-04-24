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
    let word1 = input[0];
    let word2 = input[1];
    const list = 'abcdefghijklmnopqrstuvwxyz';
    let arr1 = new Array(26).fill(0);
    let arr2 = new Array(26).fill(0);
    let result = 0;
    for (let i = 0; i < word1.length; ++i) {
      arr1[list.indexOf(word1[i])]++;
    }
    for (let i = 0; i < word2.length; ++i) {
      arr2[list.indexOf(word2[i])]++;
    }

    for (let i = 0; i < list.length; ++i) {
      result += Math.abs(arr1[i] - arr2[i]);
    }
    console.log(result);
  });

/*
aabbcc
xxyybb
*/

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
    let wordsArr = input[0].trim().split(' ');
    let countOfWords = 0;

    for (let i = 0; i < wordsArr.length; i++) {
      if (wordsArr[i] !== '') {
        countOfWords++;
      }
    }

    console.log(countOfWords);
  });

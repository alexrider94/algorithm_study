const readline = require('readline');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});
let input = [];

rl.on('line', (line) => {
  input.push(line);
}).on('close', () => {
  let [N, M] = input[0].split(' ');

  let cardList = input[1].split(' ').map((el) => parseInt(el));
  let blackJack = parseInt(M);
  let maxData = 0;
  for (let i = 0; i < cardList.length; ++i) {
    for (let j = i + 1; j < cardList.length; ++j) {
      for (let k = j + 1; k < cardList.length; ++k) {
        let temp = cardList[i] + cardList[j] + cardList[k];
        if (blackJack < temp) continue;

        if (maxData < temp) maxData = temp;
      }
    }
  }
  console.log(maxData);
});

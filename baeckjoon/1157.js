const readline = require('readline');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

let input = [];

rl.on('line', (line) => {
  input.push(line);
}).on('close', () => {
  const n = input[0];
  let commonWord = '';
  const list = input.slice(1);
  const firstS = input[1];

  //첫번째 문자를 가지고 비교
  for (let i = 0; i < firstS.length; ++i) {
    let flag = false;
    for (let j = 0; j < n - 1; ++j) {
      //각 문장들 비교하는데 같지않은거 나오면 true 처리
      if (list[j][i] != list[j + 1][i]) {
        flag = true;
        break;
      }
    }
    //같지않은거 나온거 ? 추가 아니면 그 문자 추가.
    if (flag) commonWord += '?';
    else commonWord += list[0][i];
  }
  console.log(commonWord);
});

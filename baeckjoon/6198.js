const readline = require('readline');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});
let input = [];

rl.on('line', (line) => {
  input.push(line);
}).on('close', () => {
  const buildingList = input.slice(1).map((el) => parseInt(el));
  let result = 0;
  let stack = [];

  for (let i = 0; i < buildingList.length; ++i) {
    while (stack.length) {
      if (stack[stack.length - 1] > buildingList[i]) {
        break;
      } else {
        stack.pop();
      }
    }
    stack.push(buildingList[i]);

    result += stack.length - 1;
  }
  console.log(result);
});

/*
6
10
3
7
4
12
2
*/

/* 문제
N개의 정수 A[1], A[2], …, A[N]이 주어져 있을 때, 이 안에 X라는 정수가 존재하는지 알아내는 프로그램을 작성하시오.

입력
첫째 줄에 자연수 N(1 ≤ N ≤ 100,000)이 주어진다. 다음 줄에는 N개의 정수 A[1], A[2], …, A[N]이 주어진다. 다음 줄에는 M(1 ≤ M ≤ 100,000)이 주어진다. 다음 줄에는 M개의 수들이 주어지는데, 이 수들이 A안에 존재하는지 알아내면 된다. 모든 정수의 범위는 -231 보다 크거나 같고 231보다 작다.

출력
M개의 줄에 답을 출력한다. 존재하면 1을, 존재하지 않으면 0을 출력한다. */
const readline = require('readline');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

let input = [];

rl.on('line', (line) => {
  input.push(line);
}).on('close', () => {
  let N = input[0];
  let list = input[1]
    .split(' ')
    .map((el) => parseInt(el))
    .sort((a, b) => a - b);

  let M = input[2];
  let matchList = input[3].split(' ').map((el) => parseInt(el));
  const bs = (start, end, target) => {
    //못찾을경우
    if (start > end) {
      console.log(0);
      return;
    }

    let mid = Math.floor((start + end) / 2);
    if (target == list[mid]) console.log(1);
    else if (target > list[mid]) bs(mid + 1, end, target);
    else bs(start, mid - 1, target);
  };

  for (let i = 0; i < matchList.length; ++i) {
    bs(0, list.length - 1, matchList[i]);
  }
});

/*
5
4 1 5 2 3
5
1 3 7 9 5
*/

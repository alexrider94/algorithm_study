/* 문제
주어진 수 N개 중에서 소수가 몇 개인지 찾아서 출력하는 프로그램을 작성하시오.

입력
첫 줄에 수의 개수 N이 주어진다. N은 100이하이다. 다음으로 N개의 수가 주어지는데 수는 1,000 이하의 자연수이다.

출력
주어진 수들 중 소수의 개수를 출력한다. */
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
  let list = input[1].split(' ').map((el) => parseInt(el));
  let count = 0;
  const checkPrime = (number) => {
    if (number <= 1) return false;
    for (let i = 2; i <= Math.floor(number / 2); ++i) {
      if (number % i == 0) {
        return false;
      }
    }
    return true;
  };

  for (let i = 0; i < list.length; ++i) {
    if (checkPrime(list[i])) count++;
  }
  console.log(count);
});

/*
4
1 3 5 7 9 11
*/

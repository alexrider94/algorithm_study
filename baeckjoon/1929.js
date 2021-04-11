/* 문제
M이상 N이하의 소수를 모두 출력하는 프로그램을 작성하시오.

입력
첫째 줄에 자연수 M과 N이 빈 칸을 사이에 두고 주어진다. (1 ≤ M ≤ N ≤ 1,000,000) M이상 N이하의 소수가 하나 이상 있는 입력만 주어진다.

출력
한 줄에 하나씩, 증가하는 순서대로 소수를 출력한다. */
const readline = require('readline');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});
let input = [];

rl.on('line', (line) => {
  input.push(line);
}).on('close', () => {
  let [M, N] = input[0].split(' ').map((el) => parseInt(el));
  let check = new Array(N + 1).fill(true);
  let max = 1000000;
  let square = 0;

  check[0] = false;
  check[1] = false;
  for (let i = 2; i * i <= N + 1; i++) {
    if (check[i]) {
      if (parseInt(Math.pow(i, 2)) > max) {
        break;
      } else {
        for (square = parseInt(Math.pow(i, 2)); square < N + 1; ) {
          check[square] = false;
          square += i;
        }
      }
    }
  }

  for (let i = M; i <= N; ++i) {
    if (check[i]) console.log(i);
  }
});

/* 소수를 구하면, 그 소수의 배수는 소수가 될 수 없다. 그래서 그 배수들을 사전에 제거하고 남은 수를 이용해 소수를 구하는 방법이다.

먼저, (1 ≤ M ≤ N ≤ 1,000,000)이므로 MAX를 선언해준다.
그리고 소수를 판단할 isPrimeArr(Array)를 N+1만큼 선언해준다(인덱스를 N까지 사용할 것이므로)
isPrimeArr는 .fill()을 이용해 모두 true값으로 세팅해줬다. 그리고 0과 1은 소수가 아니므로 false를 세팅해줬다.

for loop을 돌리면서 해당 소수의 배수는 false로 값을 바꿔준다. 그리고 조건문을 이용해 우리가 구할 숫자를 넘어가면 break;
내부 for loop에서 for조건문의 마지막을 넣지 않았는데, 그 안에 square += i를 넣어줘도 된다. 같은 의미다(배수를 계속 더해줌)

마지막에 입력 받은 구간만큼 for loop을 이용해 출력해주면 된다(isPrimeArr이 true면 소수)

아래 링크를 참고하면 이론과 함께 시각적으로 어떻게 진행되는지 볼 수 있어 좋다. 좋은 참고자료!

https://ko.wikipedia.org/wiki/%EC%97%90%EB%9D%BC%ED%86%A0%EC%8A%A4%ED%85%8C%EB%84%A4%EC%8A%A4%EC%9D%98_%EC%B2%B4 */

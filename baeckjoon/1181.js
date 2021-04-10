/*
문제
알파벳 소문자로 이루어진 N개의 단어가 들어오면 아래와 같은 조건에 따라 정렬하는 프로그램을 작성하시오.

길이가 짧은 것부터
길이가 같으면 사전 순으로
입력
첫째 줄에 단어의 개수 N이 주어진다. (1 ≤ N ≤ 20,000) 둘째 줄부터 N개의 줄에 걸쳐 알파벳 소문자로 이루어진 단어가 한 줄에 하나씩 주어진다. 주어지는 문자열의 길이는 50을 넘지 않는다.

출력
조건에 따라 정렬하여 단어들을 출력한다. 단, 같은 단어가 여러 번 입력된 경우에는 한 번씩만 출력한다.
*/

const readline = require('readline');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

let input = [];

rl.on('line', (line) => {
  input.push(line);
}).on('close', () => {
  /*   const word = input.slice(1, n + 1);
  const newWord = [...new Set(word)];
  newWord.sort();
  newWord.sort((a, b) => a.length - b.length);
  const result = newWord.join('\n'); */
  let N = input[0];
  let wordList = input.slice(1);

  let s = wordList.sort((a, b) => {
    //String.prototype.localeCompare()
    return a.length - b.length || a.localeCompare(b);
  });
  for (let word of new Set(s)) {
    console.log(word);
  }
});

/*
13
but
i
wont
hesitate
no
more
no
more
it
cannot
wait
im
yours
*/

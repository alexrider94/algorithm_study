const readline = require('readline');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

let input = [];

rl.on('line', (line) => {
  input.push(line);
}).on('close', () => {
  let L = input[0];
  let setData = input[1].split(' ').map((el) => parseInt(el));
  let n = input[2];

  //sort
  let front, back;
  let sorted = setData.sort((a, b) => a - b);
  for (let i = 0; i < sorted.length; ++i) {
    //n이 범위에 들어갈경우
    if (sorted[i] == n) {
      console.log(0);
      return;
    }
    //n이 중간에 있을경우
    if (sorted[i] > n) {
      //n이 처음에 있을 경우
      if (i == 0) {
        back = sorted[i] - 1;
        front = 1;
        break;
      }
      back = sorted[i] - 1;
      front = sorted[i - 1] + 1;
      break;
    }
    //n이 끝에 있을경우
    if (i == sorted.length - 1) {
      back = n;
      front = sorted[i] + 1;
    }
  }

  // for (let i = front; i <= n; ++i) {
  //   for (let j = n; j < back; ++j) {
  //     if (i == j) continue;
  //     count = count + 1;
  //   }
  // }

  console.log(back - front + (back - n) * (n - front));
});

/*
4
1 7 14 10
2

5
4 8 13 24 30
10

8
3 7 12 18 25 100 33 1000
59

4
4 5 6 7
1

4
1 3 5 7
10

1
5
2
[2,4],[2,3],[1,2],[1,3],[1,4]
*/
//[2,3], [2,4], [2,5], [2, 6]

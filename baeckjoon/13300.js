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
    let [n, k] = input[0].split(' ').map((el) => parseInt(el));
    let arr = Array.from(Array(2), () => Array(7).fill(0));
    let list = input.slice(1).map((el) => el.split(' ').map((el) => parseInt(el)));
    let count = 0;
    for (let i = 0; i < list.length; ++i) {
      arr[list[i][0]][list[i][1]]++;
    }

    for (let i = 0; i < 2; i++) {
      for (let j = 1; j <= 6; j++) {
        count += Math.floor(arr[i][j] / k);
        if (arr[i][j] % k != 0) {
          count++;
        }
      }
    }

    console.log(count);
  });

/*
16 2
1 1
0 1
1 1
0 2
1 2
0 2
0 3
1 3
1 4
1 3
1 3
0 6
1 5
0 5
1 5
1 6
*/

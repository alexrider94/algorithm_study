let input = [];

require('readline')
  .createInterface({ input: process.stdin, output: process.stdout })
  .on('line', (line) => {
    input.push(line);
  })
  .on('close', () => {
    let [n, k] = input[0].split(' ').map((el) => parseInt(el));

    let arr = Array.from(Array(100001), () => 0);
    const bfs = (i) => {
      let queue = [];
      queue.push(i);
      while (queue.length) {
        let x = queue.shift();
        if (x == k) return;

        if (x < arr.length - 1 && arr[x + 1] == 0) {
          arr[x + 1] = arr[x] + 1;
          queue.push(x + 1);
        }
        if (x > 0 && arr[x - 1] == 0) {
          arr[x - 1] = arr[x] + 1;
          queue.push(x - 1);
        }
        if (x * 2 < arr.length && arr[x * 2] == 0) {
          arr[x * 2] = arr[x] + 1;
          queue.push(x * 2);
        }
      }
    };

    bfs(n);
    console.log(arr[k]);
  });

/*
5 17

5 0

 */

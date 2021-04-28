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
    let [n, m] = input[0].split(' ').map((el) => parseInt(el));

    let checked = Array.from({ length: n + 1 }, () => false);
    let arr = Array.from({ length: n + 1 }, () => 0);
    const dfs = (start, cnt) => {
      if (cnt == m) {
        let str = '';
        for (let i = 0; i < m; ++i) {
          str += arr[i] + ' ';
        }
        console.log(str);
        return;
      }

      for (let i = start; i <= n; ++i) {
        if (!checked[i]) {
          checked[i] = true;
          arr[cnt] = i;
          dfs(i, cnt + 1);
          checked[i] = false;
        }
      }
    };

    dfs(1, 0);
  });

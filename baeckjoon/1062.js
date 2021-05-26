let input = [];
require('readline')
  .createInterface({ input: process.stdin, output: process.stdout })
  .on('line', (line) => {
    input.push(line);
  })
  .on('close', () => {
    const [n, k] = input[0].split(' ').map((el) => parseInt(el));

    const strList = input.slice(1);

    const visited = Array.from(Array(26), () => false);
    let alp = [];
    let max = 0;
    const dfs = (idx, cnt) => {
      if (cnt == k) {
        let count = n;
        for (let str of strList) {
          for (let j = 0; j < str.length; ++j) {
            if (!visited[str.charCodeAt(j) - 97]) {
              count--;
              break;
            }
          }
        }
        max = Math.max(count, max);
        return;
      }

      for (let i = idx; i < 26; ++i) {
        if (visited[i]) continue;
        visited[i] = true;
        dfs(i, cnt + 1);
        visited[i] = false;
      }
    };
    if (k < 5) {
      console.log(0);
      return;
    }
    visited['a'.charCodeAt(0) - 97] = true;
    visited['n'.charCodeAt(0) - 97] = true;
    visited['t'.charCodeAt(0) - 97] = true;
    visited['i'.charCodeAt(0) - 97] = true;
    visited['c'.charCodeAt(0) - 97] = true;
    dfs(0, 5);
    console.log(max);
  });

/*
3 6
antarctica
antahellotica
antacartica */

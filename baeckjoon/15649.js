/* 문제
자연수 N과 M이 주어졌을 때, 아래 조건을 만족하는 길이가 M인 수열을 모두 구하는 프로그램을 작성하시오.

1부터 N까지 자연수 중에서 중복 없이 M개를 고른 수열
입력
첫째 줄에 자연수 N과 M이 주어진다. (1 ≤ M ≤ N ≤ 8)

출력
한 줄에 하나씩 문제의 조건을 만족하는 수열을 출력한다. 중복되는 수열을 여러 번 출력하면 안되며, 각 수열은 공백으로 구분해서 출력해야 한다.

수열은 사전 순으로 증가하는 순서로 출력해야 한다. */

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
    console.log(checked);
    let arr = Array.from({ length: n + 1 }, () => 0);
    let cnt = 1;
    const dfs = (cnt) => {
      console.log(checked, arr);
      if (cnt == m) {
        let str = '';
        for (let i = 0; i < m; ++i) {
          str += arr[i] + ' ';
        }
        console.log(str);
        return;
      }

      for (let i = 1; i <= n; ++i) {
        if (!checked[i]) {
          checked[i] = true;
          arr[cnt] = i;
          dfs(cnt + 1);
          checked[i] = false;
        }
      }
    };

    dfs(0);
  });

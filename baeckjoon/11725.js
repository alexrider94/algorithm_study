let input = [];

require('readline')
  .createInterface({ input: process.stdin, output: process.stdout })
  .on('line', (line) => input.push(line))
  .on('close', () => {
    let n = Number(input[0]);
    let data = input.slice(1).map((e) => e.split(' ').map((el) => parseInt(el)));
    let visited = Array(n + 1).fill(false);
    let connectedList = Array.from(Array(n + 1), () => new Array());
    for (let i = 0; i < data.length; ++i) {
      connectedList[data[i][0]].push(data[i][1]);
      connectedList[data[i][1]].push(data[i][0]);
    }

    let parent = Array(n + 1).fill(0);

    const dfs = (root) => {
      let stack = [root];
      visited[root] = true;

      while (stack.length) {
        let data = stack.pop();

        for (let i = 0; i < connectedList[data].length; ++i) {
          let next = connectedList[data][i];
          if (!visited[next]) {
            visited[next] = true;
            parent[next] = data;
            stack.push(next);
          }
        }
      }
    };

    dfs(1);

    let result = '';
    parent.slice(2).forEach((ans) => (result += ans + '\n'));
    console.log(result);
  });

/*
7
1 6
6 3
3 5
4 1
2 4
4 7
 */

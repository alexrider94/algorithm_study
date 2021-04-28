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
    let busStopList = input.slice(1).map((el) => el.split(' ').map((el) => parseInt(el)));

    let graph = Array.from({ length: n + 1 }, () => []);

    //make graph array.
    //index with start point and value with stop and hour as array
    for (let i = 0; i < busStopList.length; ++i) {
      let [start, end, hour] = busStopList[i];

      graph[start].push([end, hour]);
    }

    //def for bellman-ford
    const bellmanFord = (graph, start) => {
      let distance = Array(n + 1).fill(Infinity);
      let update;
      distance[start] = 0;
      for (let k = 1; k <= n; ++k) {
        update = false;
        for (let i = 1; i <= n; ++i) {
          for (let j = 0; j < graph[i].length; ++j) {
            const [next, hour] = graph[i][j];
            if (distance[next] > distance[i] + hour) {
              distance[next] = distance[i] + hour;
              update = true;
            }
          }
        }
        if (!update) break;
      }

      if (update) {
        return true;
      }
      return distance;
    };
    let dis = bellmanFord(graph, 1);
    if (dis == true) {
      console.log(-1);
      return;
    }
    for (let i = 2; i < dis.length; ++i) {
      if (dis[i] == Infinity) console.log(-1);
      else console.log(dis[i]);
    }
  });

/*
3 4
1 2 4
1 3 3
2 3 -1
3 1 -2
*/

/*
문제
그래프를 DFS로 탐색한 결과와 BFS로 탐색한 결과를 출력하는 프로그램을 작성하시오.단, 방문할 수 있는 정점이 여러 개인 경우에는 정점 번호가 작은 것을 먼저 방문하고, 더 이상 방문할 수 있는 점이 없는 경우 종료한다.정점 번호는 1번부터 N번까지이다.

입력
첫째 줄에 정점의 개수 N(1 ≤ N ≤ 1, 000), 간선의 개수 M(1 ≤ M ≤ 10, 000), 탐색을 시작할 정점의 번호 V가 주어진다.다음 M개의 줄에는 간선이 연결하는 두 정점의 번호가 주어진다.어떤 두 정점 사이에 여러 개의 간선이 있을 수 있다.입력으로 주어지는 간선은 양방향이다.

출력
첫째 줄에 DFS를 수행한 결과를, 그 다음 줄에는 BFS를 수행한 결과를 출력한다.V부터 방문된 점을 순서대로 출력하면 된다.

예제 입력 1
4 5 1
1 2
1 3
1 4
2 4
3 4

예제 출력 1
1 2 4 3
1 2 3 4

예제 입력 2
5 5 3
5 4
5 2
1 2
3 4
3 1

예제 출력 2
3 1 2 5 4
3 1 4 2 5

예제 입력 3
1000 1 1000
999 1000

예제 출력 3
1000 999
1000 999
*/

const readline = require('readline');

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

let input = [];
let graph;
let check;
let res = [];
rl.on("line", (line) => {
    // 정점의 개수 N(1 ≤ N ≤ 1,000), 간선의 개수 M(1 ≤ M ≤ 10,000), 탐색을 시작할 정점의 번호 V
    input.push(line)
}).on("close", () => {
    let [n, m, v] = input[0].split(" ").map((el) => parseInt(el));
    graph = Array.from(Array(n + 1), () => Array(n + 1).fill(0));
    check = new Array(n + 1).fill(false);
    for (let i = 0; i < m; ++i) {
        let [x, y] = input[i + 1].split(" ").map((el) => parseInt(el));
        graph[x][y] = 1;
        graph[y][x] = 1;
    }

    dfs(v);
    console.log(res.join(" "));
    check = new Array(n + 1).fill(false);
    res = [];
    bfs(v);
    console.log(res.join(" "));
    process.exit();
})

function dfs(V) {
    res.push(V);
    check[V] = true;
    for (let i = 1; i < graph.length; ++i) {
        if (graph[V][i] === 1 && check[i] === false) {
            dfs(i);
        }
    }
}

function bfs(V) {
    let queue = [];

    queue.push(V);
    res.push(V);

    while (queue.length !== 0) {
        let dequeue = queue.shift();
        check[dequeue] = true;
        for (let i = 1; i < graph.length; ++i) {
            if (graph[dequeue][i] === 1 && check[i] === false) {
                res.push(i);
                check[i] = true;
                queue.push(i);
            }
        }
    }
}



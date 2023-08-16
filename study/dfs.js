//recursive
function dfs(graph, vertex, visited) {
  visited[vertex] = true;
  console.log(vertex);

  for (let i = 0; i < graph[vertex].length; i++) {
    const next = graph[vertex][i];
    if (!visited[next]) {
      dfs(graph, next, visited);
    }
  }
}

//stack

function dfsStack(graph) {
  const visited = Array(graph.length).fill(false);
  const stack = [];
  stack.push(1);

  while (stack.length) {
    const vertex = stack.pop();
    console.log(vertex);

    visited[vertex] = true;
    for (let i = 0; i < graph[vertex].length; i++) {
      const next = graph[vertex][i];

      if (!visited[next]) {
        stack.push(next);

        break;
      }
    }
  }
}

const graph = [[], [2, 3, 8], [1, 7], [1, 4, 5], [3, 5], [3, 4], [7], [2, 6, 8], [1, 7]];
const visited = Array(9).fill(false);

dfs(graph, 1, visited);

console.log('################');
dfsStack(graph);

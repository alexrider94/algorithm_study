//dfs

function dfs(graph,v,visited){
  visited[v] = true;
  process.stdout.write(v + " ");

  for(let i of graph[v]){
    if(!visited[i]){
      dfs(graph, i, visited);
    }
  }
}

graph = [[],[2,3,8],[1,7],[1,4,5],[3,5],[3,4],[7],[2,6,8],[1,7]];

/*
0 1 2 3 4 5 6 7 8
1 0 1 1 0 0 0 0 1
2 1 0 0 0 0 0 1 0
3 1 0 0 1 1 0 0 0
4 0 0 1 0 1 0 0 0
5 0 0 1 1 0 0 0 0
6 0 0 0 0 0 0 1 0
7 0 1 0 0 0 1 0 1
8 1 0 0 0 0 0 1 0
*/
let dfsArr = [];


visited = new Array(9).fill(false);

dfs(graph,1,visited);
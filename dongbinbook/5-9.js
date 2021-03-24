// bfs -> queue data structure FIFO
// 시작 노드에 큐를 삽입하고 방문처리 -> 큐에서 노드를 꺼내 해당 노드의 인접 노드중에서 방문하지 않은 노드를 모두 큐에 삽입하고 방문 처리
// 반복
// 탐색 시간 : O(N)
// dequeue library 사용
//
const {Deque} = require('./dequeue');


const dq = new Deque();

function bfs(graph,start,visited){
  dq.push_back(start);
  visited[start] = true;
  while(dq.length()){
    v = dq.pop_front();
    process.stdout.write(v + " ");

    for(let i of graph[v]){
      if(!visited[i]){
        dq.push_back(i)
        visited[i] = true;
      }
    }
  }
}

visited = new Array(9).fill(false);

graph = [[],[2,3,8],[1,7],[1,4,5],[3,5],[3,4],[7],[2,6,8],[1,7]];

bfs(graph,1,visited);

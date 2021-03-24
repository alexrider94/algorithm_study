const readline = require('readline');
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});
const {Deque} = require('./dequeue');
const dq = new Deque();

let input = [];
let graph;
let N,M;

let dx = [-1,1,0,0]
let dy = [0,0,-1,1]

rl.on("line",(line)=>{
  input.push(line);
}).on("close",()=>{
  [N,M] = input[0].split(" ").map((el)=>parseInt(el));
  graph = input.slice(1).map(el=>el.split("").map((el)=>parseInt(el)));

  bfs(0,0);

  process.exit();
})

function bfs(i,j){
  dq.push_front([i,j]);
  while(dq.length()){
    let [x,y] = dq.pop_back();
    for(let i = 0 ; i<4; ++i){
      let nx = x + dx[i];
      let ny = y + dy[i];
      if(nx < 0 || ny <0  || nx >= N || ny >= M){
        continue;
      }
      if(graph[nx][ny] == 0){
        continue;
      }
      if(graph[nx][ny] == 1){
        graph[nx][ny] = graph[x][y] + 1
        dq.push_front([nx,ny])
      }
    }
  }
  console.log(graph[N-1][M-1]);
  return false;
}
/*
5 6
101010
111111
000001
111111
111111
*/

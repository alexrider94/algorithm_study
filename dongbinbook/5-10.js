const readline = require('readline');
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

let input = [];
let graph;
let N,M;


rl.on("line",(line)=>{
  input.push(line);
}).on("close",()=>{
  [N,M] = input[0].split(" ").map((el)=>parseInt(el));
  let result = 0;
  graph = input.slice(1).map(el=>el.split("").map((el)=>parseInt(el)));
  for(let i=0; i<N;++i){
    for(let j=0; j<M; ++j){
      console.log(dfs(i,j)+ "  " + i + " "+ j)
      if(dfs(i,j) == true){
        result += 1;
      }
    }
  }
  console.log(result);
  process.exit();
})

function dfs(i,j){
  if(i <= -1 || j <= -1 || i>=N || j>= M){
    return false;
  }
  if(graph[i][j] == 0){
    graph[i][j] = 1;
    dfs(i-1,j);
    dfs(i,j-1);
    dfs(i+1,j);
    dfs(i,j+1);
    return true;
  }
  return false;
}
/*
15 14
00000111100000
11111101111110
11011101101110
11011101100000
11011111111111
11011111111100
11000000011111
01111111111111
00000000011111
01111111111000
00011111111000
00000001111000
11111111110011
11100011111111
11100011111111

3 3
001
010
101
*/

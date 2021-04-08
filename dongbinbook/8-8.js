const readline = require('readline');

const rl = readline.createInterface({output:process.stdout,input:process.stdin});

const input = [];
const d = new Array(10001).fill(10001);
rl.on('line',(line)=>{
  input.push(line);
}).on('close',()=>{
  let [N,M] = input[0].split(" ");
  let list = input.slice(1).map(el=>parseInt(el));
  d[0] = 0;
  for(let i = 0; i<N; ++i){
    for(let j = list[i]; j<=M; ++j){
      console.log("test  : " + d[j-list[i]]);
      if(d[j-list[i]] != 10001) {
        d[j] = Math.min(d[j],d[j-list[i]] + 1)
      }
    }
  }

  if(d[M] == 10001) console.log(-1)
  else console.log(d[M])
})


/*
2 15
2
3
*/
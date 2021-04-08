const readline = require('readline');

const rl = readline.createInterface({output:process.stdout,input:process.stdin});

const input = [];
const d = new Array(1001).fill(0);
rl.on('line',(line)=>{
  input.push(line);
}).on('close',()=>{
  let N = input[0];

  //2xN
  //2X1 / 2X2 / 1X2
  d[1] = 1;
  d[2] = 3;

  for(let i=3; i<=N; ++i){
    d[i] = (d[i-1] + d[i-2] * 2) % 796796;
  }
  console.log(d[N]);
})
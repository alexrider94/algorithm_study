const readline = require('readline');
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

let input = [];
let dp = new Array(1000).fill(0);
rl.on('line',(line)=>{
  input.push(line);
}).on('close',()=>{
  let N = input[0];
  let array = input[1].split(" ").map((e)=>parseInt(e));
  console.log(array);
  dp[0] = array[0];
  dp[1] = array[1];

  for(let i = 2 ;i<array.length; ++i){
    dp[i] = Math.max(dp[i-1],dp[i-2]+array[i]);
  }
  //result
  console.log(dp[N-1]);
});

/*
4
1 3 1 5
*/
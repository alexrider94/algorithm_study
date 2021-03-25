const readline = require('readline');
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});
let dp = new Array(30001).fill(0);
let input = [];
rl.on('line',(line)=>{
  input.push(line)
}).on('close',()=>{

  for(let i = 2; i<=parseInt(input[0]); ++i){
    dp[i] = dp[i - 1] + 1;
    if(i % 2 == 0){
      dp[i] = Math.min(dp[i], Math.floor(dp[i/2]) + 1);
    }
    if(i % 3 == 0){
      dp[i] = Math.min(dp[i], Math.floor(dp[i/3]) + 1);
    }
    if(i % 5 == 0){
      dp[i] = Math.min(dp[i], Math.floor(dp[i/5]) + 1);
    }
  }

  console.log(dp[parseInt(input[0])]);
  process.exit();
})


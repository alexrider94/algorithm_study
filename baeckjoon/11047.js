const readline = require('readline');

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

let input = [];

rl.on("line",(line)=>{
  input.push(line);
}).on("close",()=>{
  let [N,K] = input[0].split(" ").map(el => parseInt(el));
  let answer = 0;
  let coinList = input.slice(1).map(el => parseInt(el));
  for(let i = coinList.length-1; i>=0; --i){
    answer += Math.floor(K / coinList[i]) ;
    K %= coinList[i];
  }

  console.log(answer);
  process.exit();
})

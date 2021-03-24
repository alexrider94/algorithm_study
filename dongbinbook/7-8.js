const readline = require('readline');
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

let input = [];
let N,M;
function bs(list,M,minD,maxD){
  while(minD <= maxD){
    let mid = Math.floor((minD+maxD)/2);
    let sum = 0;
    for(let i = 0; i<list.length; ++i){
      if(list[i]>mid){
        sum += (list[i]-mid);
      }
    }
    if(sum == M){
      return mid;
    }
    else if(sum > M){
      minD = mid + 1;
    }
    else {
      maxD = mid - 1;
    }
  }
  return null;
}

rl.on("line",(line)=>{
  input.push(line);
}).on("close",()=>{
  [N,M] = input[0].split(" ").map((el)=>parseInt(el));
  list = input[1].split(" ").map(el=>parseInt(el));
  let minD = 0;

  let maxD = Math.max(...list);
  let res = bs(list,M,minD,maxD);
  console.log(res);
  process.exit();
})

/**
4 6
19 15 10 17
 */
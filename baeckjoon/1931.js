const readline = require('readline');

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

let input = [];

rl.on("line",(line)=>{
  input.push(line);
}).on("close",()=>{
  let N = parseInt(input[0]);
  let meetingList = input.slice(1).map(el => {return el.split(" ").map(el=>parseInt(el))});

  //끝나는 시간이 빠른순으로 정렬 , 만약 끝나는 시간이 같다면 시작하는 시간이 빠른순으로 ex(1,2), (2,2)

  let sorted = meetingList.sort((a,b)=> {
    if(a[1] === b[1]) return a[0]-b[0];
    else return a[1]-b[1];
  });

  let ans = 1;
  let time = sorted[0][1];

  for(let i = 1 ; i<N; ++i){
    if(time <= sorted[i][0]){
      time = sorted[i][1];
      ans += 1;
    }
  }

  console.log(ans);
  process.exit();
})

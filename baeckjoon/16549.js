const readline = require('readline');

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

let result = '';
let res = [];

rl.on("line",(line)=>{
    let value = line.split(" ");
    //4 4 N M

    const N = Number(value[0]);
    const M = Number(value[1]);
    const visit = new Array(N);


    function df(count){
       if(count === M){
            result += `${res.join(' ')}\n`;
            return;
        }
    
        for(let i = 0; i<N ;++i){
            if(visit[i] === true) continue;
                visit[i] = true;
                res.push(i+1);
                df(count+1);
                res.pop();
                visit[i] = false;
            
        }
        console.log(res);
    }

    df(0);

    rl.close();
}).on("close",()=>{
    
    process.exit();
})

// const input = [4, 2];
// const N = input.shift();
// const M = input.shift();

// const visited = new Array(N);
// let output = [];
// let result = '';

// function dfs(cnt) {
//   if (cnt === M) {
//     result += `${output.join(' ')}\n`;
//     return;
//   }

//   for (let i = 0; i < N; i++) {
//     if (visited[i] === true) continue;
//     visited[i] = true;
//     output.push(i + 1);
//     dfs(cnt + 1);
//     output.pop();
//     visited[i] = false;
//   }
// }

// dfs(0);
// console.log(result.trim());
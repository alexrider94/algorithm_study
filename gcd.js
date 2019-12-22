function solution(n,m){
    let gcd = 1, lcm = 1;
    for(let index = 0; index<=Math.min(n,m); index++){
        if((n%index == 0)&&(m%index ==0)){
            gcd = index;
        }
    }
    lcm = n*m/gcd;
    return [gcd,lcm];
}

console.log(solution(2,5));
function solution(votes, k) {
    let unique = [...new Set(votes)];
    let first = unique.map(value => [value, votes.filter(str => str === value).length]).sort(sortFunction);
    let res;
    if (first.length == k) {
        res = first.pop();
    }
    while (first.length > k) {
        res = first.pop();
    }

    console.log(res);
}

function sortFunction(a, b) {
    if (a[1] === b[1]) {
        return 0;
    }
    else {
        return (a[1] < b[1]) ? 1 : -1;
    }
}

console.log(solution(["AVANT", "PRIDO", "SONATE", "RAIN", "MONSTER", "GRAND", "SONATE", "AVANT", "SONATE", "RAIN", "MONSTER", "GRAND", "SONATE", "SOULFUL", "AVANT", "SANTA"], 2));
console.log(solution(["AAD", "AAA", "AAC", "AAB"], 4))
/* ["AVANT", "PRIDO", "SONATE", "RAIN", "MONSTER", "GRAND", "SONATE", "AVANT", "SONATE", "RAIN", "MONSTER", "GRAND", "SONATE", "SOULFUL", "AVANT", "SANTA"]	2	"RAIN"
["AAD", "AAA", "AAC", "AAB"]	4	"AAB" */
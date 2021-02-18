let str = "abcdba";

function isPalindrome(str){
    let reverseStr = str.split('').reverse().join('');
    console.log(reverseStr);
    console.log(str);
    if (str === reverseStr) return true;
    else return false;
}

let data = [1, [2, [3, [4, [5, 6], 7], 8], 9], 10];

// [1,2,3,4,5,6,7,8,9,10]
function solution(data){
    let list = []
    let s = []
    for(let i = 0 ; i<data.length; ++i){
        if(typeof data[i] === "object"){
            s = solution(data[i]);
        }
        else{
            list.push(data[i]);
        }
    }

    return [...s, ...list].sort(function (a, b) {
        return a-b;
    });
}

console.log(solution(data));
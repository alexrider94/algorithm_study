// function check(num1, num2) {
//     let check = false;
//     let arr = [], arr2 = [];
//     if (num1.length === num2.length) {
//         for (var i = 0; i < num1.length; ++i) {
//             arr.push(num1.charAt(i));
//             arr2.push(num2.charAt(i));
//         }
//         arr.sort();
//         arr2.sort();
//         for (var i = 0; i < arr.length; ++i) {
//             if (arr[i] !== arr2[i]) check = false;
//             else {
//                 check = true;
//             }
//         }
//     }
//     let num = arr.join('');
//     return check, num;
// }

// for (var i = 0; i < arr.length - 1; ++i) {
//     let num1 = String(arr[i]);
//     let compareNum = String(arr[i + 1]);
//     for (var j = i + 1; j < arr.length; ++j) {
//         let num2 = String(arr[j]);
//         let result, num = check(num1, num2);
//         console.log(num);
//         if (result === true) {
//             //고민.... 같은것끼리 배열 묶기.
//         }
//     }
// }

function sortNum(num) {
    return String(num).split('').sort((a, b) => a > b).join('');
}

function solution(arr) {
    var ans = 0;
    var cache = {};
    for (var i = 0; i < arr.length; ++i) {
        const sortedNum = sortNum(arr[i]);
        if (!cache[sortedNum]) cache[sortedNum] = [];
        cache[sortedNum].push(arr[i]);
    }
    ans = Object.values(cache).length;
    return ans;
}

//var a = solution([112, 1184, 121, 1481, 1814]);
//var a = solution([123, 456, 789, 321, 654, 987]);
//var a = solution([1, 2, 3, 1, 2, 3, 4]);
var a = solution([123, 234, 213, 432, 234, 1234, 2341, 12345, 324]);
console.log(a);
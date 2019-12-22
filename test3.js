function solution(testcode){
    var str = testcode; //string
    var reg = '/[^\W]/g';
    var reverseStr = str.split('').reverse().join('');
    if(str == reverseStr) {
        return true;
    }
    else return false;
}

console.log(solution("aabba"));
console.log(solution("tst"));

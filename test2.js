function solution(code){
    var engArr=["zero","one","two","three","four","five","six","seven","eight","nine"]
    var result = code.map(function(value){
        var str = String(value);
        var resultStr = '';
        for(var i=0; i<str.length; i++){
            resultStr += engArr[Number(str.charAt(i))];
        }
        return resultStr;
    })
    return result.sort();
}

console.log(solution([3,5,104]));
/*
 * @lc app=leetcode id=20 lang=javascript
 *
 * [20] Valid Parentheses
 */
// "([{]})" ")"
// arr = [")""(" ] (stack) ([{
// @lc code=start
/**
 * @param {string} s
 * @return {boolean}
 */
var isValid = function (s) {
    let stack = [], i = 0;
    while (i !== s.length) {
        if (s[i] === "(" || s[i] === "{" || s[i] === "[") {
            stack.push(s[i]);
        } else {
            if (s[i] === ")" && ("(" !== stack.pop())) return false;
            else if (s[i] === "]" && ("[" !== stack.pop())) return false;
            else if (s[i] === "}" && ("{" !== stack.pop())) return false;
        }
        i++;
    }

    if (stack.length !== 0) return false;
    return true;
}
// @lc code=end
var isValid = function (s) {
    let list = { "(" : ")", "{": "}", "[":"]"};

    let verify = s.split("").reduce((acc,rec)=>{
        console.log(list[acc[acc.length-1]])
        if(rec === list[acc[acc.length-1]]){
            acc.pop();
        }else{
            acc.push(rec);
        }
        return acc;
    }, []);

    return verify.length === 0;
}

isValid("([])")
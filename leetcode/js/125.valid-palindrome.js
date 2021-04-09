/*
 * @lc app=leetcode id=125 lang=javascript
 *
 * [125] Valid Palindrome
 */

// @lc code=start
/**
 * @param {string} s
 * @return {boolean}
 */

var isPalindrome = function(s) {
    let d = s.toLowerCase().replace(/[^a-z0-9]/g,"");

    let f = 0 , b = d.length-1;
    for(let i = 0 ; i<d.length; ++i){
        if(d[f] !== d[b]) return false;
        f++;
        b--;
    }
    return true;
};
// @lc code=end
console.log(isPalindrome("A man, a plan, a canal: Panama"))
console.log(isPalindrome("ab_a"))
/*
 * @lc app=leetcode id=202 lang=javascript
 *
 * [202] Happy Number
 */

// @lc code=start
/**
 * @param {number} n
 * @return {boolean}
 */
var isHappy = function(n) {
  //같은 넘버가 찾아지면 false 넘기기.
  let set = new Set();
    while( n!== 1) {
      let result = 0;
      let numbers = [];
      String(n).split("").forEach(v=>{return numbers.push(Number(v))});
      for(let i = 0; i<numbers.length; ++i){
        result = result + numbers[i] * numbers[i];
      }
      if(set.has(result)){
        return false;
      }
      set.add(result);
      n = result;
    }
    return true;
};
// @lc code=end

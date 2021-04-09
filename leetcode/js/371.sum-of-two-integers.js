/*
 * @lc app=leetcode id=371 lang=javascript
 *
 * [371] Sum of Two Integers
 */

// @lc code=start
/**
 * @param {number} a
 * @param {number} b
 * @return {number}
 */

/**
 *
 * 비트 두개를 더한다고 생각했을 때, 올림수를 제외한 결과 비트는 XOR연산의 결과를 가짐 
 * 올림수를 계산하는 법은 AND 연산 이용 // 둘다 1일때 0이되지않고 1이 되기때문에
 * 덧셈을 쓸 수 없으니 Recursive를 이용해서 푸는데 두 수를 XOR한 값과 AND해서 1비트 왼쪽으로 쉬프트 시킨 수와의 합을 통해서 재귀하는식으로 더하면 됨. 종료조건으로는 AND연산으로 올림수들이 없을때 두 인자중 두수가 0이면 나머지를 리턴하면 됨.
 */
var getSum = function(a, b) {
  if(a === 0) return b;
  else if(b === 0) return a;
  // 1111
  // 1110
  //11101 = 0001 + 11100
  let sum = a^b;
  let carry = (a&b) << 1;
  return getSum(sum,carry);
};
// @lc code=end


console.log(getSum(13,5));

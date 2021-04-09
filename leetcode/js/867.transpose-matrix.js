/*
 * @lc app=leetcode id=867 lang=javascript
 *
 * [867] Transpose Matrix
 */

// @lc code=start
/**
 * @param {number[][]} matrix
 * @return {number[][]}
 */
var transpose = function (matrix) {
  let tMatrix = Array.from(Array(matrix[0].length), () => Array(matrix.length).fill(null));
  for (let i = 0; i < matrix[0].length; ++i) {
    for (let j = 0; j < matrix.length; ++j) {
      tMatrix[i][j] = matrix[j][i];
      console.log(tMatrix);
    }
  }

  return tMatrix;
};
// @lc code=end

transpose([
  [1, 2, 3],
  [4, 5, 6],
  [7, 8, 9],
]);

transpose([
  [1, 2, 3],
  [4, 5, 6],
]);

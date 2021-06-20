/*
 * @lc app=leetcode id=695 lang=javascript
 *
 * [695] Max Area of Island
 */

// @lc code=start
/**
 * @param {number[][]} grid
 * @return {number}
 */
var maxAreaOfIsland = function (grid) {
  const dx = [-1, 1, 0, 0];
  const dy = [0, 0, 1, -1];
  const n = Number(grid.length);
  const m = Number(grid[0].length);
  const check = Array.from(Array(n), () => Array(m).fill(false));

  let result = 0;

  const dfs = (i, j) => {
    let stack = [];
    let max = 0;
    stack.push([i, j]);
    check[i][j] = true;
    while (stack.length) {
      let [x, y] = stack.pop();
      max++;
      for (let i = 0; i < 4; ++i) {
        let moveX = dx[i] + x;
        let moveY = dy[i] + y;
        if (moveX >= 0 && moveY >= 0 && moveX < n && moveY < m && grid[moveX][moveY] == 1 && !check[moveX][moveY]) {
          stack.push([moveX, moveY]);
          check[moveX][moveY] = true;
        }
      }
    }
    return max;
  };

  for (let i = 0; i < n; ++i) {
    for (let j = 0; j < m; ++j) {
      if (grid[i][j]) {
        let m = dfs(i, j);
        if (m > result) result = m;
      }
    }
  }
  return result;
};

function solution(board, moves) {
  let stack = [];
  let result = 0;
  for (let m = 0; m < moves.length; ++m) {
    let loop = true;
    let i = 0;
    while (loop) {
      for (let j = 0; j < board[0].length; ++j) {
        if (moves[m] == j + 1) {
          if (i == board.length - 1) {
            loop = false;
          }
          if (board[i][j] != 0) {
            stack.push(board[i][j]);
            board[i][j] = 0;
            loop = false;
            break;
          }

          i++;
        }
      }
    }

    for (let i = 0; i < stack.length - 1; ++i) {
      if (stack[i] == stack[i + 1]) {
        stack.splice(i, 2);
        result += 2;
      }
    }
  }
  return result;
}
console.log(
  solution(
    [
      [0, 0, 0, 0, 0],
      [0, 0, 1, 0, 3],
      [0, 2, 5, 0, 1],
      [4, 2, 4, 4, 2],
      [3, 5, 1, 3, 1],
    ],
    [1, 5, 3, 5, 1, 2, 1, 4]
  )
);

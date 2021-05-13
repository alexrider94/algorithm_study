function solution(left, right) {
  const getValue = (left, irght) => {
    let sum = 0;
    for (let n = left; n <= right; ++n) {
      let list = [];
      for (let i = 1; i <= n; ++i) {
        if (n % i == 0) {
          list.push(n);
        }
      }

      if (list.length % 2 == 0) {
        sum += list[list.length - 1];
      } else {
        sum -= list[list.length - 1];
      }
    }

    return sum;
  };
  var answer = getValue(left, right);
  return answer;
}

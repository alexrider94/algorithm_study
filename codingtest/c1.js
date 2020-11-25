function format(a, n) {
  let tmp = a;
  let arr = [];
  let digit = "0123456789";

  while (tmp > n) {
    arr.unshift(digit[tmp % n]);
    tmp = parseInt(tmp / n);
  }

  arr.unshift(digit[tmp]);
  return arr;
}

function solution(N) {
  let save = [];
  for (let i = 2; i < 10; i++) {
    const t = format(N, i).join("");
    let r = t.split("");
    let result = 1;
    for (let i = 0; i < r.length; i++) {
      if (r[i] == 0) continue;
      else {
        result = result * parseInt(r[i]);
      }
    }
    save.push(result);
    result = 1;
  }

  let max = save[0];
  let idx = 0;
  for (let i = 0; i < save.length; ++i) {
    if (max <= save[i]) {
      max = save[i];
      idx = i;
    }
  }
  return [idx + 2, max];
}

let s = solution(14);
console.log(s);

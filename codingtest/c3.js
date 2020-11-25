function solution(k, score) {
  let list = [];
  let a = 0;
  for (let i = 0; i < score.length - 1; ++i) {
    list.push(score[i] - score[i + 1]);
  }

  let map = list.reduce(function (obj, b) {
    obj[b] = ++obj[b] || 1;
    return obj;
  }, {});

  let b = 0;
  let data = new Set();
  for (let [key, value] of Object.entries(map)) {
    if (k <= value) {
      b = key;
      for (let i = 0; i < score.length - 1; ++i) {
        if (score[i] - score[i + 1] == b) {
          data.add(score[i]);
          data.add(score[i + 1]);
        }
      }
    }
  }

  if (b == 0) return 0;
  else return score.length - data.size;
}

let s1 = solution(3, [24, 22, 20, 10, 5, 3, 2, 1]);

let s2 = solution(2, [
  1300000000,
  700000000,
  668239490,
  618239490,
  568239490,
  568239486,
  518239486,
  157658638,
  157658634,
  100000000,
  100,
]);

console.log("테스터1: " + s1 + "테스트2: " + s2);

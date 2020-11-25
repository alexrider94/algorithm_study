function solution(n, cus) {
  let q = new Array(n).fill("0");
  let nlist = [];
  let s = [];
  for (let i = 0; i < cus.length; ++i) {
    let data = cus[i].split(" ");

    let takeTime = data[2] * 1000 * 60;
    let time = new Date(data[0] + " " + data[1]).getTime();

    nlist.push(time + takeTime);
  }

  for (let i = 0; i < q.length; ++i) {
    s.push(nlist[i]);
    q[i] = [nlist[i], 1];
  }
  for (let i = n; i < nlist.length; ++i) {
    let first = s.indexOf(Math.min.apply(null, s));
    s[first] = nlist[i];
    q[first] = [nlist[i], q[first][1] + 1];
  }
  let max = q[0][1];
  for (let i = 0; i < q.length; ++i) {
    if (max < q[i][1]) max = q[i][1];
  }
  return max;
}

let s = solution(3, [
  "10/01 23:20:25 30",
  "10/01 23:25:50 26",
  "10/01 23:31:00 05",
  "10/01 23:33:17 24",
  "10/01 23:50:25 13",
  "10/01 23:55:45 20",
  "10/01 23:59:39 03",
  "10/02 00:10:00 10",
]);

let s2 = solution(2, [
  "02/28 23:59:00 03",
  "03/01 00:00:00 02",
  "03/01 00:05:00 01",
]);

console.log(s2);

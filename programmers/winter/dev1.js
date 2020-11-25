function solution(p, n) {
  let sec = parseInt(n);
  let list = p.split(" ");

  let f = list[0];
  let t = list[1].split(":");

  let h = parseInt(t[0]);
  let m = parseInt(t[1]);
  let s = parseInt(t[2]);

  if (f == "PM") {
    h = h + 12;
  }
  if (h == 12 && f == "AM") {
    h = 0;
  }
  if (h == 24 && f == "PM") {
    h = 12;
  }
  s += parseInt(n);

  let time = ((h * 60 * 60) + (m * 60) + s) * 1000;
  let data = new Date(time).toISOString();
  return data.substr(11, 8);
}

console.log(solution("PM 01:00:00", 10));
console.log(solution("PM 11:59:59", 1));

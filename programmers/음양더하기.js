function solution(absolutes, signs) {
  for (let i = 0; i < absolutes.length; ++i) {
    if (signs[i] == true) absolutes[i] = absolutes[i];
    else absolutes[i] = -absolutes[i];
  }
  return absolutes.reduce((acc, val) => acc + val);
}

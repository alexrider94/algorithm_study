let input = [];
require('readline')
  .createInterface({
    input: process.stdin,
    output: process.stdout,
  })
  .on('line', (line) => {
    input.push(line);
  })
  .on('close', () => {
    let [n, k] = input[0].split(' ').map((el) => parseInt(el));
    let sum = 0;

    let bagWeight = input
      .slice(n + 1)
      .map((el) => parseInt(el))
      .sort((a, b) => b - a);
    let jList = input
      .slice(1, n + 1)
      .map((el) => el.split(' ').map((el) => parseInt(el)))
      .sort((a, b) => {
        if (b[1] == a[1]) return a[0] - b[0];

        return b[1] - a[1];
      });

    let idx = 0;

    console.log(jList, bagWeight);

    for (let i = 0; i < jList.length; ++i) {
      if (idx == jList.length - 1) break;
      if (jList[i][0] <= bagWeight[idx]) {
        sum += jList[i][1];
        idx++;
      }
    }
    console.log(sum);
  });
/*
4 2
1 65
5 23
10 99
5 60
10
2
*/

/*
4 2
1 65
5 23
11 99
5 60
10
2
*/

/*
3 2
1 65
5 23
2 99
10
2
*/

// let jList = input
//   .slice(1, n + 1)
//   .map((el) => el.split(' ').map((el) => parseInt(el)))
//   .sort((a, b) => {
//     return b[1] - a[1];
//   });

// let bagWeight = input.slice(n + 1);
// //가방에 최대 1개의 보석.
// let checked = Array.from({ length: bagWeight.length }, () => false);
// for (let i = 0; i < jList.length; ++i) {
//   let weight = jList[i][0];
//   let value = jList[i][1];
//   for (let j = 0; j < bagWeight.length; ++j) {
//     if (!checked[j]) {
//       if (weight <= bagWeight[j]) {
//         checked[j] = true;
//         sum += value;
//         break;
//       }
//     }
//   }
// }

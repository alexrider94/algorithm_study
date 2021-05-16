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
      .sort((a, b) => a - b);
    let jList = input
      .slice(1, n + 1)
      .map((el) => el.split(' ').map((el) => parseInt(el)))
      .sort((a, b) => {
        if (b[1] == a[1]) return a[0] - b[0];

        return b[1] - a[1];
      });

    const lowerBound = (target, bag) => {
      let start = 0;
      let end = bag.length;
      let mid;
      while (start < end) {
        mid = Math.floor((start + end) / 2);
        if (bag[mid] >= target) end = mid;
        else start = mid + 1;
      }
      return end;
    };
    let count = k;
    for (let i = 0; i < jList.length; ++i) {
      if (count == 0) break;
      const [weight, price] = jList[i];
      const base = lowerBound(weight, bagWeight);
      if (base < bagWeight.length) {
        bagWeight.splice(base, 1);
        sum += price;
        count--;
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

/*
4 4
1 100
2 200
13 300
10 500
10
10
10
14
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

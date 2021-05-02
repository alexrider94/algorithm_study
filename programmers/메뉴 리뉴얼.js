function solution(orders, course) {
  let answer = [];

  let d = {};
  const combination = (arr, target, n, r, count) => {
    if (r == 0) {
      let count = d[target] || 0;
      d[target] = count + 1;
    } else if (n === 0 || n < r) return;
    else {
      combination(arr, target + arr[count], n - 1, r - 1, count + 1);
      combination(arr, target, n - 1, r, count + 1);
    }
  };

  course.map((c) => {
    for (let i = 0; i < orders.length; ++i) {
      combination(orders[i].split('').sort(), '', orders[i].length, c, 0);
    }

    console.log(d);
  });
}
/*
['ABCFG', 'AC', 'CDE', 'ACDE', 'BCFG', 'ACDEH'],[2, 3, 4]
['AC', 'ACDE', 'BCFG', 'CDE']

['ABCDE', 'AB', 'CD', 'ADE', 'XYZ', 'XYZ', 'ACD'],[2, 3, 5]
['ACD', 'AD', 'ADE', 'CD', 'XYZ']

['XYZ', 'XWY', 'WXA'][2, 3, 4]
['WX', 'XY'];
*/

solution(['ABCFG', 'AC', 'CDE', 'ACDE', 'BCFG', 'ACDEH'], [2, 3, 4]);

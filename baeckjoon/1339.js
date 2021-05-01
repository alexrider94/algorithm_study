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
    let words = input.slice(1);
    let alphabet = Array.from({ length: 26 }, () => []);
    let result = Array.from({ length: 26 }, () => []);
    /*
    1. index position
    2. word's length
    3. how many duplicated word have (count word)
  */
    const decideNumber = (words) => {
      //alphabet array with word length ,index and count

      let s = {};
      for (let i = 0; i < words.length; ++i) {
        p = 1;
        for (let j = words[i].length - 1; j >= 0; --j) {
          s[words[i][j]] ? (s[words[i][j]] = s[words[i][j]] + p) : (s[words[i][j]] = p);
          p = p * 10;
        }
      }
      let list = Object.entries(s).sort((a, b) => {
        return b[1] - a[1];
      });

      let v = 9;
      for (let i = 0; i < list.length; ++i) {
        list[i][1] = v * list[i][1];
        v--;
      }
      return list;
    };

    let l = decideNumber(words);
    let c = 0;

    for (let k = 0; k < l.length; ++k) {
      c += l[k][1];
    }
    console.log(c);
  });

/*
2
GCF
ACDEB
 */

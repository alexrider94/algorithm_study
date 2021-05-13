function solution(numbers) {
  let replaceAt = function (input, index, character) {
    return input.substr(0, index) + character + input.substr(index + character.length);
  };
  let list = [];
  for (let i = 0; i < numbers.length; ++i) {
    let bit = numbers[i].toString(2);
    bit = '0' + bit;
    let min = Infinity;
    for (let j = 0; j < bit.length; ++j) {
      let count = 2;
      let index = j;
      let tempBit = bit.slice();
      while (count) {
        if (index == bit.length) break;

        tempBit = Number(tempBit[index]) ? replaceAt(tempBit, index, '0') : replaceAt(tempBit, index, '1');
        index++;
        count--;
        let value = parseInt(tempBit, 2);
        if (min > value && value > numbers[i]) min = value;
      }
    }
    list.push(min);
  }
  return list;
}

solution([2, 7]);
//[3,11]

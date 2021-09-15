function solution(word, cards) {
  let answer = -1;
  // if(left.length === 0) break;

  const check = (checkArr, index, i, j) => {
    console.log(word[index], index);
    if (!checkArr[i][j]) {
      if (word[index] === cards[i][j]) {
        for (let x = 0; x < checkArr[i].length; ++x) {
          checkArr[i][x] = true;
        }

        for (let y = 0; y < checkArr.length; ++y) {
          checkArr[y][j] = true;
        }
        console.log(checkArr, word[index]);
      }
    }
  };

  const row = cards[0].length;
  const column = cards.length;

  for (let x = 0; x < word.length; ++x) {
    const checkArr = Array.from(Array(cards[0].length), () => Array(cards.length).fill(false));
    let index = 0;
    for (let i = 0; i < column; ++i) {
      for (let j = 0; j < row; ++j) {
        check(checkArr, index, i, j);
        index++;
      }
    }
  }
  return answer;
}

solution('APPLE', ['LLZKE', 'LCXEA', 'CVPPS', 'EAVSR', 'FXPFP']);

/*
카드 N x N장이 N행 N열 형태로 정렬되어 탁자 위에 놓여있습니다.
각 카드에는 알파벳이 하나씩 적혀 있습니다.
단어 하나가 주어질 때, 카드를 적절히 선택해 해당 단어를 만드는 것이 게임의 목표입니다.
3-1. 카드를 선택할 때 같은 행, 같은 열에 있는 카드는 최대 한 장만 고를 수 있습니다.
단어 word와 카드가 놓인 형태를 나타내는 문자열 배열 cards가 매개변수로 주어질 때, 단어를 만들 수 있도록 카드를 선택하는 방법의 개수를 return 하도록 solution 함수를 완성해주세요. 만약, 단어를 만드는 방법이 없다면 0을 return 해주세요.

제한사항
word의 길이는 1 이상 8 이하입니다.
word는 알파벳 대문자로만 이루어져 있습니다.
cards의 길이는 4 이상 8 이하입니다.
cards의 원소는 각 행 별로 카드에 적힌 알파벳을 나타내는 문자열입니다.
각 문자열의 길이는 cards 배열의 길이(문자열 개수)와 같습니다.
모든 문자열은 알파벳 대문자로만 이루어져 있습니다. */

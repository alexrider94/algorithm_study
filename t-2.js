function solution(grades) {
  let result = [];
  let newList = [];
  for (let i = 0; i < grades.length; ++i) {
    let [title, grade] = grades[i].split(' ');
    if (checkDup(title, newList)) {
      //check grade
      for (let i = 0; i < newList.length; ++i) {
        const [oldTitle, oldGrade] = newList[i];
        if (oldTitle === title) {
          let oldScore = score(oldGrade);
          let newScore = score(grade);
          //lower is better score
          if (oldScore > newScore) {
            newList.splice(i, 1);

            newList.push([title, grade]);
          }
        }
      }
    } else {
      newList.push([title, grade]);
    }
  }

  //sort
  let sorted = newList.sort((a, b) => {
    if (score(a[1]) < score(b[1])) {
      return -1;
    } else {
      return 1;
    }
  });

  //convert to answer array
  for (let i = 0; i < sorted.length; ++i) {
    const [title, grade] = sorted[i];
    result.push(`${title} ${grade}`);
  }

  return result;
}

//check duplication
function checkDup(title, newList) {
  for (let i = 0; i < newList.length; ++i) {
    const existTitle = newList[i][0];
    if (existTitle === title) {
      return true;
    }
  }
  return false;
}

//score grade
function score(grade) {
  const list = ['A+', 'A0', 'A-', 'B+', 'B0', 'B-', 'C+', 'C0', 'C-', 'D+', 'D0', 'D-', 'F'];

  for (let i = 0; i < list.length; ++i) {
    if (grade == list[i]) return i;
  }

  return 0;
}

function solution(skill, skill_trees) {
  let result = 0;
  for (let skillList of skill_trees) {
    let temp = [];
    let flag = 1;
    for (let i = 0; i < skillList.length; ++i) {
      for (let j = 0; j < skill.length; ++j) {
        if (skillList[i] == skill[j]) {
          temp.push(skillList[i]);
        }
      }
    }

    for (let i = 0; i < temp.length; ++i) {
      if (temp[i] != skill[i]) {
        flag = 0;
        break;
      }
    }
    if (flag) result++;
  }

  return result;
}
console.log(solution('CBD', ['BACDE', 'CBADF', 'AECB', 'BDA']));

function solution(infos, actions) {
  let answer = [];
  let userInfo = {};
  let wishList = [];
  let login = null;
  //set userInfo
  for (let i = 0; i < infos.length; ++i) {
    const [id, password] = infos[i].split(' ');
    userInfo[id] = password;
  }

  //loop actions
  for (let i = 0; i < actions.length; ++i) {
    const [method, first, second] = actions[i].split(' ');
    if (method === 'LOGIN') {
      if (!login) {
        //loop userInfo for check id
        let check = false;
        for (let i = 0; i < Object.keys(userInfo).length; ++i) {
          if (userInfo[first] && userInfo[first] === second) {
            if (login) break;
            login = [first, second];
            check = true;
            answer.push(true);
          }
        }
        if (!check) answer.push(false);
      } else {
        answer.push(false);
      }
    } else if (method === 'ADD') {
      //login check
      if (!login) {
        answer.push(false);
      } else {
        answer.push(true);
        wishList.push(first);
      }
    } else if (method === 'ORDER') {
      //wish list empty check
      if (wishList.length === 0) {
        answer.push(false);
      } else {
        answer.push(true);
        wishList = [];
      }
    } else {
      console.log('incorrect Method');
    }
  }

  return answer;
}

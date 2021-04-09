/*
 * @lc app=leetcode id=682 lang=javascript
 *
 * [682] Baseball Game
 */

// @lc code=start
/**
 * @param {string[]} ops
 * @return {number}
 */
var calPoints = function(ops) {
    let record = [], idx = -1;
    //index값을 따로 주고 추적, -1부터 시작하는 이유는 push할때 앞에값에 붙어서 한인덱스 낮춰서 해야함.
    for(let i = 0; i<ops.length;++i){
      if(ops[i]==="C"){
          record.pop();
          idx--;
        }
        else if(ops[i]==="D"){
          record.push(String(Number(record[idx]*2)))
          idx++;
        }
        else if(ops[i]==="+"){
          record.push(String(Number(record[idx])+Number(record[idx-1])));
          idx++;
        }
        else{
          record.push(ops[i]);
          idx++;
        }
    }
    return record.reduce((acc,curr)=> {return Number(acc)+Number(curr)})
};
// @lc code=end

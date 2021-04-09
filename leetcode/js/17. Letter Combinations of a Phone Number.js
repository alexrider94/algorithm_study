/**
 * this function is for user input
 * @param {string} digits
 * @return {string[]}
 */

var letterCombinations = function(digits) {
    let list = {2:"abc",3:'def',4:'ghi',5:'jkl',6:'mno',7:'pqrs',8:'tuv',9:'wxyz'};

    if(digits.length == 0 || digits == null) return [];

    let result = [];
    const dfs = (start, string) => {
      if(start== digits.length){
        result.push(string);
        return;
      }

      for(const letter of  list[digits[start]]){
        dfs(start+1, string+letter);
      }
    }

    dfs(0,"");
    console.log(result);
};

letterCombinations("23");
/**
 * @param {number} n
 * @return {string}
 */
var countAndSay = function (n) {
    var str = '1';
    for (var i = 1; i < n; ++i) {
        var strArr = str.split('');
        str = '';
        var count = 1;
        for (var j = 0; j < strArr.length; j++) {
            if (strArr[j] !== strArr[j + 1]) {
                str += count + strArr[j];
                count = 1;
            }
            else {
                count++;
            }
        }
    }
    return String(str);
};

console.log(countAndSay(3));

/*
Example 1:

Input: n = 1
Output: "1"
Explanation: This is the base case.


Example 2:

Input: n = 4
Output: "1211"
Explanation:
countAndSay(1) = "1"
countAndSay(2) = say "1" = one 1 = "11"
countAndSay(3) = say "11" = two 1's = "21"
countAndSay(4) = say "21" = one 2 + one 1 = "12" + "11" = "1211"
*/
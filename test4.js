/**
 * @param {string} s
 * @return {number}
 */
var lengthOfLongestSubstring = function (s) {
    let stringList = []
    let maxLength = 0

    for (let i = 0; i < s.length; i++) {
        if (stringList.includes(s[i])) {
            const charToRemove = stringList.indexOf(s[i]) + 1
            stringList = stringList.slice(charToRemove)
        }
        stringList.push(s[i])
        maxLength = Math.max(maxLength, stringList.length)
    }

    return maxLength
};

console.log(lengthOfLongestSubstring("strreqdasd"));
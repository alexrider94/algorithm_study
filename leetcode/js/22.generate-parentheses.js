/*
 * @lc app=leetcode id=22 lang=javascript
 *
 * [22] Generate Parentheses
 */

// @lc code=start
/**
 * Backtracking solution.
 * Note: Time and Space complexity is complicated. Catalan number: 4^n/(n*sqrt(n))
 * Time = O(n*Catalan) because we generat combinations through n steps, each
 * step takes a Catalan number to backtrack.
 * Time = O(4^n/(sqrt(n)))
 * Space = O(4^n/(sqrt(n))) because we need n space to store the sequence.
 * @param {number} n
 * @return {string[]}
 */
var generateParenthesis = function (n) {
    const combinations = [];
    // Here we know we can only start with an opening bracket => use 1 open:
    // but we can also start with an empty string and 0 like so:
    // buildCombinationFrom('', 0, 0, n, combinations);
    buildCombinationFrom('(', 1, 0, n, combinations);
    return combinations;
};

/**
 * Helper method generates combinations uses backtracking.
 * @param {string} string 
 * @param {number} openUsed 
 * @param {number} closeUsed 
 * @param {number} n 
 * @param {string[]} combinations 
 */
function buildCombinationFrom(string, openUsed, closeUsed, n, combinations) {
    // Base case: when we reach 2n length
    if (string.length === 2 * n) {
        // Add the string to the list of combination:
        combinations.push(string);
        // Exit from this recursive call.
        return;
    }
    // Case: when we can add more opening bracket:
    // If we haven't used all opening bracket (n pairs = n opens)
    if (openUsed < n) {
        // Add 1 opening, update opening used:
        buildCombinationFrom(string + '(', openUsed + 1, closeUsed, n, combinations);
    }
    // Case: when we can add more closing bracket:
    // If we have more opening than closing:
    if (openUsed > closeUsed) {
        // Add 1 closing, update closing used:
        buildCombinationFrom(string + ')', openUsed, closeUsed + 1, n, combinations);
    }
}
// @lc code=end


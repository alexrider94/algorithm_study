/*
 * @lc app=leetcode id=11 lang=javascript
 *
 * [11] Container With Most Water
 */

// @lc code=start
/**
 * @param {number[]} height
 * @return {number}
 */
// 모든 경우 계산
// var maxArea = function(height) {
//     let maxArea = 0;
//     for(let front = 0; front< height.length; ++front){
//       for(let back = height.length-1; back>front; --back){
//         let wid = back - front;
//         let hei = Math.min(height[front],height[back]);
//         let area = wid * hei;
//         if(maxArea < area) maxArea = area;
//       }
//     }
//     return maxArea;
// };

//front랑 back이 만나는 부분까지 계산
var maxArea = function(height) {
    let maxArea = 0;
    for(let front = 0, back = height.length-1; front< back;){
        let wid = back - front;
        let hei = Math.min(height[front],height[back]);

        let area = wid * hei;
        if(maxArea < area) maxArea = area;

        if(height[front] < height[back]) front++
        else back--;
    }

    return maxArea;
};
// @lc code=end

console.log(maxArea([1,8,6,2,5,4,8,3,7]))
// maxArea([1,1])
// maxArea([4,3,2,1,4])
// maxArea([1,2,1])
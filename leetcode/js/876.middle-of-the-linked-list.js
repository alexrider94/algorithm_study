/*
 * @lc app=leetcode id=876 lang=javascript
 *
 * [876] Middle of the Linked List
 */

// @lc code=start

function ListNode(val, next) {
  this.val = val === undefined ? 0 : val;
  this.next = next === undefined ? null : next;
}

/**
 * @param {ListNode} head
 * @return {ListNode}
 */
var middleNode = function (head) {
  // let fastpointer = head.next.next; 2
  // let slowpointer = head.next; 1
  // if(fastpointer) return slowpointer;
  let temp = head;
  let count = 1;
  while (temp.next != null) {
    temp = temp.next;
    count++;
  }

  let temp2 = head;
  for (let i = 0; i < Math.floor(count / 2); ++i) {
    temp2 = temp2.next;
  }
  return temp2;
};
// @lc code=end

console.log(middleNode(list));

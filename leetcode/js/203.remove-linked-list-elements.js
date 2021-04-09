/*
 * @lc app=leetcode id=203 lang=javascript
 *
 * [203] Remove Linked List Elements
 */

// @lc code=start
//Definition for singly-linked list.
function ListNode(val, next) {
    this.val = (val===undefined ? 0 : val)
    this.next = (next===undefined ? null : next)
}
/**
 * @param {ListNode} head
 * @param {number} val
 * @return {ListNode}
 */
var removeElements = function(head, val) {
  let current = head;
  let previous = null;

  while(current){
    if(current.val === val) {
      if(previous){
        previous.next = current.next;
      }else{
        head = current.next;
      }
    }else{
      previous = current.next;
    }

    return head;
  }
};
// @lc code=end


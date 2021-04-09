
//Definition for singly-linked list.
  function ListNode(val, next) {
      this.val = (val===undefined ? 0 : val)
      this.next = (next===undefined ? null : next)
  }

/**
 * @param {ListNode} head
 * @param {number} left
 * @param {number} right
 * @return {ListNode}
 */

// part 1 -> reversed -> part 2
var reverseBetween = function(head, left, right) {

  //part1이랑 reversedHead랑 나누기
  let reversedHead = head, part1Tail = null;
  for(let i = 1; i<left; i++){
    part1Tail = reversedHead;
    reversedHead = reversedHead.next;
  }
  console.log(part1Tail); //1->2->3->4->5
  console.log(reversedHead); //2->3->4->5

  //reversing
  let reversedTail = reversedHead;

  let reversedPrev = null, reversedNext = null;
  for(let i = 0; i<=(right-left); ++i){
    reversedNext = reversedHead.next;
    //1. null = 3->4->5 reversedNext: 3->4->5
    //2. 3->4->5 = 4->5 reversedNext: 4->5
    //3. 4->5 = 5->null
    //reversedHead = 3->4->5->null // reversedHead.next = 4->5->null
    reversedHead.next = reversedPrev;
    //1. reversedHead: 2->null
    //2. reversedHead: 3->2->null  --> reversedHead이 3부터 시작인데 꼬리부터 reversedPrev가 2->null이고 next에 붙여지면 3->2->null
    //3. reversedHead: 4->3->2->null
    reversedPrev = reversedHead;

    //1. null = 2->null
    //2. 2->null = 3->2->null
    //3. 3->2->null = 4->3->2->null
    reversedHead = reversedNext;
    //1. 2->null = 3->4->5
    //2. 3->4->5 = 4->5
    //3. 4->5 = 5->null

    //1. reversedPrev = 2->null
    //1. reversedHead = 3->4->5
    //1. reversedNext = 3->4->5
  }
  console.log(head); //1->2->null
  console.log(reversedTail); //2->null
  console.log(reversedHead); //5->null
  //reversedHead is head of part2
  //connect reversed part to part2
  reversedTail.next = reversedHead;
  console.log(reversedTail); //2->5->null
  if(part1Tail == null) return reversedPrev;
  console.log(part1Tail); //1->2->5
  // reversedPrev now is the head of the reversed part
  part1Tail.next = reversedPrev;
  console.log(part1Tail); //1->4->3->2->5
  return head;
};

let list5 = new ListNode(5);
let list4 = new ListNode(4,list5);
let list3 = new ListNode(3,list4);
let list2 = new ListNode(2,list3);
let list = new ListNode(1,list2);

reverseBetween(list,2,4)
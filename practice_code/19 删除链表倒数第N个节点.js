/**
 * 删除链表倒数第N个节点
 * 思路：快慢指针，快指针先走n步，然后快慢指针一起走，当快指针走到尾部时，慢指针的下一个节点就是要删除的节点
 */
const deleteNode = (s, n) =>{
let fast = s, slow = s;
while(n-- >0){
    fast = fast.next;
}
if(fast == null)return slow.next;
while(fast.next){
    fast = fast.next;
    slow = slow.next;
}
slow.next = slow.next.next;
return s;
}
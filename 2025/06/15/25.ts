import { ListNode } from "./list_node";


// you are guranteed that this will terminate
export function reverseK(head: ListNode | null, init: ListNode | null, k: number): ListNode | null {
    let prev = init
    let curr = head 
    for (let i = 0; i < k; i++) {
        let t = curr.next 
        curr.next = prev 
        prev = curr 
        curr = t
    }
    return prev
};

// if k exist, reverse and stitch with the result of recursively calling the function, 
export function reverseKGroup(head: ListNode | null, k: number): ListNode | null {
    let node = head
    for (let i = 0; i < k; i++) {
        if (!node) return head
        node = node.next
    }
    return reverseK(head,reverseKGroup(node, k), k)
};
import type { ListNode } from "./list_node"

// mine
// O(n) memory.
export function hasCycle(head: ListNode | null): boolean {
    const internalRecursive = (head: ListNode|null, set: Set<ListNode>) => {
        if (head === null) {
            return false 
        } else if (set.has(head)) {
            return true
        }
        else {
            set.add(head)
            return internalRecursive(head.next, set)
        }
    }
    return internalRecursive(head, new Set([]))
};

// O(1) memory 
// theirs
// two pointers 
//   one fast 
//   one slow 
//   if there is a cycle, the fast one will lap the slow one.
export function hasCycleConstant(head: ListNode | null): boolean {
    let rabbit = head 
    while (head && head.next) {
        head = head.next
        rabbit = rabbit?.next?.next ?? null
        if (head === rabbit) return true
    }
    return false 
};
import { ListNode } from "./list_node"

// mine
export function addTwoNumbers(l1: ListNode | null, l2: ListNode | null): ListNode | null {
    const helper = (l1: ListNode | null, l2: ListNode | null, total: ListNode | null, carry: number): ListNode | null => {
        if (!l1 && !l2 && carry === 0) {
            return total
        }
        const val = (((l1?.val ?? 0) + (l2?.val ?? 0)) + carry) 
        const newCarry = Math.floor(val / 10)
        return new ListNode(val % 10, helper(l1?.next ?? null, l2?.next ?? null, total, newCarry))
    }
    return helper(l1, l2, null, 0)
};


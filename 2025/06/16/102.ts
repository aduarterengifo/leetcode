import { TreeNode } from "./tree_node";

// Tree structure:
//      3
//     / \
//    9  20
//      /  \
//     15   7

export const exampleTree = new TreeNode(
    3,
    new TreeNode(9),
    new TreeNode(
        20,
        new TreeNode(15),
        new TreeNode(7, new TreeNode(8))
    )
);




export const BFS = <V>(head: number, queue: [TreeNode,TreeNode | null, number][], acc: V, f: (acc: V, elem: [TreeNode,TreeNode | null, number]) => V): V => {
    const node = queue[head++];
    if (!node) {
        return acc;
    } else {
        let accPrime = f(acc, node);
        for (let nb of [node[0].left, node[0].right]) {
            if (nb) {
                queue.push([nb,node[1], node[2] + 1]);
            }
        }
        return BFS(head, queue, accPrime, f);
    }
}

export const serialize = (head: TreeNode | null): string => {
    if (!head) {
        return JSON.stringify(null)
    }
    else {
        const left = serialize(head.left)
        const right = serialize(head.right)
        return JSON.stringify([head.val, [left,right].some(x=>x)? [left, right] : null])
    }
}

export function levelOrder(root: TreeNode | null): number[][] {
    if (!root) {
        return []
    } 
    const queue: [TreeNode,TreeNode | null, number][] = [[root,null,0]] 
    const res = BFS(0, queue,{},(acc, elem) => {
        å
    })
    return res
};

export function flatOrder(root: TreeNode | null): number[][] {
    if (!root) {
        return []
    } 
    const queue: [TreeNode, number][] = [[root,0]] 
    const res = BFS(0, queue,[],(acc, elem) => {
        åacc.push(elem[0].val)
        return acc;
    })
    return res
};

console.log(serialize(exampleTree));
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
    new TreeNode(20, new TreeNode(15), new TreeNode(7))
);


export const BFS = <V>(queue: [TreeNode, number][], acc: V, f: (acc: V, elem: [TreeNode, number]) => V): V => {
    const node = queue.shift() 
    if (!node) {
        return acc
    } else  {
        let accPrime = f(acc, node)
        for (let nb of [node[0].left, node[0].right]) {
            if (nb) {
                queue.push([nb,node[1] + 1])
            }
        }
        return BFS(queue, accPrime, f)
    }
}

export function levelOrder(root: TreeNode | null): number[][] {
    if (!root) {
        return []
    } 
    const queue: [TreeNode, number][] = [[root,0]] 
    const res = BFS(queue,[],(acc, elem) => {
        if (Array.isArray(acc[elem[1]])) {
            acc[elem[1]].push(elem[0].val);
        } else {
            acc[elem[1]] = [elem[0].val];
        }
        return acc;
    })
    return res
};

console.log(levelOrder(exampleTree));
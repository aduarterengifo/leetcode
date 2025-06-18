import { exampleTree, levelOrder } from "./102";
import { TreeNode } from "./tree_node";

export function lofSerialize(root: TreeNode | null): any[] | null {
    if (!root) {
        return null
    }
    else {
        const left = lofSerialize(root.left)
        const right = lofSerialize(root.right)
        return [root.val, [left,right].some(x=>x)? [left, right] : null]
    }
};

export const serialize = (root: TreeNode | null) => String(lofSerialize(root))


export function deserialize(data: string): TreeNode | null {
    const arr: (number|null)[] = JSON.parse(data);
    return arr === null
        ? null
        : new TreeNode(
            arr[0],
            arr[1] ? deserialize(JSON.stringify(arr[1][0])) : null,
            arr[1] ? deserialize(JSON.stringify(arr[1][1])) : null
        );
};
console.log(serialize(exampleTree))
// console.log(deserialize(serialize(exampleTree)))
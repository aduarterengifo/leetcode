import type { TreeNode } from "./tree_node";

export const isSameTree = (p: TreeNode | null, q: TreeNode | null): boolean =>
    !p && !q || (p?.val === q?.val && isSameTree(p?.left ?? null, q?.left ?? null) && isSameTree(p?.right ?? null, q?.right ??  null));
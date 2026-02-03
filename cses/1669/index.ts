const buildAdj = (edges: [number, number][]) => {
    const adj: Map<number, number[]> = new Map();
    for (const [a, b] of edges) {
        if (!adj.get(a)) adj.set(a, []);
        adj.get(a)!.push(b);
        // b/c undirected
        if (!adj.get(b)) adj.set(b, []);
        adj.get(b)!.push(a);
    }
    return adj;
}

const dfs = <T>(
    adj: Map<number, number[]>,
    start: number,
    parent: number | undefined,
    explored: Set<number>,
    acc: T,
    f: (acc: T, node: number) => T
) => {
    explored.add(start);
    const accPrime = f(acc, start);
    const neighbors = adj.get(start) || [];
    console.log('start', start)
    console.log('')
    console.log('bors', neighbors)
    for (const nb of neighbors) {
        if (nb === parent) {
            continue;
        }
        if (!explored.has(nb)) {
            return dfs(adj, nb, start, explored, accPrime, f)
        } else {
            // cycle found you are done! I n
            return acc
        }
    }
    return acc
}

const solve = (edges: [number, number][]) => {
    const adj = buildAdj(edges)
    console.log('init adj', adj)
    const explored: Set<number> = new Set()
    const init: number[] = []
    const f = (acc: number[], node: number) => {
        return acc
    }
    const res = dfs(adj, edges[0][0],undefined, explored, init, f)

    return res
}


// solve()
// if (require.main === module) {
//     let input = '';
//     process.stdin.on('data', chunk => input += chunk);
//     process.stdin.on('end', () => {
//         const lines = input.trim().split('\n');
//         const n = Number(lines[0]);
//         const arr = lines[1].trim().split(' ').map(Number);
//         console.log(solve(n, arr));
//     });
// }

console.log(solve([[5,6], [1,3], [1,2],[5,3],[1,5],[2,4],[4,5]]))
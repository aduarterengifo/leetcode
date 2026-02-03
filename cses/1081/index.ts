const solve = (n: number, arr: number[]) => {
    let max = arr[0];
    for (const num of arr) {
        if (num > max) max = num;
    }
    const freq = new Uint32Array(max + 1).fill(0);

    // count frequency.
    for (const n of arr) {
        freq[n]++;
    }

    for (let d = max; d >= 1;d--) {
        let count = 0;
        for (let mult = d; mult <= max; mult += d) {
            count += freq[mult]
            if (count > 1) break;
        }
        if (count > 1) return d;
    }
    return 1;

}

if (require.main === module) {
    let input = '';
    process.stdin.on('data', chunk => input += chunk);
    process.stdin.on('end', () => {
        const lines = input.trim().split('\n');
        const n = Number(lines[0]);
        const arr = lines[1].trim().split(' ').map(Number);
        console.log(solve(n, arr));
    });
}
const solve = (arr) => {
    var _a;
    const hashmap = new Map();
    for (const n of arr) {
        for (const div of getdivs(n)) {
            hashmap.set(div, ((_a = hashmap.get(div)) !== null && _a !== void 0 ? _a : 0) + 1);
        }
    }
    let maxDivisor = 1;
    for (const [divisor, count] of hashmap.entries()) {
        if (count > 1 && divisor > maxDivisor) {
            maxDivisor = divisor;
        }
    }
    return maxDivisor;
};
const getdivs = (n) => {
    const divisors = [];
    for (let i = 1; i * i <= n; i++) {
        if (n % i === 0) {
            divisors.push(i);
            if (i !== n / i) {
                divisors.push(n / i);
            }
        }
    }
    return divisors;
};
if (require.main === module) {
    let input = '';
    process.stdin.on('data', chunk => input += chunk);
    process.stdin.on('end', () => {
        const lines = input.trim().split('\n');
        const n = Number(lines[0]);
        const arr = lines[1].trim().split(' ').map(Number);
        console.log(solve(arr));
    });
}

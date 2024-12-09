export function exponent(base, power) {
    if (power < 0) {
        base = 1 / base;
        power = -power;
    }

    let answer = 1;
    for (let i = 0; i < power; i++) {
        answer *= base;
    }

    return answer;
}

export function exponent_fast(x, n) {
    const exp = (x, n) => {
        if (n == 0) return 1
        let half = exp(x, Math.floor(n / 2))
        if (n % 2 == 0) return half * half
        return half * half * x
    }

    if (n < 0) {
        x = 1 / x
        n = -n
    }
    return exp(x, n)
}
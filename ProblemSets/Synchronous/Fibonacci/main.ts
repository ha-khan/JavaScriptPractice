
function fibonacci(n: number): number {
    let cache: Map<number, number> = new Map();

    function helper(n: number): number {
        if (n == 0) {
            return 0;
        }

        if (n == 1) {
            return 1;
        }

        let left: number = 0;
        if (cache.has(n-1)) {
            left = cache.get(n-1);
        } else {
            left = helper(n - 1);
            cache.set(n-1, left); 
        }

        
        let right: number = 0;
        if (cache.has(n - 2)) {
            right = cache.get(n-2);
        } else {
            right = helper(n-2);
            cache.set(n-2, right);
        }

        return left + right;
    }

    return helper(n)
}

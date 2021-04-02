// Memoization - memo reminder
//  js Object, keys be arg to fn, value will be the return value

// fibonacci with memoization Complexity Time O(n) : Space O(n)

const fib = (n, memo = {}) => {
    // check in n in the memo like dictionary in python
    if (n in memo) return memo[n];
    // base case
    if (n <= 2) return 1;
    // this saves/caches a memo of a calculation; so you don't duplicate calculations
    memo[n] =  fib(n - 1, memo) + fib(n - 2, memo);
    return memo[n]
};

console.log(fib(5)); // 5
console.log(fib(6)); // 8
console.log(fib(7)); // 13
console.log(fib(8)); // 21
console.log(fib(50)); // 12586269025
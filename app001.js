// fibonacci Complexity Time O(2^n) : Space O(n)

const fib = (n) => {
    // base case
    if (n <= 2) return 1;

    // recursive call  
    // the two calls to the fib make it Time O(2^n)
    return fib(n - 1) + fib(n - 2);
};

console.log(fib(5));
console.log(fib(6));
console.log(fib(7));
console.log(fib(8));
console.log(fib(50));
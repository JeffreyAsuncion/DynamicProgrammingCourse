// canSum memoized  Complexity Time O(m*n) : Space O(m)
// m = target sum , n = array length
const canSum = (targetSum, numbers, memo={}) => {
    // memo fetching object
    if (targetSum in memo) return memo[targetSum];

    // you found it
    if (targetSum === 0) return true;
    // you've gone too far
    if (targetSum < 0) return false;

    // iterate thru possible combinations
    for (let num of numbers){
        const remainder = targetSum - num;
        if (canSum(remainder, numbers, memo) === true){
            // two returns 1/2
            memo[targetSum] = true;
            return true;
            
        }
    }

    // for loop tried all possible combinations
    // two returns 2/2
    memo[targetSum] = false;
    return false;
};


console.log(canSum(7, [2, 3])); // true
console.log(canSum(7, [5, 3, 4, 7])); // true
console.log(canSum(7, [2, 4])); // false
console.log(canSum(8, [2, 3, 5])); // true
console.log(canSum(300, [7, 14])); // false
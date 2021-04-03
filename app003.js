// canSum Complexity Time O(n^m) : Space O(m)

const canSum = (targetSum, numbers) => {
    // you found it
    if (targetSum === 0) return true;
    // you've gone too far
    if (targetSum < 0) return false;

    // iterate thru possible combinations
    for (let num of numbers){
        const remainder = targetSum - num;
        if (canSum(remainder, numbers) === true){
            return true;
        }
    }

    // for loop tried all possible combinations
    return false;
};


console.log(canSum(7, [2, 3])); // true
console.log(canSum(7, [5, 3, 4, 7])); // true
console.log(canSum(7, [2, 4])); // false
console.log(canSum(8, [2, 3, 5])); // true
console.log(canSum(300, [7, 14])); // false
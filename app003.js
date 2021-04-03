// canSum Complexity Time O(n^m) : Space O(m)
/*
    Write a function `canSum(targetSum, numbers)` that takes in a 
    targetSum and an array of numbers as arguments.
    
    The function should return a boolean indicating whether of not it
    is possible to generate the targetSum using numbers from the array.

    You man use an element of the array as many times as needed.

    You may assume that all input numbers are nonnegative.
*/




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
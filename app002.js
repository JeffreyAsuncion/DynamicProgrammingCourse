// gridTraveler Time O(2^(n+m)) : Space O(n+m)

/*
Say that you are a traveler on a 2D grid. You begin the 
top-left corner and your goal is to travel to the bottem-right
corner. you may only move down or right.

In how many ways can you travel to the goal on a grid with
dimension m * n?

Write a funciton `gridTraveler(m,n)` that calculates this.
*/

const gridTraveler = (m, n) => {
    // base case of traveling in a 1,1 === 1
    if (m == 1 && n == 1) return 1;
    // base case of a grid with one dim == 0 === 0
    if (m == 0 || n == 0) return 0;
    // this is the going down + going right
    return gridTraveler(m - 1, n) + gridTraveler(m, n - 1);
};

console.log(gridTraveler(1, 1)); // 1
console.log(gridTraveler(2, 3)); // 3
console.log(gridTraveler(3, 2)); // 3
console.log(gridTraveler(3, 3)); // 6
console.log(gridTraveler(18, 18)); // 2333606220
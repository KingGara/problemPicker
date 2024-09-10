/*
    Jump Game - II

You are given a 0-indexed array of integers nums length n. You are initally
positioned at nums[0].

Each element nums[i] represents the maximum length of a forward jump from index
i. In other words, if you are at nums[i], you can jump to any nums[i+j] where.

Return the minimum number of jumps to reach nums[n-1].

    Example 1:
        Input: nums = [2,3,1,1,4]
        Output: 2
        Explanantion: The minimum number of jumps to reach the last index is 2.
        Jump 1 step from index 0 to 1, then 3 steps to the last index.

    Example 2:
        Input: nums = [2,3,0,1,4]
        Output: 2
*/
/*
    Problem was very difficult for me had to look at a submission to understand
    how to approach.

    Time Complexity: O(n^2) two loops used
    Space Complexity: O(n) used the splice method
*/
const jump = (nums) => {
    let minJumpsToEnd = 0;
    let currIndexOfMainArr = 0;
    let nextIndexForMainArr;
// loop condition is met when length of array is 0 OR when index == length
    while(currIndexOfMainArr !== nums.length - 1) {
// Check if jumping from current index reaches or exceeds length
// Account for final jump
        if(currIndexOfMainArr + nums[currIndexOfMainArr] >= nums.length) {return minJumpsToEnd++};

// slice new array available jump options
        const arrSlice = nums.slice(currIndexOfMainArr + 1, currIndexOfMainArr + nums[currIndexOfMainArr] + 1);
                                        console.log(`Sliced: ${arrSlice}`);
// Checks which option takes you the furthest away
        let maxJump = 0;
        for(let i = 0; i < arrSlice.length; i++) {
            let jumpOption = i + arrSlice[i];
                                        console.log(`jumpOption: ${jumpOption}`);
                                        console.log('--------------');
                                        console.log('');
            if(jumpOption > maxJump) {
                maxJump = jumpOption;
                // Calculate nexIndex
                nextIndexForMainArr = currIndexOfMainArr + i + 1;
                                        console.log(`maxJump: ${maxJump}`);
                                        console.log(`nextIndex: ${nextIndexForMainArr}`);
            }
        }
// Set new index for next iteration
        currIndexOfMainArr = nextIndexForMainArr;
        minJumpsToEnd++;
    }
    return minJumpsToEnd;
};
//-----------------------------------------------------------------------------

const jumpp = (nums) => {
    let near = 0;
    let far = 0;
    let jumps = 0;

    while(far < nums.length - 1) {
        let farthest = 0;
        for(let i = near; i <= far; i++) {
            farthest = Math.max(farthest, i + nums[i]);
        }
        near = far + 1
        far = farthest;
        jumps++
    }
    return jumps;
};

/*-----------------------------------------------------------------------------
    Neetcode solution

    Time Complexity: O(n);
    Space Complexity: O(1);

This approach uses a form of the greedy algorithm to always keep track of the
farthest possible position we can jump to given the current range. We get the
range of nums to consider by taking the largest current jump value available to
us and setting our rangeEnd to that value and our rangeStart to the current i
+ 1. Note that every single time we adjust the ranges this counts as a jump as
we are jumping to the next range to consider. 
*/

const jumppp = (nums) => {
    let rangeStart = 0;
    let rangeEnd = 0;
    let farthestJump = 0;
    let minJumpsToEnd = 0;

    while(rangeEnd != nums.length - 1) {
        for(let i = rangeStart; i <= rangeEnd; i++) {
            farthestJump = Math.max(farthestJump, i + nums[i])
        }
        rangeStart = rangeEnd + 1;
        rangeEnd = farthestJump;
        minJumpsToEnd++;
    }
    return minJumpsToEnd;
};



let nums = [2,3,1,1,4]
console.log(jumppp(nums));

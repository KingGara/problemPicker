/*
        Jump Game-

You are given an integer array nums. You are initially positioned at the first
index and each element in the array represents your maximum jump length at that
position.

Return true if you reach the last index, or false otherwise.

    Example 1: 
        Input: nums = [2,3,1,1,4]
        Output: true
        Explanation: Jump 1 step from index 0 to 1, then 3 steps to the last i.

    
    Example 2:
        Input: nums = [3,2,1,0,4]
        Output: true
        Explanation: Impossibe

jumpsLeft = 2
//-----------------------------------------------------------------------------
Brute force first attempt. I got the majority of the problem save for a few
edge cases I didn't account for that I ultimately fixed with some logic tweaks.
Pleased with my answer and my understanding of the problem.
//-----------------------------------------------------------------------------

    Time Complexity: O(n)

    Space Complexity: O(1)
                
        i
nums = [2,3,1,1,4] // Number of jumps
        g 
        0 1 2 3 4 // Target Index
*/
const canJump = (nums) => {
    let jumpLength = 0 // Set current jump value
    let len = nums.length; // Abbreviate length

// loop iterating through nums starting at index[0]
    for(let i = 0; i < len; i++) {

// Check if we can reach the current index, if not => false
        if(jumpLength < i) return false

// We then check to which gets us farther, the current jumpLength or
// The index we can reach with the jumpValue located at nums[i];
        jumpLength = Math.max(jumpLength, i + nums[i])

// Finally we check new assigined jumplength can get us to the end
        if(jumpLength >= nums.length - 1) return true 
    }
}

//-----------------------------------------------------------------------------
// Staring from first element iterating forward
// Stops if at anypoint we come across a jumpLength that >= jumpLength, if this
// is true this means that current jumpLength is enough to make it to end of nums
// so return true
//
// If at anypoint the current index exceeds the value of jumpLength, that means
// we cannot reach the current index given the maximum available jumpLength and
// the function is false.

/*
    nums = [2,3,1,1,4]

*/
const cannJump = (nums) => {
    let jumpLength = 0;
    let len = nums.length;

    for(let i = 0; i < len; i++) {
        if(jumpLength < i) return false

        jumpLength = Math.max(jumpLength, i + nums[i]);
        if(jumpLength >= len - 1) return true;
    }
}


//-----------------------------------------------------------------------------

// Similiar concept, differnce is we are starting from the second to last element
// and have a 'goal' set as the last last element. The idea of this method is
// to check to see if 'goal' is reachable fromt the current index we are on.
// if so.. the goal is the set to the index and the index is decremented, this
// process continues until i reaches the end.. we then return a boolean checking
// if 'goal' has reached 0.
// Main difference is this version hits every element in the array no matter
// the size.
const canJumpp = (nums) => {
    let targIdx = nums.length - 1;
    for(let i = nums.length - 2; i >= 0; i--) {
        if(i + nums[i] >= targIdx) targIdx = i;
    }
    return targIdx === 0;
};

/*                i 
    nums = [2,3,1,1,4] 
            0 1 2 3 4 
                    t       
*/

//-----------------------------------------------------------------------------
let nums = [3,2,1,0,4]

console.log(canJump(nums));







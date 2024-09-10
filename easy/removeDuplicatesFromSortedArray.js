/*
    Remove Duplicates From Sorted Array

Given an integer array nums sorted in non-decreasing order, remove the duplicates
in-place such that each unique element appears only once. The relative order of
the elements should be kept the same. Then return the number of unique elements
in nums.

Consider the number of unique elements of nums to be k, to get accepted, you 
need to do the following things:

    * Change the array nums such that the first k elements of nums contain the 
     unique elements in the order they were present in nums initally. The 
     remaining elements of nums are not important as well as the size of nums.

     * Return k
     


     Example 1:
        Input: nums = [1, 1, 2]
        Output: 2, nums = [1,2,_]
        Explanation: Your function should return k = 2, with the first two 
        elements of hums being 1 and 2 respectively. It does not matter what
        you leave beyond the returned k.


    Example 2:
        Input: nums = [0,0,1,1,1,2,2,3,3,4]
        Output: 5, nums = [0,1,2,3,4,_,_,_,_,_]
        Explanation: Your function should return k = 5, with the first five 
        elements of nums being 0,1,2,3,4. Does not matter what is left beyond 
        the returned k.
*/



// Standard for loop (first attempt)

// Time Complexity -> O(n): n being the number of elements in the input array

// Space Complexity -> O(n): Where n is the length of the input array nums.
const removeDuplicates = (nums) => {
    let k = 0; // Initalize variable to keep track of unique elements 
    let dups = []; // Initalize array to store elements

    for(let i = 0; i < nums.length; i++) { // For loop to iteratie
        if(!dups.includes(nums[i])) { // check if nums[i] is unique
            dups.push(nums[i]); // push nums[i] into dups
            k++; // Increment k to keep track of number of unique elements
        } else {
            nums.splice(i, 1); // Remove current ele if its not unique
            i--; // Decrement to make up for removed i (will reincrement in loop)
        }
    }
    return k++;
}



// Two Pointer Method w/ for loop

// Time Complexity -> O(n): n is the number of elements in the input vector nums.

// Space Complexity -> O(1): Modifies the input array in place without using any
// additional data structures that depend on the size of the input

/*
           i
        [0,1,1,1,1,2,2,3,3,4]
           k
*/


const removeDups = (nums) => { 
    let k = 1; // Initalize the count of unique elements to 1

    for(let i = 1; i < nums.length; i++) { // Iteration 
        if(nums[i] !== nums[k - 1]) { // Check if current i is unique
            nums[k] = nums[i] // if it is then move it to the last known location
            // of dup which should be k
            k++; // Increment k to account for new unique number
        }
    }
    return k;
}


// Inside the loop, we compare the current element nums[i] with the previous 
// unique element nums[k - 1]. If they are not equal, it means we have encountered
// a new unique element. In this case we update the nums[k] position with the 
// current element to keep it in place. We then increment k to indicate that we 
// have found one more unique element
//
// After the loop completes, k contains the count of unique elements, and the
// first k elements of the nums vector contain the unique elements in the same
// order they appeared in the input.





















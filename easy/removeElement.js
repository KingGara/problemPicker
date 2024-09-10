/* 
    Remove Element--

Given an integer array nums and an integer val, remove all occurrences of val 
in nums in-place. The order of the elements may be changed. Then return the
number of elements in nums which are not equal to val. 

Consider the array nums such that the first k elements of nums contain the 
elements which are not equal to val. The remaining elements of nums are not
important as well as the size of nums. 

- Change the array nums such that the first k elements of nums contain the
elements which are not equal to val. The remaining elements of nums are not
important as well as the size of nums.

- return k



Example 1:
    
    Input: nums = [3,2,2,3], val = 3
    Output: 2, nums = [2,2,_,_]
    
    Explanation: Function should return k = 2,
    with the first two elements of nums being 2.
    Does not matter what is left beyond the 
    returned K



Example 2:

    Input: nums = [0,1,2,2,3,0,4,2] val = 2
    Output: 5, nums = [0,1,4,0,3,_,_]

    Explanation: Function should retun k = 5,
    with the first five elements of nums containing
    0,0,1,3,4. Can be returned in any order, does not 
    matter what is left beyond the returned k


                i        
    2   2   2   3
            k                  

*/

// Two Pointer Method 
const removeElement = (nums, val) => {
    let k = 0 // Set variable to count vals that match
    for(let i = 0; i < nums.length; i++) { // Loop for iterating through nums
        if(nums[i] !== val) { // Check if the current number is not equal to val
            nums[k] = nums[i]; // 
            k++
        }
    }
    return k
}

// Time Complexity: O(n)
//
// Space Complexity: O(1)



// While Loop Method 
const removeeElement = (nums, val) => {

    let i = 0; // Set inital i variable 
    while(i < nums.length) { // While loop stop when i = nums.length
        if(nums[i] === val) { 
            nums.splice(i, 1); // If i = val remove the value at i
            // we do not need to -i because we are effectively doing so 
            // when we splice an index of
        } else {
            i++; // if nums[i] does not = val then iterate
        }
    }

    return nums.length
}

// Time Complexity: O(n)
//
// Space Complexity: O(1)

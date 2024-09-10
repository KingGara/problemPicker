/* 
    Remove Duplicates from Sorted Array II --

Given an integer array nums sorted in non-decreasing order, remove some duplicates
in-place such that each unique element appears at most twice. The relative order 
of the elements should be kept the same.

Since it is impossible to change the length of the array in some languages, you
must instead have the result be placed in the first part of the array nums.
More formally, if there are k elements after removing the duplicates, then the 
first k elements of nums should hold the final result. It does not matter what 
you leave beyond the first k elements. 

Return k after placing the final result in the first k slots of nums.

    Example 1:
        Input: nums [1,1,1,2,2,3]
        Output: 5, nums = [1,1,2,2,3,_]
        Explanation: Your function should return k = 5, with the first five
        elements of nums being 1,1,2,2 and 3. Does not matter what is left beyond
        the first k elements.

    Example 2:
        Input: nums [0,0,1,1,1,1,2,3,3]
        Output: 5, nums = [0,0,1,1,2,3,3,_,_ ]
        Explanation: Your function should return k = 7, with the first k elements 
        being the unqiue elements, does not matter what is left beyond the first 
        k elements. 



1.) Initalize variable k (number of unique elements), dupsArray (to store first
    encoutner of elements) & duppsArray (to store second encounter of elements)

2.) Setup iteration method to check each num in nums array, we want to run some
    if statements

3.) first if will check if current num is in dups array, if not it will add it
    and continue the loop.
    k++
    
    second if runs only if num[i] is included in dupsArray, it checks if nums[i]
    is also in duppsArrayll. If it is not then it is added and the loop continues
    k++

    else, if it is then nums[i] has already appeared at most twice and this current
    num[i] should be spliced.
    i--
*/

// Time Complexity: O(n)
//
// Space Complexity: O()



const removeDuplicates = (nums) => {
    let k = 0;
    let first = [];
    let second = [];

    for(let i = 0; i < nums.length; i++) {
        if(!first.includes(nums[i])) {
            first.push(nums[i]);
            k++
        } else if(!second.includes(nums[i])) {
            second.push(nums[i]);
            k++
        } else {
            nums.splice(i, 1);
            i--;
        }
    }
    return k
}

// Time Complexity: O(n)
//
// Space Complexity: O(1)
// ---------------------------------------------------------------------------
const removeDups = (nums) => {
    let index = 0;
    for(let i = 0; i < nums.length; i++) {
        if(nums[i] !== nums[i+2]) {
             nums[index++] = nums[i] // Increment after assignment
        }
    };
    return index;
}

/*
    This algorithm modifed the input array in place, meaning it doesn't use 
    additional space proportional to the input size. Instead, it rearranges 
    the elements within the original array. 

    

    Two-Pointer Technique --

Even though the code uses a single loop and a single index(slow) variable, it
can be considered a variant of the two-pointer technique.

    * i is the fast pointer that scans through each element of the array

    * Index is the slow pointer that keeps track if the position where the next
     unqiue element should be placed.


    Core Logic--

The Core logic is based on the condition if(nums[i] !== nums[1+2]) this 
condition ensures that only elements that do not have the same value as the
element two positions ahead are retained

If nums[1] is not equal to nums[1+2] it means nums[i] is unqiue within the 
considered range, and it should be kept in the result.
*/



// ---------------------------------------------------------------------------
// Time Complexity: O(n)
//
// Space Complexity: O(1)

const removeeDups = (nums) => {
    if(nums.length <= 2) {
        return nums.length;
    }

    let slow = 2; // First two elements are always considered part of the result
    // This is because we are allowed to have up to two instances of each number.
    // The first two can either be two unique numbers or two different numbers
    // both would be valid

    for(let fast = 2; fast < nums.length; fast++) {
// Fast is the pointer that scans through each element of the array starting from
// the third element. (we already know that the first two elements are valid)

        if(nums[fast] !== nums[slow-2]) {
            nums[slow] = nums[fast];
            slow++;
// We first check if current element (fast) is not the same as the element two
// positions behind the slow pointer
// If this condition is true, it means the current element is not a duplicate
// beyond the allowed two instances, so it is copied to the position pointed to
// by slow, and then slow is incremeneted.

// The current element is then copied to the position pointed to by 'slow'.
// This action essentially moves the non-duplicate element to the correct position
// in the array. 
        }
    }
    return slow;
};





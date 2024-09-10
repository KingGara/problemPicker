/*
    Rotate Array - Medium 

Given an integer array nums, rotate the array to the right by k steps, where 
k is non-negative.

    Example 1: 
        Input: nums = [1,2,3,4,5,6,7] k = 3
        Output: [5,6,7,1,2,3,4]
        [1,2,3,4,5,6,7] 
        [7,6,5,4,3,2,1] - reverse array
        [5,6,7,4,3,2,1] - reverse first k elements
        [5,6,7,1,2,3,4] - reverse all elements after k
        Explanation:
        rotate 1 steps to the right:
        [7,1,2,3,4,5,6]

        rotate 2 steps to the right:
        [6,7,1,2,3,4,5]

        rotate 3 steps to the right:
        [5,6,7,1,2,3,4]

        
    Example 2: 
        Input: nums = [-1, -100, 3, 99] k = 2
        Output: [3, 99, -1, -100]
        Explanation:
        rotate 1 steps to the right:
        [99, -1, -100, 3]

        rotate 2 steps to the right:
        [3, 99, -1, -100]


        Non-in place Rotation Function--

        Time Complexity: O(n)

        Space Complexity: O(n)

*/

const rotate = (nums, k) => {
    k = k % nums.length;
    
    nums.reverse();
    let first = nums.splice(0, k);
    first.reverse();

    nums.unshift(...first);
    let second = nums.splice(k);
    second.reverse();

    nums.push(...second);

    return nums;
}
/* ----------------------------------------------------------------------------
    In-Place Rotation Function (Optimal Solution)

    Time Complexity: O(n) - While loops complexity depends on size of n

    Space Complexity: O(1) - Constant amount of extra space, regardless of the 
    size of the input array. It operates directly on the input array without 
    creating additional arrays or using extra memory proportional to n.

k = 3
           se  
    [1,2,3,4,5,6,7]
    [7,6,5,4,3,2,1]
     s   e
    [7,6,5,4,3,2,1]
    [5,6,7,4,3,2,1]

             s e
    [5,6,7,4,3,2,1]
    [5,6,7,1,2,3,4]

*/

const rotation = (nums, k) => {
    const n = nums.length;
    k = k % n // Sets range

    const reverse = (start, end) => {
        while(start < end) {
            [nums[start], nums[end] = nums[end], nums[start]];
            start++;
            end--;
        }
    };

    reverse(0, n - 1); // Reverse whole array
    reverse(0, k - 1); // Reverse first k elements
    reverse(k, n - 1); // Reverse rest of elements after k
    
};
/* ----------------------------------------------------------------------------
    In-Place Rotation Function 

    Time Complexity: O(n) due to linear time operations 'splice' & 'unshift'.

    Space Complexity: O(n) Due to the space required to hold the intermediate
    array created by 'splice'.

Important to note that 
*/

const roatate = (nums, k) => {
    let range = k % nums.length;

    nums.unshift(...nums.splice(-range));
}

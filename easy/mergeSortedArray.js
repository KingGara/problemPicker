/*
    Merge Sorted Array --

You are given two integer arrays nums1 and nums2, sorted in non-decreasing
order, and two integers m and n, representing the number of elements in nums1 
and nums2 respectively.

Merge nums1 and nums2 into a single array sorted in non-decreasing order.

The final sorted array should not be returned by the function, instead be 
stored inside the array nums1. To accommodate this, nums1 has a length of m + n
where the first m elements denote the elements that should be merged, and the 
last n elements are set to 0 and should be ignored.

*/
// Solution using a for loop and leveraging indices

const merge = (nums1, m, nums2, n) => {
    for(let i = m, j = 0; j < n; i++, j++) {
        nums1[i] = nums2[j];
    }
    nums1.sort((a, b) => a - b)
}


// Solution using pointers and a while loop to compare values from both arrays
// in the same index to add to the end of nums1 (the array to merge into)
/*

              i k 
        nums1: [1,2,4,6,7,9]

                j
        nums2: [1,2,9]
 
*/

const merge2 = (nums1, m, nums2, n) => {

    let i = m - 1; // Last element in nums1
    let j = n - 1; // Last element in nums2
    let k = m + n -1; // Last element

    while(j >= 0) {
        if(i >= 0 && nums1[i] > nums2[j]) {
            nums1[k] = nums1[i]
            i--;
        } else {
           nums1[k] = nums2[j]
            j--;
        }
        k--;
    }
}


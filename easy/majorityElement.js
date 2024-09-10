/*
    Given an array nums of size n, return the majority element

    The majority element is the element that appears more than n/2 times. You
    may assume that the majority element always exists in the array.

Example 1 -
    Input: nums = [3,2,3]
    OutPut: 3

Example 2 -            
    Input: nums = [2,2,1,1,1,2,2]
    Output: 2

Can this be solved in linear time and constant space?

Time Complexity: O(n)

Space Complexity: O(1)
-------------------------------------------------------------------------------
    Boyer-Moore Voting Algorithm --

This algorithm maintains a candidate for the majority element (maj) and a count
to validate that candidate.

If count reaches 0, it means that the current candidate has been invalidated 
by an equal number of different elements, and it sets a new candidate

The count can indeed go negative. This happens when the current candidate (maj)
is not equal to the current element (n) indicating that there have been more
elements different from the candidate up to that point. 
*/  

const majorityElement = (nums) => {
    let count = 0;
    let maj = 0;

    for(let n of nums) {
        if(count === 0) {
            maj = n;
        }

        if(maj === n) {
            count++;
        } 

        count--;
    }
    return maj
}

/*-----------------------------------------------------------------------------
    
    Sorted Array middle index--
            
The idea that in a sorted array, the majority element will always occupy the 
middle position (or near it) is based on the mathmaatical porpoerties of the
majority element and the structure of a sorted array...

Majority Element is the element that appears more than n/2 times, meaning
it has more occurances than any other element in the array.

    1.) Majority Element's Frquency: By definition, the majority element appears
    more than n / 2 times. This means if you divide the array into two halves,
    the majority element must occupy at least one position in both halves.

    2.) Sorted Array Strucutre: When the array is sorted, all occurrences of 
    each element are grouped togther. Because the majority element appears more
    than half the time, its block of occurrences must cross the midpoint of the 
    array.

    It is important to understand that this observation is not a law but a
    logical consequence of the properties of the majoirty element and sorted
    arrays. It provides an efficent way to determine the majority element using
    sorting


*/

const majElement = (nums) => {
    nums.sort((a, b) => a - b)

    return nums[Math.floor(n/2)];
}


/*
    When the array has only unique elements regardless of the length there will
    never be a majority element because no element can appear more than n/2 times.
    If no element meets the majority citerion, the middle element found in the 
    sorted array won't be a majority by definition. This is because the approach
    assumes the existence of a majority element, which must be validated in such
    a case.

*/ 

const majElementCheck = (nums) => {
    nums.sort((a, b) => a - b)
    let can = nums[Math.floor(nums.length / 2)];

    let count = 0;

    for(n of nums) {
        if(n === can) {
            count++
        }

        if(count > Math.floor(nums.length / 2)) {
            return can
        } else {
            return null;
        }
    }
}

/*
 
Example 1:

Input: citations = [3,0,6,1,5]

Output: 3
Explanation: [3,0,6,1,5] means the researcher has 5 papers in total and each 
of them had received 3, 0, 6, 1, 5 citations respectively.
                      j        
Since the researcher has 3 papers with at least 3 citations each and the 
remaining two with no more than 3 citations each, their h-index is 3.


...An authors h-index can only be as great as their number of publications.
    ie. an author with only one publication can have a maximum h-index of 1.
    On the other hand, an author with many publications, each with only 1
    citaton, would also have an h-index of 1...

Formally, if f is the function that corresponds to the number of citations
for each publicaton, we compute the h-index as follows: First we order the 
values of f from the largest to the lowest value. Then, we look for the last
position in which f is greater than or equal to the position (we call this h).

If we have a reasearcher with 5 publications A, B, C, D and E with 10, 8, 5, 3
citations, respectively, the h-index is equal to 4 because the 4th publicaton
has 4 citations and the 5th has only 3. In contrast, if the same publications
have 25, 8, 5, 3 and 3 citations, then the h-index is 3 (3rd position/Index)
because the fourth paper has only 3 citations.

    f(A) = 10, f(B)= 8, f(C)= 5, f(D)= 4, f(E)= 3 --> h-index = 4
    f(A) = 25, f(B)= 8, f(C)= 5, f(D)= 3, f(E)= 3 --> h-index = 3

If we have the function f order in decreasing order from the largest value to 
the lowest one, we can compare the h-index as follows:

    h-index(f) = max max(f(i), i)
                    i
The Hirsch index is analogous to the Eddington number, an earlier metric used 
for evaluating cyclists. h-index is also realted to Sugeno integral and Ky Fan
metric. The h-index serves as an alternative to more traditonal journal impact
factor metrics in the evaluation of the impact of the work of a particular
researcher. Because only the most highly cited articels contribute to the
h-index, its determination is a simpler process. Hirsch has demonstrated that h
has high predictive value for whether a scientist has won honors like National
Academy membership or the Nobel Prize. The h-index grows as citations
accumulate and thus it depends on the "academic age" of a researcher.
*/

//let array = [6, 5, 3, 1, 0];
//             i  x  x  x  x
//             j  x  x  x  x
//             0  1  2  3  4
//  i = 3
//  count = 0


const hIndex = (array) => {
    // Sort the array from greatest to least
    array.sort((a, b) => b - a);
    // Set i 
    let i = 0;
    // Relationship between greatest to least and index?
    while(array[i] > i) i++;
    // Return the index that causes the while loop to fail. 
    return i;
}


// h-index(f) = max min(f(i), i)
//               i


















//const hIndex = (array) => {
//  let curr = array[0];
//
//  for (let i = 0; i < array.length; i++) {
//    let count = 0;
//
//    for (let j = 0; j < array.length; j++) {
//
//      if (array[j] >= array[i]) {
//        count++;
//      }
//
//    }
//
//    if (count >= array[i] && array[i] > curr) {
//      curr = array[i];
//    }
//
//  }
//  return curr;
//};
//
//console.log(hIndex(array));

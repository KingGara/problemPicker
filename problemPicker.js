/*
    This is a leet code problem selector. As I continue to I'll update the 
    object. The idea is to randomly select a 'n' problems a day to complete 
    in preperation for a remote software engineering position.
*/

const problems = {
    mergeSortedArray: "Merge Sorted Array - Easy",
    removeElement: "Remove Element - Easy",
    removeDuplicatesFromSortedArray: "Remove Duplicates From Sorted Array - Easy",
    removeDuplicatesFromSortedArrayII: "Remove Duplicated From Sorted Array II - Medium",
    majorityElement: "Majority Element - Easy",
    rotateArray: "Rotate Array - Medium",
    bestTimeToBuyAndSellStock: "Best Time to Buy & Sell Stock - Easy",
    bestTimeToButAndSellStockII: "Best Time to But & Sell Stock - Medium",
    jumpGame: "Jump Game - Medium",
    jumpGameII: "Jump Game II - Medium",
    hIndex: "h-Index - Medium",
    insertDeleteGetRandom: "Insert Delete Get Random - Medium"
};

const problemsObjectKeys = Object.keys(problems); // ALl keys within my object

let randomIndex = Math.floor(Math.random() * problemsObjectKeys.length);

let randomKey = problemsObjectKeys[randomIndex]; // Select a random key within range
let randomValue = problems[randomKey];

console.log(`${randomValue}`)

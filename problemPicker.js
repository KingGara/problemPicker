/*
    This is a leet code problem selector. As I continue solving I'll update the 
    object. The idea is to randomly select a 'n' problems a day to complete 
    in preperation for a remote software engineering position.
*/

const problems = {
    mergeSortedArray: "Merge Sorted Array - Easy",
    removeElement: "Remove Element - Easy",
    removeDuplicatesFromSortedArray: "Remove Duplicates From Sorted Array - Easy",
    removeDuplicatesFromSortedArrayII: "Remove Duplicated From Sorted ArrayII - Medium",
    majorityElement: "Majority Element - Easy",
    rotateArray: "Rotate Array - Medium",
    bestTimeToBuyAndSellStock: "Best Time to Buy & Sell Stock - Easy",
    bestTimeToButAndSellStockII: "Best Time to But & Sell Stock - Medium",
    jumpGame: "Jump Game - Medium",
    jumpGameII: "Jump GameII - Medium",
    hIndex: "h-Index - Medium",
    insertDeleteGetRandom: "Insert Delete Get Random - Medium"
};

const problemsObjectKeys = Object.keys(problems); // All keys put into an array

const problemPicker = () => {
    let randomIndex = Math.floor(Math.random() * problemsObjectKeys.length);
    let randomKey = problemsObjectKeys[randomIndex]; // Select a random key within range 
    let randomValue = problems[randomKey]; // Random value is selected

    return randomValue;
};



console.log(problemPicker(problems));

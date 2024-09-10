/*
    Best Time to Buy & Sell Stock

You are given an array prices where prices[i] is the price of a given stock on
the ith day.

You want to maximize your profit by choosing a single day to buy one stock and 
choosing a different day in the future to sell that stock.

Return the maximum profit you can achieve from this transaction. If you cannot
achieve any profit, return 0.

    Example 1:             i j
        Input: prices = [7,1,5,3,6,4]
        Output: 5
        Explanation: Buy on day 2 (price = 1) and sell on day 5 (price = 6)
        profit = 6-1 = 5
        Note that buying on day 2 and selling on day one is not allowed, must
        buy before you sell.

    
    Example 2:              i j
        Input: prices = [7,6,4,3,1]
        Output: O
        Explanation: In this case no transactions are done. Profit = 0
*/

// First try brute force solution (very bad & exceeded time limit)
// Passed Test Case...

// Time Complexity: O(n^2)
//
// Space Complexity: O(1)

const max = (prices) => {
    for(let i = 0; i < prices.length - 1; i++) {
        
        for(let j = i + 1; j < prices.length; j++) {
            let max = 0;

            if(prices[j] - prices[i] > max) {
                max = prices[j] - prices[i];
            }
        }
    }
    return max;
}
/*-----------------------------------------------------------------------------

    Single pass forloop Updates each time--

1.) Track Min Price:
As we iterate through the 'prices' array, we keep track of the minimum price
encoutered so far. This represents the best day to buy before the current day.

2.) Calculate Profit:
For each price, calculate the potential profit by subtracting the minimum price
from the current price. Update the maximum profit if this potential profit is
greater than the previously recorded maximum Profit. 


    Time Complexity: O(n)

    Space Complexity: O(1)

        [7,1,5,3,6,4]
*/

const maxProfit = (prices) => {
    let minPrice = Infinity // Set min to large # that will fullfill < condition
    let maxProfit = 0;

    for(const price of prices) {

            if(price < minPrice) {
            minPrice = price;
        }

            let profit = price - minPrice
            if(profit > maxProfit) {
            maxProfit = profit;
        }
    }

    return maxProfit;
};
/*-----------------------------------------------------------------------------

    Most Popular Solution--

    Time Complexity: O(n)

    Space Complexity: O(1)

Seems to be pretty much the same solution as above with a few slight mods.
We use a while loop instead of a for loop while the rest of the logic follows.
[7,1,5,3,6,4]
*/

const maxxProfit = (prices) => {
    let buy = 0;
    let sell = 1;
    let maxProfit = 0;

    while(sell < prices.length) {

        if(prices[buy] < prices[sell]) {
            profit = prices[sell] - prices[buy];

            if(profit > maxProfit) {
                maxProfit = profit;
            }

        } else {
            buy = sell
        }
        sell++;
    }
    return maxProfit;
};
/*-----------------------------------------------------------------------------

    Most Optimal Solution--

    Time Complexity: O(n) 

    Space Complexity: O(1)

        Summary of Understanding--
1.) Tracking minimum price: The code tracks the lowest price seen so far within
the for loop.

2.) Calculating Profits: For each price that is higher than min, the potential
profit is calculated.

3.) Finally code compares which of the two profit or maxProfit is higher.
[7,1,5,3,6,4]
*/


const maxxx = (prices) => {
    let min = Infinity;
    let maxProfit = 0;

    for(let i = 0; i < prices.length; i++) {
// We check to see if the current index is a new min value, if so we update min
// & continue with the loop
        if(prices[i] < min) {
            min = prices[i];
// If the current index is not a new min value then its understood that min
// is the curr min value our for loop has found and we need to see if its 
// profit calculation exceeds the current maxProfit.
        } else {
            let profit = prices[i] - min;
            maxProfit = Math.max(profit, maxProfit);
        }
    }
    return maxProfit;
};

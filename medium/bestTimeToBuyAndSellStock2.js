/*
    Best Time to Buy and Sell Stock II--

You are given an integer array prices where prices[i] is the price of a given
stock on the ith day.

One each day, you may decide to buy and/or sell the stock. You can only hold
at most one share of the stock at any time. However, you can buy it then 
immediately sell it on the same day,

Find and return the maximum profit you can achieve.

    Example 1: 
       Input: prices = [7,1,5,3,6,4]
       Output: 7
       Explanation: Buy on day 2 (price = 1) and sell on day 3 (price = 5)
       profit = 5 - 1 = 4. Then buy on day 4 (price = 3) and sell on day 5
       (price = 6), profit = 6 - 3 = 3.
       Total proft is 4 + 3 = 7

    Example 2:
        Input: prices = [1,2,3,4,5]
        Output: 4
        Explanation: Buy on day 1 (price = 1) and sell on day 5 (price = 5)
        profit = 5 - 1 = 4. 
        Total profit is 4.

    Example 3: 
        Input prices = [7,6,5,4,3,1]
        Output: 0
        Explanation: There is no way to make a positive profit, so we never
        buy the stock to achieve the max profit of 0.


Was not able to solve this problem initally. I thought in order to find out 
max profit we would have to compare every permeatation. Meaning we would have to check wether or not buying and holidng till a specific day would 
outweigh the potential profit missed out on the days skipped (hold only one)

I now know that we are using a form of the greedy algorithm, which makes
decisions based on the information available at the current moment without
considering the consequences of these decisions in the future.

[7,6,5,4,3,1]
           s
max = 
*/

// First introduction to greedy
// Time Complexity: O(n)
// Space Complexity: O(1) 
const maxProfit = (prices) => {
    let maxProfit = 0;
    let buy = prices[0];
    let len = prices.length;

    for(let sell = 1; sell < len; sell++) {
        if(buy < prices[sell]) {
            maxProfit += prices[sell] - buy;
        }
        buy = prices[sell];
    }
    return maxProfit;
}


// Most popular solution
// Time Complexity: O(n)
// Space Complexity: O(1)
const maxxProfit = (prices) => {
    let profit = 0;

    for(let i = 1; i < prices.length; i++) {
        if(prices[i] > prices[i - 1]) {
            profit += prices[i] - prices[i - 1];
        }
    }
    return profit
}

// Fastest Solution (has something to do with the lack of curly braces)
// I find this solution very weird as it has a for loop and two while loops
// with it. How could this be the fastest solution?
// Time Complexity: O(n)
// Space Complexity: O(1)
const maxxxProfit = (prices) => {
    let profit = 0
    let sell = 0;
    let buy = 0;

    for(let i = 0; i < prices.length - 1; i++) {

        while(i < prices.length - 1 && prices[i + 1] < prices[i]) 
            i++;
            buy = prices[i]

        while(i < prices.length - 1 && prices[i + 1] > prices[i])
            i++;
            sell = prices[i]

        profit += sell - buy
    }
    return profit
};











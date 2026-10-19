class Solution {
    /**
     * @param {number[]} prices
     * @return {number}
     */
    maxProfit(prices) {
        let minPrice = Infinity; // Track the lowest buying price
        let maxProfit = 0;       // Track the highest profit found

        for (let i = 0; i < prices.length; i++) {
            const currentPrice = prices[i];

            // If we find a lower price today, this is our new best day to buy
            if (currentPrice < minPrice) {
            minPrice = currentPrice;
            } 
            // Otherwise, check if selling today gives us a better profit than before
            else {
            const profit = currentPrice - minPrice;
            if (profit > maxProfit) {
                maxProfit = profit;
            }
            }
        }

        return maxProfit;
    }
}

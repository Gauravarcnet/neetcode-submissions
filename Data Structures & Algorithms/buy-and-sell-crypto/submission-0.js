class Solution {
    /**
     * @param {number[]} prices
     * @return {number}
     */
    maxProfit(prices) {
        let minPrice = Infinity;  // Initialize minPrice very high
        let maxProfit = 0;

        for (let price of prices) {
            if (price < minPrice) {
                minPrice = price;               // Found new minimum buying price
            } else if (price - minPrice > maxProfit) {
                maxProfit = price - minPrice;  // Calculate profit and update maxProfit
            }
        }

        return maxProfit;  // Maximum profit achievable
    }
}

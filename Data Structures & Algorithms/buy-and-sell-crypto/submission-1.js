class Solution {
    /**
     * @param {number[]} prices
     * @return {number}
     */
    maxProfit(prices) {
        let minPrice = Infinity;
        let maxProfit = 0;
        let buyDay = 0;
        let sellDay = 0;


        for (let i = 0; i < prices.length; i++){
            let currentPrice = prices[i]
            if ( currentPrice < minPrice){
                minPrice = currentPrice;
                buyDay = i;
            }else{
                let profit = currentPrice - minPrice
                if ( maxProfit < profit){
                    maxProfit = profit
                    sellDay = i

                }

            }
        }
        console.log(buyDay, sellDay)
        return maxProfit

    }
}

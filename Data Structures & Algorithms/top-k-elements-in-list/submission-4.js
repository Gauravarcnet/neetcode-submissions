class Solution {
    /**
     * @param {number[]} nums
     * @param {number} k
     * @return {number[]}
     */
    topKFrequent(nums, k) {
        
const freqMap = new Map();
    for (let num of nums) {
        freqMap.set(num, (freqMap.get(num) || 0) + 1);
    }

    // Step 2: Create buckets (index = frequency)
    // Max frequency can be nums.length
    const buckets = Array(nums.length + 1).fill().map(() => []);

    for (let [num, freq] of freqMap.entries()) {
        buckets[freq].push(num);

    }
    const result = []
    // console.log(buckets)
    for(let i = buckets.length-1; i > 0 && result.length < k; i--){
        for(let num of buckets[i]){
            result.push(num)
            if (result.length == k ) {
                return result
            }
        } 
    }

}

}

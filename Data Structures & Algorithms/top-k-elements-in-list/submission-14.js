class Solution {
    /**
     * @param {number[]} nums
     * @param {number} k
     * @return {number[]}
     */
    topKFrequent(nums, k) {
        let map = new Map();
        for(let i = 0; i < nums.length; i++){
            map.set(nums[i], (map.get(nums[i]) || 0)+1)
        }
        
    const sortedUniqueNums =        
        Array.from(map.keys()).sort((a, b) => {
        return map.get(b) - map.get(a);
        });

    return sortedUniqueNums.slice(0, k);  
    }
}

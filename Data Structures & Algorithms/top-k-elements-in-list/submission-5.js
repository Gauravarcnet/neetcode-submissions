class Solution {
    /**
     * @param {number[]} nums
     * @param {number} k
     * @return {number[]}
     */
    topKFrequent(nums, k) {
        let hashMap = {};
        for(let i = 0; i < nums.length; i++){
            hashMap[nums[i]] = ((hashMap[nums[i]] || 0) +1);
        }
        let sorted = Object.entries(hashMap)
        .sort((a,b) => b[1] - a[1])
        .slice(0, k)
        .map(item => Number(item[0])); // extract keys as numbers
        return sorted

    }
}

class Solution {
    /**
     * @param {number[]} nums
     * @param {number} k
     * @return {number[]}
     */
    topKFrequent(nums, k) {
        let map = new Map();

        for(let i = 0; i < nums.length; i++){
            map.set(nums[i], (map.get(nums[i]) || 0) + 1);
        }
        let entries = Array.from(map.entries());
        // console.log(entries)
        let newArr = entries
        .sort( (a,b) => b[1] - a[1] )
        .slice(0, k)
        .map((pair) => pair[0])


        return newArr
    }
}

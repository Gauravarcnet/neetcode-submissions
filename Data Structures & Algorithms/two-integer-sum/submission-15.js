class Solution {
    /**
     * @param {number[]} nums
     * @param {number} target
     * @return {number[]}
     */
    twoSum(nums, target) {
        
        let map1 = new Map();

        for(let i = 0; i < nums.length; i++){
            let subt = target - nums[i];

            if(map1.has(subt)){
                return [map1.get(subt), i]
            }else[
                map1.set(nums[i], i)
            ]
        }
        return -1
    }
}

class Solution {
    /**
     * @param {number[]} nums
     * @param {number} target
     * @return {number[]}
     */
    twoSum(nums, target) {
        
        let map = new Map();
        let diff;

        for(let i = 0; i < nums.length; i++){
            diff = target - nums[i];

            if(map.has(diff)){
                return [map.get(diff), i]
            }else{
                map.set(nums[i], i)
            }
        }
        return -1;
       
    }
}

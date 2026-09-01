class Solution {
    /**
     * @param {number[]} nums
     * @param {number} target
     * @return {number[]}
     */
    twoSum(nums, target) {
        let hashMap = {}
        for(let i = 0; i < nums.length;i++){
            let diff = target - nums[i];
            if(hashMap[diff] !== undefined){
                return [i, hashMap[diff]]
            }else{
                hashMap[nums[i]] = i
        }
    }
    }
}
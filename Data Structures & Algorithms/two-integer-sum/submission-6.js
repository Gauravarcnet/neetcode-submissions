class Solution {
    /**
     * @param {number[]} nums
     * @param {number} target
     * @return {number[]}
     */
    twoSum(nums, target) {
        let hashMap = {};
        for(let i = 0; i < nums.length; i++ ){
            let diff = target - nums[i];
            if(hashMap.hasOwnProperty(diff)){
                return [hashMap[diff], i]
            }else{
                hashMap[nums[i]] = i;
            }
        }
        console.log(hashMap)
        return [];
    }
}

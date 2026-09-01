class Solution {
    /**
     * @param {number[]} nums
     * @return {number}
     */
    longestConsecutive(nums) {
        let hashMap = {};
        let maxLength = 0;
        for (let num of nums) {
            hashMap[num] = true;
        }
        for(let i = 0; i < nums.length; i++){
            if(!hashMap[nums[i]-1]){
                let currentLength = 1;
                let currentNum = nums[i];
                while(hashMap[currentNum+1]){
                    currentNum++
                    currentLength++ ;
                }
                maxLength = Math.max(currentLength, maxLength)
            }
        }
        return maxLength
    }
}

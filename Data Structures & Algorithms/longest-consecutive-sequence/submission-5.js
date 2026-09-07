class Solution {
    /**
     * @param {number[]} nums
     * @return {number}
     */
    longestConsecutive(nums) {
        
        if(nums.length === 0) return 0;

        const numSet = new Set(nums);
        let maxLength = 1;
        for (let num of nums){
            if(!numSet.has(num-1)){
                let currentStreak = 1;
                let currentNumber = num;

                while(numSet.has(currentNumber+1)){
                    currentStreak = currentStreak+1;
                    currentNumber = currentNumber+1
                }
                maxLength = Math.max(maxLength, currentStreak);
            }
        }
        
        return maxLength
    }
    
}

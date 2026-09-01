class Solution {
    /**
     * @param {number[]} nums
     * @return {number}
     */
    longestConsecutive(nums) {
        if(nums.length === 0) return 0;
        const set = new Set(nums);
        let longest = 0
        for(let num of nums){
            let currentNum = num;
            if(!set.has(num-1)){
                let count = 1;
                while(set.has(currentNum+1)){
                    count++
                    currentNum++
                }
                longest = Math.max(count, longest)

            }
        }
        return longest
    }
}

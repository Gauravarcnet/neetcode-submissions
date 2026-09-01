class Solution {
    /**
     * @param {number[]} nums
     * @return {number[][]}
     */

    backTrack(start, currentPath, nums, result){
        result.push([...currentPath]);
        for(let i = start; i < nums.length; i++){
            currentPath.push(nums[i]);
            this.backTrack(i+1, currentPath, nums, result);
            currentPath.pop()
        }
        return result;
    }
    subsets(nums) {
        let stack = [];
        let result = []
        return this.backTrack(0, stack, nums, result)

        
    }
}

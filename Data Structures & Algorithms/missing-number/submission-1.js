class Solution {
    /**
     * @param {number[]} nums
     * @return {number}
     */
    missingNumber(nums) {
        let n = nums.length;
        let expectedSum =  n*(n+1)/2;
        let actualSum = nums.reduce((sum,num) => {
            return (sum+num);
        })
        return (expectedSum - actualSum);

    }
}

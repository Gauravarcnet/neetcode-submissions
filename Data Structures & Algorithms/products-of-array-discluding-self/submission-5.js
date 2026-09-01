class Solution {
    /**
     * @param {number[]} nums
     * @return {number[]}
     */
    productExceptSelf(nums) {
        
        let prefix = 1;
        let output = new Array(nums.length).fill(1);

        for(let i = 0; i < nums.length; i++){
            output[i] = prefix;
            prefix = prefix * nums[i]
        }
        console.log(output)
        let suffix = 1;
        for(let i = nums.length-1; i >= 0; i--){
            output[i] *= suffix;
            suffix *= nums[i] 
        }
        return output
    }
}

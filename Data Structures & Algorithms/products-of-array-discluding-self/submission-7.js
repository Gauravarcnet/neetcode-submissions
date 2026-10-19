class Solution {
    /**
     * @param {number[]} nums
     * @return {number[]}
     */
    productExceptSelf(nums) {
        const n = nums.length;
        // Initialize the result array with 1s
        const result = new Array(n).fill(1);

        // 1st Pass: Calculate the Prefix product for each index
        // (The product of all numbers to the left of the current index)
        let prefix = 1;
        for (let i = 0; i < n; i++) {
            result[i] = prefix;       // Store the left-side product in the result array
            prefix *= nums[i];        // Update the running prefix product
        }

        // 2nd Pass: Calculate the Postfix product on the fly and multiply it
        // (The product of all numbers to the right of the current index)
        let postfix = 1;
        for (let i = n - 1; i >= 0; i--) {
            result[i] *= postfix;     // Multiply the existing left-side product by the right-side product
            postfix *= nums[i];       // Update the running postfix product
        }

        return result;
    }
}

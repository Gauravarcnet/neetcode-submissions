class Solution {
    /**
     * @param {number[]} nums
     * @param {number} target
     * @return {number[]}
     */
    twoSum(nums, target) {
        // Map to store the numbers we've seen and their exact index
        const seenNumbers = new Map();

        for (let i = 0; i < nums.length; i++) {
            const currentNum = nums[i];
            const complement = target - currentNum;

            // Check if the complement exists in our Map
            if (seenNumbers.has(complement)) {
            // The complement was seen earlier, so its index is smaller.
            // We return it first, followed by the current index.
            return [seenNumbers.get(complement), i];
            }

            // If not found, add the current number and its index to the Map
            seenNumbers.set(currentNum, i);
        }
            }
}

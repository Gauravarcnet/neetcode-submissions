class Solution {
    /**
     * @param {number[]} nums
     * @param {number} k
     * @return {number[]}
     */
    topKFrequent(nums, k) {
        const countMap = new Map();

        // 1. Build the frequency map
        for (const num of nums) {
            countMap.set(num, (countMap.get(num) || 0) + 1);
        }

        // 2. Convert the Map into an array of [number, frequency] pairs
        // e.g., [[1, 1], [2, 2], [3, 3]]
        const entries = Array.from(countMap.entries());

        // 3. Sort the array based on the frequency (the second item in the pair) in descending order
        entries.sort((a, b) => b[1] - a[1]);

        // 4. Slice the first 'k' elements and map them to return only the numbers (not the frequencies)
        return entries.slice(0, k).map(pair => pair[0]);
    }
}

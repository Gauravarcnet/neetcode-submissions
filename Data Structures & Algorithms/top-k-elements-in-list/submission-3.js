class Solution {
    /**
     * @param {number[]} nums
     * @param {number} k
     * @return {number[]}
     */
    topKFrequent(nums, k) {
        let hashMap = {};
        for(let i = 0; i < nums.length; i++){
            hashMap[nums[i]] = ( hashMap[nums[i]] || 0 ) + 1
        }
        const arr = Object.entries(hashMap).map(([num, freq]) => [
            freq,
            parseInt(num),
        ]);
        console.log(arr)
        arr.sort((a, b) => b[0] - a[0]);

        return arr.slice(0, k).map((pair) => pair[1]);
    }
}

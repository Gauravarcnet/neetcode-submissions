class Solution {
    /**
     * @param {string} s
     * @param {number} k
     * @return {number}
     */
    characterReplacement(s, k) {
        let left = 0; let maxCount = 0; let frequency = {};
        let result = 0
        for(let r = 0; r < s.length; r++){
            const char = s[r];
            frequency[char] = (frequency[char] || 0) + 1;
            maxCount = Math.max(maxCount, frequency[char]);

            while( (r-left+1)- maxCount > k){
                frequency[s[left]] -=1;
                left++;
            }

            result = Math.max(result, r - left + 1);

        }
        console.log(frequency)
        return result;
    }
}

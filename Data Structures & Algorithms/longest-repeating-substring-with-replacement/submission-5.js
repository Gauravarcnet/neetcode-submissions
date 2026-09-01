class Solution {
    /**
     * @param {string} s
     * @param {number} k
     * @return {number}
     */
    characterReplacement(s, k) {
        let count = new Map(); let maxFrequency = 0; let longestSubstring = 0;
        let l = 0;
        for(let r = 0; r < s.length; r++){
            count.set(s[r], (count.get(s[r]) || 0) +1);
            maxFrequency = Math.max(maxFrequency, count.get(s[r]));

            while((r-l+1)-maxFrequency > k){
                count.set(s[l], count.get(s[l])-1);
                l++;
            }
            longestSubstring = Math.max(longestSubstring, (r-l+1))
         }
         return longestSubstring

    }
}

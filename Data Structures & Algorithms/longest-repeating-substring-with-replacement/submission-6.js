class Solution {
    /**
     * @param {string} s
     * @param {number} k
     * @return {number}
     */
    characterReplacement(s, k) {
        let left = 0;
        let maxLen = 0;
        let maxFreq = 0;
        let map = {};

        for(let right = 0; right < s.length; right++){
            const rightChar = s[right];
            map[rightChar] = (map[rightChar] || 0) + 1;
            maxFreq = Math.max(maxFreq, map[rightChar])

            while((right-left+1) - maxFreq > k){
                let leftChar =  s[left];
                map[leftChar]--;
                left++
            }
            maxLen = Math.max(maxLen, (right-left+1)) 
        }
        return maxLen
    }
}

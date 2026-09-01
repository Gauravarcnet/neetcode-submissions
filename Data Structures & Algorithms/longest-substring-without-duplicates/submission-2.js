class Solution {
    /**
     * @param {string} s
     * @return {number}
     */
    lengthOfLongestSubstring(s) {
        let left = 0; let result = 0;
        let r = 0;
        let mp = new Map();

        while(r < s.length){
            if(mp.has(s[r])){
                left = Math.max(mp.get(s[r]) + 1, left);
            }
            mp.set(s[r], r);
            result = Math.max(result, r-left+1)
            r++;
        }
        // console.log()
        return result
    }
}

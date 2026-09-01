class Solution {
    /**
     * @param {string} s
     * @return {number}
     */
    lengthOfLongestSubstring(s) {
        let result = 0;
        let left = 0;
        let mp = new Map()

        for(let r = 0; r < s.length; r++){
            if(mp.has(s[r])){
                left = Math.max(mp.get(s[r])+1, left)
            }
            mp.set(s[r], r);
            result = Math.max(result, r-left+1);
        }
        console.log(mp)
        return result 
    }
}

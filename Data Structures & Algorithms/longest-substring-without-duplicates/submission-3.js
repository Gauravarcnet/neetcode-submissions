class Solution {
    /**
     * @param {string} s
     * @return {number}
     */
    lengthOfLongestSubstring(s) {
        let left = 0;
        let right = s.length;
        let r= 0;
        let map = new Map();
        let stringLen = 0;
        while( r < right){
            if(map.has(s[r])){
                left = Math.max(map.get(s[r])+1, left);

            }
            map.set(s[r], r);
            stringLen = Math.max(stringLen, r-left+1)
            r++
        }
        return stringLen
    }
}

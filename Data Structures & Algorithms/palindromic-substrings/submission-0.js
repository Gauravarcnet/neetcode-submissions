class Solution {
    /**
     * @param {string} s
     * @return {number}
     */
    expandAroundCenter(s, left, right){
        let subCount = 0;
        while(left >=0 && right < s.length && s[left] === s[right]){
            left--;
            right++;
            subCount++;
        }
        return subCount;
    }
    countSubstrings(s) {
        let count = 0;

        for(let i = 0; i < s.length; i++){
            count += this.expandAroundCenter(s, i, i)
            count += this.expandAroundCenter(s, i, i+1)

        }
        return count

    }
}

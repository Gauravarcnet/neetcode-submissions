class Solution {
    /**
     * @param {string} s
     * @return {string}
     */
    expandAroundCenter(s,left, right){
        while( left >= 0 && right < s.length && s[left] === s[right]){
            left--;
            right++
        }
        return right-left-1;

    }
    longestPalindrome(s) {
        
        if(!s || s.length < 1){
            return "";
        }

        let start = 0;
        let end = 0;

        for(let i = 0; i < s.length; i++){
            let len1 = this.expandAroundCenter(s, i, i);
            let len2 = this.expandAroundCenter(s, i, i+1);

            let maxLen = Math.max(len1, len2);

            if(maxLen > end - start){
                start = i - Math.floor((maxLen-1)/2);
                end = i + Math.floor((maxLen)/2);

            }
        }
        

        return s.substring(start, end+1)



    }
}

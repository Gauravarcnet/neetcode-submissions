class Solution {
    /**
     * @param {string} s
     * @return {boolean}
     */
    isPalindrome(s) {
        let stringWithoutSpace = s.toLowerCase().replace(/[^a-zA-Z0-9]/g, '')

        let left = 0;
        let right = stringWithoutSpace.length-1;

        while(left < right){
            if(stringWithoutSpace[left] !== stringWithoutSpace[right]){
                return false
            }
            left++;
            right--
        }
        return true
        
    }

    
}

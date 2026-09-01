class Solution {
    /**
     * @param {string} s
     * @return {boolean}
     */
    isPalindrome(s) {
        let string = s.toLowerCase();
        let removeWhiteSpaceStringOrginal = string.replace(/[^a-zA-Z0-9]/g,'')
        let reverseString = removeWhiteSpaceStringOrginal.split("").reverse().join('');
        return (reverseString === removeWhiteSpaceStringOrginal)
    }
}

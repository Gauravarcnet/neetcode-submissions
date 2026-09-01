class Solution {
    /**
     * @param {string} s
     * @return {number}
     */
    lengthOfLongestSubstring(s) {
        let hashMap = {}; // stores last seen index of each character
        let maxLength = 0;
        let left = 0;

        for (let right = 0; right < s.length; right++) {
            let char = s[right];

            // If char was seen and in current window, move left pointer
            if (hashMap[char] >= left) {
                left = hashMap[char] + 1;
            }

            // Store/update last seen index of current char
            hashMap[char] = right;

            // Update max length
            maxLength = Math.max(maxLength, right - left + 1);
        }
        console.log(hashMap)
        return maxLength;
        }
}

class Solution {
    /**
     * @param {string} s
     * @param {string} t
     * @return {boolean}
     */
    isAnagram(s, t) {
        if (s.length !== t.length) {
            return false;
        }

        const charCount = new Map();

        for (let i = 0; i < s.length; i++) {
            // Increment for characters in string s
            charCount.set(s[i], (charCount.get(s[i]) || 0) + 1);
            
            // Decrement for characters in string t
            charCount.set(t[i], (charCount.get(t[i]) || 0) - 1);
        }

        // Check if all values in the Map perfectly balance out to 0
        for (const count of charCount.values()) {
            if (count !== 0) {
            return false;
            }
        }

        return true;
    }
}

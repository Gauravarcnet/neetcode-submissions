class Solution {
    /**
     * @param {string} s
     * @param {string} t
     * @return {boolean}
     */
    isAnagram(s, t) {
        if(s.length !== t.length) return false;

        let sCount = new Map()
        let tCount = new Map()

        for(let i = 0; i < s.length; i++){
            sCount.set(s[i], (sCount.get(s[i]) || 0) +1)
        }

        for(let i = 0; i < t.length; i++){
            tCount.set(t[i], (tCount.get(t[i]) || 0) +1)
        }

        for (let [key, count] of sCount){
            if(sCount.get(key) !== tCount.get(key)) return false
        }
        return true
    }
}

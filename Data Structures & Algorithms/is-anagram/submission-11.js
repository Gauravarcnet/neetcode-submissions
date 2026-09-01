class Solution {
    /**
     * @param {string} s
     * @param {string} t
     * @return {boolean}
     */
    isAnagram(s, t) {
        if(s.length !== t.length) return false;
        let map1 = new Map();
        let map2 = new Map();

        for(let i = 0; i < s.length; i++){
            map1.set(s[i],(map1.get(s[i]) || 0)+1);
        }
        for(let i = 0; i < t.length; i++){
            map2.set(t[i],(map2.get(t[i]) || 0)+1);
        }

        for(let [key, count] of map1){
            if(map2.get(key) !== map1.get(key)){
                return false
            }
        }
        return true
    }
}

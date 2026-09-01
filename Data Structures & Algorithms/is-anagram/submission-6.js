class Solution {
    /**
     * @param {string} s
     * @param {string} t
     * @return {boolean}
     */
    isAnagram(s, t) {
        if(s.length !== t.length) return false
        let hashMap1 = {};
        let hashMap2 = {};

        for (let i = 0; i < s.length; i++){
            hashMap1[s[i]] = ((hashMap1[s[i]] || 0) + 1);
        }
        for (let i = 0; i < t.length; i++){
            hashMap2[t[i]] = ((hashMap2[t[i]] || 0) + 1);
        }
        // console.log(hashMap2)
        // console.log(hashMap1)

        for(let key in hashMap1){
            if(hashMap1[key] !== hashMap2[key]){
                return false;
            }
        }
        return true;

    }
}

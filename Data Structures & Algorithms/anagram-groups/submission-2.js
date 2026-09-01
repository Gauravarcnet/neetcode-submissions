class Solution {
    /**
     * @param {string[]} strs
     * @return {string[][]}
     */
    groupAnagrams(strs) {
        let hashMap = {}
        let string = ''
        
        for(let i = 0; i < strs.length; i++){
            string = strs[i].split("").sort().join("")
            if(hashMap[string]){
                hashMap[string].push(strs[i])
            }else{
                hashMap[string] = []
                hashMap[string].push(strs[i])
            }
        }
        return Object.values(hashMap);
    }
}

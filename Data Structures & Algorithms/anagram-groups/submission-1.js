class Solution {
    /**
     * @param {string[]} strs
     * @return {string[][]}
     */
    groupAnagrams(strs) {
        let hashMap = {};
        for(let i = 0; i < strs.length; i++){
            let sortedWord = strs[i].split('').sort().join('');
            if(hashMap[sortedWord]){
                hashMap[sortedWord].push(strs[i])
            }else{
                hashMap[sortedWord] = [];
                hashMap[sortedWord].push(strs[i])
            }
        }
        return Object.values(hashMap)
    }
}

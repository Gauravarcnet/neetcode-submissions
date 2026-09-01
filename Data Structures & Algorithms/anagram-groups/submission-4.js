class Solution {
    /**
     * @param {string[]} strs
     * @return {string[][]}
     */
    groupAnagrams(strs) {
        let hashMap = {};
        for(let i = 0; i < strs.length; i++){
            let sortedStr = strs[i].split("").sort().join("")
            if(hashMap[sortedStr]){
                hashMap[sortedStr].push(strs[i])
            }else{
                hashMap[sortedStr] = []
                hashMap[sortedStr].push(strs[i])
            }
            // console.log(hashMap)
        }
        return Object.values(hashMap)
    }
}

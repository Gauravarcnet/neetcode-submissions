class Solution {
    /**
     * @param {string[]} strs
     * @return {string[][]}
     */
    groupAnagrams(strs) {
        let map = new Map();
        let orginalWord;
        let sortedWord;

        for(let i = 0; i < strs.length; i++){
            orginalWord = strs[i];
            sortedWord = orginalWord.split("").sort().join("")

            if(map.has(sortedWord)){
                map.get(sortedWord).push(orginalWord)
            }else{
                map.set(sortedWord, [])
                map.get(sortedWord).push(orginalWord)

            }

        }
        return Array.from(map.values())
    }

}

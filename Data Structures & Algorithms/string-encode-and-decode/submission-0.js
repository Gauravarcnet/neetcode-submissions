class Solution {
    /**
     * @param {string[]} strs
     * @returns {string}
     */
    encode(strs) {
        let newString = '';
        for(let i = 0; i < strs.length; i++){
            newString += strs[i].length + "#" + strs[i];
        }
        return newString;
    }

    /**
     * @param {string} str
     * @returns {string[]}
     */
    decode(str) {
        console.log(str)
        let res = [];
        for(let i = 0; i < str.length;){
            let j = i;
            while (str[j] !== '#' && j < str.length) {
                j++;
            }

         // Extract length from i to j (exclusive)
            let lengthStr = str.slice(i, j);
            let length = Number(lengthStr);

            // Extract the substring of given length starting after '#'
            let subStr = str.slice(j + 1, j + 1 + length);
            res.push(subStr);

            // Update i to position after the extracted substring
            i = j + 1 + length;
            }
            return res
    }
}

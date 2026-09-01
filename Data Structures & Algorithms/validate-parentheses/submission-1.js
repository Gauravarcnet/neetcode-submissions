class Solution {
    /**
     * @param {string} s
     * @return {boolean}
     */
    isValid(s) {
        const stack = [];
        let mapBracket = {
            ")" : "(",
            "}" : "{",
            "]" : "["
        }

        for(let i = 0; i < s.length; i++){
            let char = s[i];

            if(mapBracket[char] != undefined){
                let topElement = stack.pop();

                if(topElement !== mapBracket[char]){
                    return false
                }
            }else{
                stack.push(char)
            }
        }
        return stack.length === 0;
    }
}

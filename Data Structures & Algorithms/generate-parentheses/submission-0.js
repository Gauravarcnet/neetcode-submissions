class Solution {
    /**
     * @param {number} n
     * @return {string[]}
     */
    backTracking(current, open, close,n, result){
        if(current.length === 2*n){
            result.push(current);
            return 
        }
        if(open < n){
            this.backTracking(current+"(", open+1, close, n, result)
        }
        if(close < open){
            this.backTracking(current+")", open, close+1, n, result)
        }
    }
    generateParenthesis(n) {
        let result = []
        this.backTracking("", 0, 0,n,result)
        return result
    }
}

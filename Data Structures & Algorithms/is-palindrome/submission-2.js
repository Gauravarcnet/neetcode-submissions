class Solution {
    /**
     * @param {string} s
     * @return {boolean}
     */
    isPalindrome(s) {
        let stringInLowerCase = s.replace(/[^a-zA-Z0-9]/g, '').toLocaleLowerCase();
        let stringInLowerCaseArray = stringInLowerCase.split("");
        let left = 0; let right = stringInLowerCaseArray.length-1;
        while(left < right){
            [stringInLowerCaseArray[left], stringInLowerCaseArray[right]] = [stringInLowerCaseArray[right], stringInLowerCaseArray[left]];
            left++;
            right--;
        }
        console.log(stringInLowerCase)
        console.log(stringInLowerCaseArray.join(""))
        return  ( stringInLowerCaseArray.join("") === stringInLowerCase)

    }

}

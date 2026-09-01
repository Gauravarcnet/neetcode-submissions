class Solution {
    /**
     * @param {string} s1
     * @param {string} s2
     * @return {boolean}
     */
    checkInclusion(s1, s2) {
        
        if(s1.length > s2.length) return false;

        let count1 = new Array(26).fill(0);
        let count2 = new Array(26).fill(0);

        const charCodeAt = 'a'.charCodeAt(0);

        for(let i = 0; i < s1.length; i++){
            count1[s1.charCodeAt(i) - charCodeAt]++ ;
            count2[s2.charCodeAt(i) - charCodeAt]++ ;
        }
        let matches = 0;

        for(let i = 0; i < 26; i++){
            if( count1[i] === count2[i] ) {
                matches++ ;
            }
        }

        let left = 0

        for(let right = s1.length; right < s2.length; right++){
            if( matches === 26) {
                return true ;
            }
            
            // add new char to window
            let index = s2.charCodeAt(right)-charCodeAt;
            count2[index]++;
            
            if( count2[index] === count1[index]){
                matches++;
            }else if(count2[index] === count1[index]+1){
                matches--;
            }
            // remove old char from window
            index = s2.charCodeAt(left) - charCodeAt;
            count2[index]--;
            
            if( count2[index] === count1[index]){
                matches++;
            }else if(count2[index] === count1[index]-1){
                matches--;

            }
            left++;
        }
        return matches === 26;


    }
}

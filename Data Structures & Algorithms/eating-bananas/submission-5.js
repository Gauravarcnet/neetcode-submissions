class Solution {
    /**
     * @param {number[]} piles
     * @param {number} h
     * @return {number}
     */
    minEatingSpeed(piles, h) {

        let left = 1;
        let right = Math.max(...piles);
        let result = right;
        while(left <=right){
            const mid = Math.floor((left+right)/2);
            let hours = 0;
            for(let pile of piles){
                hours += Math.ceil(pile/mid); 
            }
            if(hours > h){
                left = mid+1
            }else{
                result = mid;
                right = mid-1
            }
                
        }
        return result;


    }
}

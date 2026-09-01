class Solution {
    /**
     * @param {number[]} numbers
     * @param {number} target
     * @return {number[]}
     */
    twoSum(numbers, target) {
        let right = numbers.length-1;
        let left = 0
        let sum = 0;
        while(left < right){
            sum = numbers[left] + numbers[right];
            if(target === sum){
                return ([left+1, right+1])
            }else if(sum < target){
                left++
            }else{
                right--
            }
        }
    }
}

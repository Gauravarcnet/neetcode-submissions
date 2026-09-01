class Solution {
    /**
     * @param {number[]} numbers
     * @param {number} target
     * @return {number[]}
     */
    twoSum(numbers, target) {
        let sum = 0;
        let start = 0;
        let end = numbers.length-1;

        while(start < end){
            sum = numbers[start] + numbers[end];
            if(target === sum){
                return ([start+1, end+1]);
            }else if(sum < target){
                start++;
            }else{
                end--;
            }
        }
    }
}

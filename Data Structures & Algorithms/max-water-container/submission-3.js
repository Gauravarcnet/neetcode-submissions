class Solution {
    /**
     * @param {number[]} heights
     * @return {number}
     */
    maxArea(heights) {
        let left = 0; let right = heights.length-1;
        let maxArea = 0;

        while(left < right){
            let area;
            if(heights[left] > heights[right]){
                area = ((right - left) * heights[right]);
                right--;
            }else{
                area = ((right - left) * heights[left]);
                left++;
            }
            // console.log(area)
            maxArea = Math.max(maxArea, area)
        }
        return maxArea
    }
}

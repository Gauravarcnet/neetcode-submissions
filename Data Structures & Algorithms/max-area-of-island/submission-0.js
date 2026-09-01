class Solution {
    /**
     * @param {number[][]} grid
     * @return {number}
     */
    maxAreaOfIsland(grid) {
        if(!grid || grid.length === 0) return ;

        let rows = grid.length;
        let cols = grid[0].length;
        let maxArea = 0;

        function dfsArea(r,c){
            if(
                r < 0 ||
                c < 0 ||
                r >= rows ||
                c >= cols ||
                grid[r][c] === 0
            ){
                return 0;
            }
            grid[r][c] = 0;
            let area = 1;
            area += dfsArea(r+1, c) 
            area += dfsArea(r-1, c)
            area += dfsArea(r, c+1)
            area += dfsArea(r, c-1)
            return area;
        }

        for(let i = 0; i < rows; i++){
            for(let j = 0; j < cols; j++){
                if(grid[i][j] === 1){
                    let area = dfsArea(i,j);
                    maxArea = Math.max(area, maxArea)
                }
            }
        }
        return maxArea;
    }
}

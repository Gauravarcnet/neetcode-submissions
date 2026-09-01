class Solution {
    backTracking(index, currentTarget, path, result, candidates) {
        if (currentTarget === 0) {
            result.push([...path]);
            return;
        }

        // Change: Start loop from 'index' instead of '0'
        for (let i = index; i < candidates.length; i++) {
            
            // Skip duplicates (Only works if array is sorted)
            if (i > index && candidates[i] === candidates[i - 1]) continue;
            
            // Pruning (Only works if array is sorted)
            if (candidates[i] > currentTarget) break;

            path.push(candidates[i]);
            
            // Recurse: Move to next index i + 1
            this.backTracking(i + 1, currentTarget - candidates[i], path, result, candidates);
            
            // Backtrack
            path.pop();
        }
    }

    combinationSum2(candidates, target) {
        let result = [];
        
        // Change: MUST sort for duplicate logic to work
        candidates.sort((a, b) => a - b);
        
        this.backTracking(0, target, [], result, candidates);
        
        return result; // Change: Return the final list
    }
}
class Solution:
    def hasDuplicate(self, nums: List[int]) -> bool:
        self.seen = set()

        for num in nums:
            if num in self.seen:
                return True 
            self.seen.add(num)
        return False
        
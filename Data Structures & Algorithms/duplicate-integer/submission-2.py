class Solution:
    def hasDuplicate(self, nums: List[int]) -> bool:
        hashMap = {}
        for num in nums:
            if num in hashMap:
                print("found")
                return True;
            else:
                print("1st time")
                hashMap[num] = True
        return False

        
        
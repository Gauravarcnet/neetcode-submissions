class Solution:
    def twoSum(self, nums: List[int], target: int) -> List[int]:
        hashMap = {};
        diff = 0

        for i, num in enumerate(nums):
            diff = target - num
            if diff in hashMap:
                return [hashMap[diff], i]
            hashMap[num] = i
        return []
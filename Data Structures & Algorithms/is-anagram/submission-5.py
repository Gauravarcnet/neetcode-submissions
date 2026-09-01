class Solution:
    def isAnagram(self, s: str, t: str) -> bool:

        if len(s) != len(t):
            return False

        hashMap1 = {}
        hashMap2 = {}

        for ch in s:
            if ch in hashMap1:
                hashMap1[ch] +=1
            else:
                hashMap1[ch] = 1 

        for ch in t:
            if ch in hashMap2:
                hashMap2[ch] +=1
            else:
                hashMap2[ch] = 1 
        

        for ch in hashMap1:
            if ch not in hashMap2 or hashMap1[ch] != hashMap2[ch]:
                return False
        return True

        
        
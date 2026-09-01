class Solution:
    def groupAnagrams(self, strs: List[str]) -> List[List[str]]:
        hashMap = {};

        for i, word in enumerate(strs):
            wordSorted = "".join(sorted(word))
            if wordSorted in hashMap:
                hashMap[wordSorted].append(word)
            else:
                hashMap[wordSorted] = [word]
        return list(hashMap.values())
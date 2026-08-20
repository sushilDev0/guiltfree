/*
LC 567: Permutation in String

Given two strings s1 and s2, return true if s1 is a permutation of a substring of s2. Otherwise return false.

Example:

s1 = "ab", s2 = "eidbaooo" → true (because "ba" in s2 is a permutation of "ab")
s1 = "ab", s2 = "ababab" → true (obviously)
s1 = "ab", s2 = "a" → false
*/


var permInStr = function(s1,s2){

      if (s1.length > s2.length) return false;
    
    const map = new Map();
    
    // Build frequency map for s1
    for (const char of s1) {
        map.set(char, (map.get(char) || 0) + 1);
    }
    
    // Track how many distinct characters we still need to match
    let neededChars = map.size;
    let left = 0;
    
    // Slide window with right pointer
    for (let right = 0; right < s2.length; right++) {
        const rightChar = s2[right];
        
        // Character entering the window (right side)
        if (map.has(rightChar)) {
            map.set(rightChar, map.get(rightChar) - 1);
            if (map.get(rightChar) === 0) {
                neededChars--;  // We've matched this character
            }
        }
        
        // Shrink window if it exceeds s1.length
        if (right - left + 1 > s1.length) {
            const leftChar = s2[left];
            
            if (map.has(leftChar)) {
                if (map.get(leftChar) === 0) {
                    neededChars++;  // We're unmatching this character
                }
                map.set(leftChar, map.get(leftChar) + 1);
            }
            left++;
        }
        
        // If all characters are matched, we found a permutation
        if (neededChars === 0) {
            return true;
        }
    }
    
    return false;
}
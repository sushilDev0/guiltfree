/*
LC 424 — Longest Repeating Character Replacement

js

s = "ABAB", k = 2

// output: 4

// replace 2 B's with A's → "AAAA" → length 4

s = "AABABBA", k = 1

// output: 4

// replace 1 A → "AABBBBA" or similar → length 4

*/


var LngRepChRep = function(s, k) {
   
    if(!s || s.length === 0) return 0;

    let left = 0;
    let right = 0;
    let maxCount = 0;
    let charCount = new Array(26).fill(0);

    while(right < s.length){
      const rightChar = s.charCodeAt(right)-65;
      charCount[rightChar]++;
      maxCount = Math.max(maxCount, charCount[rightChar]);


      if((right - left + 1) - maxCount > k){
        const leftChar = s.charCodeAt(left)-65;
        charCount[leftChar]--;
        left++;
      }
      right++;

    }
    return right - left;
}



var LngRepChRep1 = function(s, k) {
    // Best case 1: Empty string or single character
    if (!s || s.length === 0) return 0;
    if (s.length === 1) return 1;

    // Best case 2: k is large enough to cover the whole string
    if (k >= s.length - 1) return s.length;

    let left = 0;
    let right = 0;
    let maxCount = 0;
    const charCount = new Array(26).fill(0);

    while (right < s.length) {
        const rightChar = s.charCodeAt(right) - 65;
        charCount[rightChar]++;
        maxCount = Math.max(maxCount, charCount[rightChar]);

        // Best case 3: If maxCount + k already reaches s.length, return s.length early
        if (maxCount + k >= s.length) return s.length;

        if ((right - left + 1) - maxCount > k) {
            const leftChar = s.charCodeAt(left) - 65;
            charCount[leftChar]--;
            left++;
        }
        right++;
    }

    return right - left;
};



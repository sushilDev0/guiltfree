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


var LngRepChRep = function(s,k)_{
   
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

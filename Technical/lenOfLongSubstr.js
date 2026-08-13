/*
LC 3 — Longest Substring Without Repeating Characters

s = "abcabcbb"
// output: 3 → "abc"

s = "bbbbb"
// output: 1 → "b"

s = "pwwkew"
// output: 3 → "wke"
*/

var lengthOfLongestSubstring = function(s){

    if(s.length === 0) return;
    const map = {};
    let left = 0;
    let maxLength = 0;

    for(let right = 0; right < s.length; right++){
       if(map[s[right]] !== undefined){
        left = Math.max(left, map[s[right]]+1);
       }
       map[s[right]] = right;
       maxLength = Math.max(maxLength, right- left + 1);
    }
    return maxLength;
}

let s1 = "abcabcbb"
let s2 = "bbbbb"
let s3 = "pwwkew"
let s4 = "";

console.log(lengthOfLongestSubstring(s1))
console.log(lengthOfLongestSubstring(s2))
console.log(lengthOfLongestSubstring(s3))
console.log(lengthOfLongestSubstring(s4))

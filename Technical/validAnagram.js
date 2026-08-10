/*


s = "anagram", t = "nagaram"
// output: true

s = "rat", t = "car"
// output: false

An anagram = same letters, same count, different order.

*/
var validAnagram = function (s, t) {

    if (s.length !== t.length) return false;
    const frequencyMap = new Map();
    for (const item of s) {
        frequencyMap.set(item, (frequencyMap.get(item) || 0) + 1);
    }
    for (const char of t) {
        if (!frequencyMap.has(char) || frequencyMap.get(char) === 0) {
            return false;
        }
        frequencyMap.set(char, frequencyMap.get(char) - 1);
    }
    return true;
};

let s = "anagram";
let t = "nagaram";

console.log(validAnagram(s, t))

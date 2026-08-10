/*
LC 383

ransomNote = "a", magazine = "b"
// output: false

ransomNote = "aa", magazine = "ab"
// output: false

ransomNote = "aa", magazine = "aab"
// output: true

*/
 
var ransomNote = function (note,  magazine){
   
    if (note.length > magazine.length) return false;
    
    let frequencyMap = new Map();

    for(const items of magazine){
      frequencyMap.set(items, (frequencyMap.get(items) || 0) + 1)
    }

    for(const char of note){
        if(!frequencyMap.has(char)|| frequencyMap.get(char)===0){
            return false;
        }
        frequencyMap.set(char, frequencyMap.get(char)-1);
    }
    return true;

}


let note = "abyasis"
let magazine = "anagram"
console.log(ransomNote(note, magazine))
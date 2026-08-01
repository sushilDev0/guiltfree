

var groupAnagrams = function(strs){
    const map = {}
    for(const word of strs){
        const freqArr = new Array(26).fill(0);



        for(const char of word){
            freqArr[char.charCodeAt(0)-97]++ ;
        }

        const key = freqArr.join('#');


        map[key] = map[key] || [];
        map[key].push(word);
    }

     return Object.values(map)
}

strs = ["eat","tea","tan","ate","nat","bat"]
console.log(groupAnagrams(strs))
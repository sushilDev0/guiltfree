// Challenge - First non-repeating character  

const firstUnique = (str)=>{
    
    let count = {};

    if(str.length > 1){
        for(let char of str){
            count[char] = (count[char] || 0) + 1 ;
        }

        for(let char of str){
            if(count[char]===1){
                return char;
            }
        }
    }

    return "NO unique character found "


}

console.log(firstUnique("bbccddee"))
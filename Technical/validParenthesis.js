/*
// LC 20 — Valid Parentheses

s = "()"      // true
s = "()[]{}"  // true
s = "(]"      // false
s = "([)]"    // false
s = "{[]}"    // true
*/

var validParenthhesis = function(s){
    if(!s || s.length ===0) return true;
const pairs = {')':'(', ']':'[', '}':'{'};    
let stack = [];
    for(let char of s){
        if(char === '(' || char === '[' || char === '{' ){
           stack.push(char);

        }
        else{

            if(stack.pop() !== pairs[char]) return false;
             
            }
            
        
    }
    return stack.length === 0;
}

console.log(validParenthhesis("()"))      // true

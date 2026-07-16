// [1,2,3,4,5] → sum of even numbers
// output: 6

const checker = ()=>{
    return [1,2,3,4,5].filter(num => num % 2 == 0).reduce((acc,curr)=> acc +curr, 0)
    
}
console.log(checker())
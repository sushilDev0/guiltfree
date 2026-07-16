// Array [1,2,3,4,5] → odd numbers ka square aur total sum

// Output: [1,9,25] ka sum = 35

// Hint: filter + map + reduce combine kar

const checker = ()=>{
    return [1,2,3,4,5].filter(num => num % 2 !== 0).map(num => num ** 2).reduce((acc,curr)=> acc + curr,0)
    
}
console.log(checker())
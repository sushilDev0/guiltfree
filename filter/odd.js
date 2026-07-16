// [1,2,3,4,5] → [1,9,25]
// (only odd numbers ka square)

const oddSquare = ()=>{
    const odds = [1,2,3,4,5]
    return odds.filter( num => num % 2 !== 0).map(num => num **2)
}

console.log(oddSquare())
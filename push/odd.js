// [1,2,3,4,5] → [1,9,25]
// (only odd numbers ka square)

const oddSquare = ()=>{
    const odds = [1,2,3,4,5]
        const oddSq = [];

    for(let num of odds){
        if(num % 2 !== 0)
            oddSq.push(num ** 2)
    }
    return oddSq;
}

console.log(oddSquare())
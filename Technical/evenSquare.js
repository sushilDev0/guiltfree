const nums = [1, 2, 3, 4, 5, 6];

const evenSquareChecker = ()=>{

    return nums.filter(num => num %2 ===0).map(num => num ** 2)
}

console.log(evenSquareChecker())
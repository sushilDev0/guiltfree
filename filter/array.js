// even numbmers ka array banao
// output:[2,4]


const picker = () =>{
    const arr = [1,2,3,4,5]
    const picked = arr.filter(arr => arr % 2 === 0)
    return picked;
}

console.log(picker())

const evenChecker = () =>{
    const arr1 = [1,2,3,4,5]
    const even = [];
    for(let num of arr1){
        if(num % 2=== 0)
            even.push(num)
    }
    return even;
}

console.log(evenChecker())
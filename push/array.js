// output [2,4,6,8]

const grinder = ()=>{
    
    const grind = [1,2,3,4]
    const grinder = []
    for(let i of grind){
       grinder.push(i*2)
    }
    return grinder

}

console.log(grinder())
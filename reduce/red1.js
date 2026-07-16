const users = [
  { id: 1, name: "Arnold", active: true },
  { id: 2, name: "Bautista", active: false },
  { id: 3, name: "Arnold", active: true },
  { id: 4, name: "Andrew", active: true }
];


const uniqueChecks =() =>{

   const result = users.reduce((acc,curr)=>{
    if(curr.active){
       acc.totalActive += 1
       acc.names.add(curr.name);
    }
    return acc
  },{totalActive:0, names: new Set()});

  return{
    totalActive: result.totalActive,
    uniquenames: [...result.names]
  }
}

console.log(uniqueChecks())
const users = [
  { id: 1, name: "Arnold", active: true },
  { id: 2, name: "Bautista", active: false },
  { id: 3, name: "Arnold", active: true },
  { id: 4, name: "Andrew", active: true }
];

const activeUnique = ()=>{
  
   const acitveChecks = users.filter(u=>u.active)
   const  uniqueNames = [...new Set(acitveChecks.map(u=>u.name))]
return {
    totalActive: acitveChecks.length,
    uniqueNames
}
}

console.log(activeUnique())
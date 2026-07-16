const users = [
  { id: 1, name: "Arnold", active: true },
  { id: 2, name: "bautista", active: false },
  { id: 3, name: "christopher Nolan", active: true }
];


const returnActive = () =>{
    
    const capitalize = (str)=> str.charAt(0).toUpperCase()+ str.slice(1);
    
   return users.filter(u => u.active).map(u=>capitalize(u.name))
    
  
}
console.log(returnActive())
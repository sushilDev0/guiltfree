   const orders = [
  { id: 1, amount: 100, status: "completed" },
  { id: 2, amount: 200, status: "pending" },
  { id: 3, amount: 300, status: "completed" },
  { id: 4, amount: 150, status: "failed" },
  { id: 5, amount: 400, status: "completed" }
];
   
   const totalChecks = ()=>{

       const getCompleted = orders.filter( ord => ord.status === "completed")
       let total = 0; 
       for( let order of getCompleted){
            total += order.amount
        }        
        return total;
   }



console.log(totalChecks())

const groups = () => {
  const grouping = orders.reduce((acc, curr) => {
    if (!acc[curr.status]) {
      acc[curr.status] = [];
    }
    acc[curr.status].push(curr);
    return acc;
  }, {});

  return grouping;
};

console.log(groups());
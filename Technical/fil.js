const orders = [
  { id: 1, amount: 100, status: "completed" },
  { id: 2, amount: 200, status: "pending" },
  { id: 3, amount: 300, status: "completed" },
  { id: 4, amount: 150, status: "completed" }
];


const aggregate = ()=>{

    const getCompleted = orders.filter( ord => ord.status === "completed")
    const addSum = getCompleted.map(ord => ord.amount + 50).filter(num => num > 200).reduce((acc,curr)=>{
    acc.total +=  curr;
    acc.count += 1;
    return acc;
    },{total:0, count:0})
   

      return addSum
}


console.log(aggregate())
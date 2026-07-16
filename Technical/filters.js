const orders = [
  { id: 1, amount: 100, status: "completed" },
  { id: 2, amount: 200, status: "pending" },
  { id: 3, amount: 300, status: "completed" },
  { id: 4, amount: 150, status: "completed" }
];


const totalSum = ()=>{
  const completedOrders = orders.filter(o=> o.status === "completed")
  const budget = completedOrders.map(ord => ord.amount + 50).filter(amount => amount > 200).reduce((acc,curr)=> {
    acc.total += curr;
  acc.count += 1;
  return acc;},
   {total:0, count:0})
   return budget
}

console.log(totalSum())
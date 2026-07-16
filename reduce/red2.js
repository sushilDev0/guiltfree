const orders = [
  { id: 1, amount: 100, status: "completed" },
  { id: 2, amount: 200, status: "pending" },
  { id: 3, amount: 300, status: "completed" },
  { id: 4, amount: 150, status: "failed" },
  { id: 5, amount: 400, status: "completed" }
];


const getStatus = () => {
  const currStats = orders.reduce((acc, curr) => {
    if (!acc[curr.status]) {
        acc[curr.status]= {count:0, total:0}
    }
    acc[curr.status].count += 1
    acc[curr.status].total += curr.amount;
    return acc;
  }, {});

  return currStats
};

console.log(getStatus());
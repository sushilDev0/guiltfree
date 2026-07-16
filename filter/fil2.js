   const orders = [
  { id: 1, amount: 100, status: "completed" },
  { id: 2, amount: 200, status: "pending" },
  { id: 3, amount: 300, status: "completed" },
  { id: 4, amount: 150, status: "failed" },
  { id: 5, amount: 400, status: "completed" }
];


       
    const result = orders.reduce((acc, curr) => {
        if (curr.status === "completed") {
            acc.totalRevenue += curr.amount;
            acc.totalOrders += 1;
        }
        return acc;
    }, { totalRevenue: 0, totalOrders: 0, avgOrderValue:0 });

  result.avgOrderValue = result.totalRevenue / result.totalOrders;
     console.log(result)

     ``


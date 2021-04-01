const salesTaxRates = {
  AB: 0.05,
  BC: 0.12,
  SK: 0.10
};

const companySalesData = [
  {
    name: "Telus",
    province: "BC",
    sales: [100, 200, 400]
  },
  {
    name: "Bombardier",
    province: "AB",
    sales: [80, 20, 10, 100, 90, 500]
  },
  {
    name: "Telus",
    province: "SK",
    sales: [500, 100]
  }
];

/* find total sales and total tax grouped by company */
const calculateSalesTax = function (salesData, taxRates) {
  let totalsObj = {};

  for (const company of salesData) {
    let salesTotal = 0;

    if (!totalsObj[company.name]) {
      totalsObj[company.name] = { totalSales: 0, totalTaxes: 0 }
    }

    for (const sale of company.sales) {
      salesTotal += sale;
    }
    totalsObj[company.name].totalSales += salesTotal; //
    totalsObj[company.name].totalTaxes += salesTotal * taxRates[company.province];
  }
  
  return totalsObj;
}

console.log(calculateSalesTax(companySalesData, salesTaxRates))

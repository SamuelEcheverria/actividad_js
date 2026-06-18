const initSalesCoffeeDataTable = (sales) => {
  $("#example").DataTable({
    data: sales,
    destroy: true,
    columns: [
      { data: "coffeeName" },
      { data: "cashType" },
      { data: "money" },
      { data: "timeOfDay" },
      { data: "date" },
      { data: "time" },
    ],
  });
};
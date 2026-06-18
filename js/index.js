const processSalesCoffee = async () => {
   const tableBody = document.querySelector("#example tbody");

  tableBody.innerHTML =
    '<tr><td colspan="6" class="border px-4 py-2 text-center">Cargando datos...</td></tr>';

  
    try {
    const xmlText = await getSalesCoffee();
    const xmlDocument = new DOMParser().parseFromString(xmlText, "text/xml");
    const rows = Array.from(xmlDocument.querySelectorAll("row"));

  const getValue = (row, tagName) =>
      row.querySelector(tagName)?.textContent.trim() || "";

    const sales = rows.map((row) => ({
      coffeeName: getValue(row, "coffee_name"),
      cashType: getValue(row, "cash_type"),
      money: getValue(row, "money"),
      timeOfDay: getValue(row, "Time_of_Day"),
      date: getValue(row, "Date"),
      time: getValue(row, "Time"),
    }));

    if (sales.length === 0) {
      throw new Error("El XML se cargo, pero no se encontraron registros.");
    }

    tableBody.innerHTML = "";
    initSalesCoffeeDataTable(sales);
  } catch (error) {
    tableBody.innerHTML = `<tr><td colspan="6" class="border px-4 py-2 text-center text-red-600">${error.message}</td></tr>`;
    console.error(error);
  }
};

window.addEventListener("DOMContentLoaded", processSalesCoffee);
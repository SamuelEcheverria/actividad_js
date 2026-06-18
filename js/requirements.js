const getSalesCoffee = async () => {
  const response = await fetch(
   "https://raw.githubusercontent.com/DATA-DAWM/Datos/refs/heads/main/Coffee/Coffe_sales.xml"
  );

   if (!response.ok) {
    throw new Error("No se pudo cargar el archivo XML de ventas de cafe.");
  }


  return response.text();
};
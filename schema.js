export const schema = [
  // Column #1
  {
    column: "Referencia",
    type: String,
    value: (row) => row.Referencia,
  },
  // Column #2
  {
    column: "Cantidad API",
    type: Number,
    value: (row) => row.cantidadAPI,
  },
  // Column #3
  {
    column: "Cantidad Busint",
    type: Number,
    value: (row) => row.cantidadBusint,
  },
];

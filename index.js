import fs from "fs";
import { apiStock } from "./apiStock.js";
import { realStock } from "./realStock.js";

let output = [];
for (const apiElement of apiStock) {
  for (const realElement of realStock) {
    if (
      apiElement.Referencia == realElement.Ref &&
      apiElement.ColorPinta == realElement.Colores &&
      apiElement.Tallas == realElement.Talla
    ) {
      output.push({
        Referencia: apiElement.Referencia,
        color: apiElement.ColorPinta,
        talla: " " + apiElement.Tallas,
        cantidadAPI: apiElement.Cantidad,
        cantidadBusint: realElement.CANT,
      });
      break;
    }
  }
}

var data =
  "Referencia \t Color \t Talla \t Cantidad API \t Cantidad Busint \t Diferencia \n";
for (var i = 0; i < output.length; i++) {
  data =
    data +
    output[i].Referencia +
    "\t" +
    output[i].color +
    "\t" +
    output[i].talla +
    "\t" +
    output[i].cantidadAPI +
    "\t" +
    output[i].cantidadBusint +
    "\t" +
    (output[i].cantidadAPI - output[i].cantidadBusint) +
    "\n";
}
fs.appendFile("Filename.xls", data, (err) => {
  if (err) throw err;
  console.log("File created");
});

// let data = JSON.stringify(output, null, 2);

// fs.writeFile("output.json", data, (err) => {
//   if (err) throw err;
//   console.log("Data written to file");
// });

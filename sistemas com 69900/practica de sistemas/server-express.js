// import express  from "express"; //una vez intslado express lo importo
// const app = express(); //inicializo express en una constante
// const Port = 8080;
// app.listen(Port, () => { // Corregido la función de callback
//     console.log(`server ok on port ${Port}`); // Corregido el uso de backticks y llaves
// });

import express from "express";

const app = express();

app.get("/", (req, res) => {
  res.send("Mi primer servidor Express");
});

//escuchand en el puerto 8080, como pide la consigna.
const Port = 8080;
app.listen(Port, () => {
  console.log(`server ok on port ${Port}`);
});




